from pydantic import BaseModel
from datetime import date


class AdoptionIn(BaseModel):
    adopter_name: str
    adopter_address: str
    adopter_email: str
    adopter_phone_number: str
    dog_id: int
    date_of_adoption: date


class AdoptionOut(BaseModel):
    id: int
    adopter_name: str
    adopter_address: str
    adopter_email: str
    adopter_phone_number: str
    dog: dict
    date_of_adoption: date


class AdoptionList(BaseModel):
    adoptions: list[AdoptionOut]
