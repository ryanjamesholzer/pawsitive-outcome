from fastapi.testclient import TestClient
from queries.adoptions import AdoptionQueries, AdoptionOut
from authenticator import authenticator
from main import app

client = TestClient(app=app)

def get_current_account_data_mock():
    return {
        'id': 18,
        'username': 'Cramer'
    }

class AdoptionQueriesMock:
    def show_adoption(self, id) -> AdoptionOut:
        return {
            "id": 11,
            "adopter_name": "sam",
            "adopter_address": "sam house",
            "adopter_email": "sam email",
            "adopter_phone_number": "3940832908",
            "dog": {
                "dog_id": 8,
                "name": "h",
                "gender": "h",
                "breed": "h",
                "age": "h",
                "picture_url": "h",
                "size": "h",
                "notes": "h"
            },
            "date_of_adoption": "2023-01-21"
        }
    
def test_show_adoption(id=11):
    app.dependency_overrides[AdoptionQueries] = AdoptionQueriesMock
    app.dependency_overrides[authenticator.get_current_account_data] = get_current_account_data_mock

    res = client.get(f'/api/adoptions/{id}')

    assert res.status_code == 200
    assert res.json()['id'] == 11
    assert res.json()['dog']['name'] == "h"

    app.dependency_overrides = {}
