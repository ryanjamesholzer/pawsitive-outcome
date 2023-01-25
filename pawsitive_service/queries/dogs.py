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
                        SELECT * FROM dogs
                        WHERE dogs.id = %s;
                        """,
                        [id],
                    )
                    results = cur.fetchone()
                    if results is None:
                        return results
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
                            (name, gender, breed, age, size, notes, picture_url)
                        VALUES
                            (%s, %s, %s, %s, %s, %s, %s)
                        RETURNING id;
                        """,
                        [
                            dog.name,
                            dog.gender,
                            dog.breed,
                            dog.age,
                            dog.size,
                            dog.notes,
                            dog.picture_url,
                        ],
                    )
                    id = result.fetchone()[0]
                    return self.dog_in_to_out(id, dog)
        except Exception:
            return {"message": "Did not add dog"}

    def dog_in_to_out(self, id: int, dog: DogIn):
        old_data = dog.dict()
        old_data["is_adopted"] = False
        return DogOut(id=id, **old_data)

    def remove_dog(self, id: int):
        try:
            with pool.connection() as conn:
                with conn.cursor() as cur:
                    cur.execute(
                        """
                        DELETE FROM dogs
                        WHERE id = %s;
                        """,
                        [id],
                    )
                    return {"message": "Dog was deleted successfully"}
        except Exception:
            return {"message": "Dog does not exist"}

    def updateDog(self, id: int):
        try:
            with pool.connection() as conn:
                with conn.cursor() as cur:
                    cur.execute(
                        """
                        UPDATE dogs
                        SET is_adopted = False
                        WHERE dogs.id = %s
                        """,
                        [id],
                    )
                    return {
                        "message": "Dog {} was successfully updated".format(id)
                    }
        except:
            return {"message": "Dog {} was not updated".format(id)}
