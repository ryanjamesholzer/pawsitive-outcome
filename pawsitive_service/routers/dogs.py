from fastapi import APIRouter, Depends, Response
from models.dogs import DogIn, DogOut, DogList
from queries.dogs import DogQueries
from authenticator import authenticator


router = APIRouter()

@router.get("/api/dogs", response_model=DogList)
def list_dogs(repo: DogQueries = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data)
):
    return DogList(dogs=repo.get_all_dogs())

@router.get("/api/dogs/{dog_id}", response_model=DogOut)
def get_one_dog(id: int, response: Response, repo: DogQueries = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data)
):
    dog = repo.show_dog(id)
    if dog is None: response.status_code = 404
    return dog

@router.post("/api/dogs", response_model=DogOut)
def create_dog(dog: DogIn, response: Response, repo: DogQueries = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data)
):
    return repo.add_dog(dog)
