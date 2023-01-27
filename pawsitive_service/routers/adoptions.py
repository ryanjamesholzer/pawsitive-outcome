from fastapi import APIRouter, Depends, Response
from models.adoptions import AdoptionIn, AdoptionOut, AdoptionList
from queries.adoptions import AdoptionQueries
from authenticator import authenticator


router = APIRouter()


@router.get("/api/adoptions", response_model=AdoptionList)
def list_adoptions(
    repo: AdoptionQueries = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    return AdoptionList(adoptions=repo.get_all_adoptions())


@router.get("/api/adoptions/{id}", response_model=AdoptionOut)
def get_one_adoption(
    id: int,
    response: Response,
    repo: AdoptionQueries = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    adoption = repo.show_adoption(id)
    if adoption is None:
        response.status_code = 404
    return adoption


@router.post("/api/adoptions", response_model=AdoptionOut)
def create_adoption(
    adoption: AdoptionIn,
    response: Response,
    repo: AdoptionQueries = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    return repo.add_adoption(adoption)


@router.delete("/api/adoptions/{id}")
def delete_adoption(
    id: int,
    repo: AdoptionQueries = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    return repo.remove_adoption(id)
