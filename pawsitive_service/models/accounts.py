from pydantic import BaseModel


class AccountIn(BaseModel):
    username: str
    password: str
    full_name: str


class AccountOut(BaseModel):
    id: str
    username: str
    full_name: str


class AccountOutWithPassword(AccountOut):
    hashed_password: str
