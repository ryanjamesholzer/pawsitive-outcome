from psycopg_pool import ConnectionPool
import os
from models.dogs import DogIn, DogOut, DogList

pool = ConnectionPool(conninfo=os.environ["DATABASE_URL"])

class DogQueries:
    def get_all_dogs(self):
        try:
            with pool.connection() as conn:
                with conn.cursor() as cur:
                    cur.execute(
                        """
                        SELECT * FROM dogs;
                        """
                    )
                    results = []
                    for row in cur.fetchall():
                        dog = {}
                        for i, column in enumerate(cur.description):
                            dog[column.name] = row[i]
                        results.append(dog)

                    return results
        except Exception:
            return {"message": "No dogs exist in database"}

    def show_dog(self, id: int):
        try:
            with pool.connection() as conn:
                with conn.cursor() as cur:
                    cur.execute(
                        """
                        SELECT * FROM dogs d
                        WHERE d.id = %s;
                        """,
                        [id]
                    )
                    results = cur.fetchone()
                    if results is None: return results
                    dog = {}
                    for i, column in enumerate(cur.description):
                        dog[column.name] = results[i]
                    return dog
        except Exception:
            return {"message": "Dog does not exist"}

    def add_dog(self, dog: DogIn) -> DogOut:
        try:
            with pool.connection() as conn:
                with conn.cursor() as cur:
                    result = cur.execute(
                        """
                        INSERT INTO dogs
                            (name, gender, breed, age, size, notes, is_adopted, picture_url)
                        VALUES
                            (%s, %s, %s, %s, %s, %s, %s, %s)
                        RETURNING id;
                        """,
                        [
                            dog.name,
                            dog.gender,
                            dog.breed,
                            dog.age,
                            dog.size,
                            dog.notes,
                            dog.is_adopted,
                            dog.picture_url,
                        ]
                    )
                    id = result.fetchone()[0]
                    return self.dog_in_to_out(id, dog)
        except Exception:
            return {"message": "Did not add dog"}

    def dog_in_to_out(self, id: int, dog: DogIn):
        old_data = dog.dict()
        return DogOut(id=id, **old_data)
