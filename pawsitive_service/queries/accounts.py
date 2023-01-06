import os
from pydantic import BaseModel
from psycopg_pool import ConnectionPool


class DuplicateAccountError(ValueError):
    pass

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

pool = ConnectionPool(conninfo=os.environ["DATABASE_URL"])

class AccountQueries:

    def get(self, username: str) -> AccountOutWithPassword:
        # connect the database
        with pool.connection() as conn:
            # get a cursor (something to run SQL with)
            with conn.cursor() as db:
                # Run our SELECT statement
                result = db.execute(
                    """
                    SELECT id
                         , username
                         , hashed_password
                         , full_name
                    FROM accounts
                    WHERE username = %s;
                    """,
                    [username]
                )
                record = result.fetchone()
                if record is None:
                    return None
                return AccountOutWithPassword(
                    id=record[0],
                    username=record[1],
                    hashed_password=record[2],
                    full_name=record[3],
                )

    def create(self, account: AccountIn, hashed_password: str) -> AccountOutWithPassword:
        # connect the database
        with pool.connection() as conn:
            # get a cursor (something to run SQL with)
            with conn.cursor() as db:
                # Run our SELECT statement
                result = db.execute(
                    """
                    INSERT INTO accounts (username, hashed_password, full_name)
                    VALUES (%s, %s, %s)
                    RETURNING id;
                    """,
                    [account.username, hashed_password, account.full_name]
                )
                id = result.fetchone()[0]
                return AccountOutWithPassword(
                    id=id,
                    username=account.username,
                    hashed_password=hashed_password,
                    full_name=account.full_name,
                )
