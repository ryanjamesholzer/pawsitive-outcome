from queries.dogs import DogQueries, DogIn, DogOut
from tests.test_list_dogs import DogQueriesMock, get_current_account_data_mock
from main import app
import json
from fastapi.testclient import TestClient
from authenticator import authenticator

client = TestClient(app=app)


def test_create_dog():
    app.dependency_overrides[DogQueries] = DogQueriesMock
    app.dependency_overrides[
        authenticator.get_current_account_data
    ] = get_current_account_data_mock
    dog_body = {
        "name": "Fido",
        "gender": "male",
        "breed": "aussie",
        "age": "2",
        "size": "medium",
        "notes": "short haired",
        "picture_url": "image.png",
    }

    res = client.post("/api/dogs", json.dumps(dog_body))

    assert res.status_code == 200
    assert res.json()["id"] == 13
    assert res.json()["name"] == "Fido"

    app.dependency_overrides = {}
