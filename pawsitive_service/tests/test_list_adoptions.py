from fastapi.testclient import TestClient
from queries.adoptions import AdoptionQueries
from authenticator import authenticator
from main import app

client = TestClient(app=app)


def get_current_account_data_mock():
    return {"id": 18, "username": "Cramer"}


class AdoptionQueriesMock:
    def get_all_adoptions(self):
        return []


def test_list_adoptions():
    app.dependency_overrides[AdoptionQueries] = AdoptionQueriesMock
    app.dependency_overrides[
        authenticator.get_current_account_data
    ] = get_current_account_data_mock

    res = client.get("/api/adoptions")

    assert res.status_code == 200
    assert res.json() == {"adoptions": []}

    app.dependency_overrides = {}
