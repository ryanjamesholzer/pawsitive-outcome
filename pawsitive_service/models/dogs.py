from pydantic import BaseModel
from typing import Optional

class DogIn(BaseModel):
    name: str
    gender: str
    breed: str
    age: str
    size: str
    notes: Optional[str]
    picture_url: str
    # is_adopted: bool

class DogOut(DogIn):
    id: int
    is_adopted: bool

class DogList(BaseModel):
    dogs: list[DogOut]
