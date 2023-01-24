from fastapi.testclient import TestClient
from queries.dogs import DogQueries
from authenticator import authenticator
from main import app

client = TestClient(app=app)

def get_current_account_data_mock():
    return {
        'id': 18,
        'username': 'Cramer'
    }


class DogQueriesMock:
    def get_all_dogs(self):
        return []


def test_list_dogs():

    app.dependency_overrides[DogQueries] = DogQueriesMock
    app.dependency_overrides[authenticator.get_current_account_data] = get_current_account_data_mock

    res = client.get('/api/dogs')

    assert res.status_code == 200
    assert res.json() == { 'dogs': [] }

    app.dependency_overrides = {}
