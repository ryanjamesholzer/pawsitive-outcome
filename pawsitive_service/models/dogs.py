from pydantic import BaseModel
from typing import Optional

class DogIn(BaseModel):
    name: str
    gender: str
    breed: str
    age: int
    size: str
    notes: Optional[str]
    is_adopted: bool
    picture_url: str

class DogOut(DogIn):
    id: int

class DogList(BaseModel):
    dogs: list[DogOut]
