from fastapi import (
    Depends,
    HTTPException,
    status,
    Response,
    APIRouter,
    Request,
)
from jwtdown_fastapi.authentication import Token
from authenticator import authenticator
from pydantic import BaseModel
from queries.accounts import AccountQueries
from models.accounts import AccountIn, AccountOut
# import time


class AccountForm(BaseModel):
    username: str
    password: str


class AccountToken(Token):
    account: AccountOut


class HttpError(BaseModel):
    detail: str


router = APIRouter()


@router.get("/token", response_model=AccountToken | None)
async def get_token(
    request: Request,
    account: AccountOut = Depends(authenticator.try_get_current_account_data),
) -> AccountToken | None:
    if account and authenticator.cookie_name in request.cookies:
        return {
            "access_token": request.cookies[authenticator.cookie_name],
            "type": "Bearer",
            "account": account,
        }


@router.post("/api/accounts", response_model=AccountToken | HttpError)
async def create_account(
    info: AccountIn,
    request: Request,
    response: Response,
    accounts: AccountQueries = Depends(),
):
    hashed_password = authenticator.hash_password(info.password)
    try:
        account = accounts.create(info, hashed_password)
    except:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Cannot create an account with those credentials",
        )
    form = AccountForm(username=info.username, password=info.password)
    token = await authenticator.login(response, request, form, accounts)
    return AccountToken(account=account, **token.dict())


# testAccount = {
#     'id': 'test_account',
#     'username': 'test_account',
#     'full_name': 'Test Account'
# }

# scope = {
#     "type": "http",
#     "asgi": {"version": "3.0"},
#     "http_version": "1.1",
#     "server": ("127.0.0.1", 8000),
#     "client": ("127.0.0.1", 1234),
#     "scheme": "http",
#     "method": "GET",
#     "root_path": "",
#     "path": "/",
#     "raw_path": b"/",
#     "query_string": b"",
#     "headers": [],
#     "extensions": {},
# }

# while True:
#     async def ping():
#         await get_token(Request(scope), testAccount)
#         print('Pinging database')
#         time.sleep(300)