from queries.adoptions import AdoptionQueries, AdoptionIn, AdoptionOut
from fastapi.testclient import TestClient
from authenticator import authenticator
from main import app
import json

client = TestClient(app=app)


def get_current_account_data_mock():
    return {"id": 17, "username": "Kramer"}


class AdoptionQueriesMock:
    def add_adoption(self, adoption: AdoptionIn) -> AdoptionOut:
        adoption_dict = adoption.dict()
        adoption_dict["dog"] = {
            "dog_id": 1,
            "name": "Socks",
            "gender": "Male",
            "breed": "Bichon",
            "age": "13 years",
            "picture_url": "cutepictureofdog.com",
        }
        return AdoptionOut(id=17, **adoption_dict)


def test_create_adoption():
    app.dependency_overrides[AdoptionQueries] = AdoptionQueriesMock
    app.dependency_overrides[
        authenticator.get_current_account_data
    ] = get_current_account_data_mock
    adoption_body = {
        "adopter_name": "Chad",
        "adopter_address": "123 Chaddington St.",
        "adopter_email": "chadrules@pawsitiveoutcome.com",
        "adopter_phone_number": "8675309",
        "dog_id": 1,
        "date_of_adoption": "2023-01-24",
    }

    res = client.post("/api/adoptions", json.dumps(adoption_body))

    assert res.status_code == 200
    assert res.json()["dog"]["dog_id"] == 1
    assert res.json()["id"] == 17

    app.dependency_overrides = {}
