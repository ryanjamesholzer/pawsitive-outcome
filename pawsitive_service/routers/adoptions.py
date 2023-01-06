from fastapi import APIRouter, Depends, Response
from models.adoptions import AdoptionIn, AdoptionOut, AdoptionList
from queries.adoptions import AdoptionQueries
from typing import Union

router = APIRouter()


@router.get("/api/adoptions", response_model=AdoptionList)
def list_adoptions(repo: AdoptionQueries = Depends()):
    return AdoptionList(adoptions=repo.get_all_adoptions())

@router.get("/api/adoptions/{adoption_id}", response_model=AdoptionOut)
def get_one_adoption(id: int, response: Response, repo: AdoptionQueries = Depends()):
    adoption = repo.show_adoption(id)
    if adoption is None: response.status_code = 404
    return adoption

@router.post("/api/adoptions", response_model=AdoptionOut)
def create_adoption(adoption: AdoptionIn, response: Response, repo: AdoptionQueries = Depends()):
    return repo.add_adoption(adoption)
