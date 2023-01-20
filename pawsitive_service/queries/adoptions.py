from psycopg_pool import ConnectionPool
import os
from models.adoptions import AdoptionIn, AdoptionOut, AdoptionList

pool = ConnectionPool(conninfo=os.environ["DATABASE_URL"])

class AdoptionQueries:
    def get_all_adoptions(self):
        with pool.connection() as conn:
            with conn.cursor() as cur:
                cur.execute(
                    """
                    SELECT a.id AS adoption_id, a.adopter_name, a.adopter_address,
                        a.adopter_email, a.adopter_phone_number, a.date_of_adoption,
                        d.id AS dog_id, d.name, d.gender, d.breed, d.age, d.picture_url
                    FROM dogs d
                    INNER JOIN adoptions a ON d.id = a.dog_id;
                    """
                )
                results = []
                adoption_fields = ['adoption_id', 'adopter_name', 'adopter_address',
                    'adopter_email', 'adopter_phone_number', 'date_of_adoption',
                ]
                for row in cur.fetchall():
                    adoption = {}
                    dog = {}
                    for i, column in enumerate(cur.description):
                        if column.name in adoption_fields:
                            adoption[column.name] = row[i]
                        else:
                            dog[column.name] = row[i]
                        adoption['id'] = adoption['adoption_id']
                        adoption['dog'] = dog
                    results.append(adoption)
                return results

    def show_adoption(self, id: int):
        try:
            with pool.connection() as conn:
                with conn.cursor() as cur:
                    cur.execute(
                        """
                        SELECT a.id AS adoption_id, a.adopter_name, a.adopter_address,
                            a.adopter_email, a.adopter_phone_number, a.date_of_adoption,
                            d.id AS dog_id, d.name, d.gender, d.breed, d.age, d.picture_url, d.size, d.notes
                        FROM dogs d
                        INNER JOIN adoptions a ON d.id = a.dog_id
                        WHERE a.id = %s;
                        """,
                        [id]
                    )
                    results = cur.fetchone()
                    if results is None: return results
                    adoption = {}
                    adoption_fields = ['adoption_id', 'adopter_name', 'adopter_address',
                        'adopter_email', 'adopter_phone_number', 'date_of_adoption',
                    ]
                    dog = {}
                    for i, column in enumerate(cur.description):
                        if column.name in adoption_fields:
                            adoption[column.name] = results[i]
                        else:
                            dog[column.name] = results[i]
                    adoption['id'] = adoption['adoption_id']
                    adoption['dog'] = dog
                    return adoption
        except Exception:
            return {"message": "Adoption does not exist"}

    def add_adoption(self, adoption: AdoptionIn) -> AdoptionOut:
        try:
            with pool.connection() as conn:
                with conn.cursor() as cur:
                    result = cur.execute(
                        """
                        INSERT INTO adoptions
                            (adopter_name, adopter_address, adopter_email, adopter_phone_number, dog_id, date_of_adoption)
                        VALUES
                            (%s, %s, %s, %s, %s, %s)
                        RETURNING id;
                        """,
                        [
                            adoption.adopter_name,
                            adoption.adopter_address,
                            adoption.adopter_email,
                            adoption.adopter_phone_number,
                            adoption.dog_id,
                            adoption.date_of_adoption,
                        ]
                    )
                    id = result.fetchone()[0]
                    return self.adoption_in_to_out(id, adoption)
        except Exception:
            return {"message": "Did not add adoption"}

    def adoption_in_to_out(self, id: int, adoption: AdoptionIn):
        old_data = adoption.dict()
        try:
            with pool.connection() as conn:
                with conn.cursor() as cur:
                    cur.execute(
                        """
                        UPDATE dogs
                        SET is_adopted = True
                        WHERE dogs.id = %s
                        RETURNING *;
                        """,
                        [old_data['dog_id']]
                    )
                    results = cur.fetchone()
                    dog = {}
                    for i, column in enumerate(cur.description):
                        dog[column.name] = results[i]
                    old_data['dog_id'] = dog
                    old_data['dog'] = old_data['dog_id']
        except:
            pass
        return AdoptionOut(id=id, **old_data)

    def remove_adoption(self, id: int):
        try:
            with pool.connection() as conn:
                with conn.cursor() as cur:
                    cur.execute(
                        """
                        DELETE FROM adoptions
                        WHERE id = %s;
                        """,
                        [id]
                    )
                    return {"message":"Adoption was successfully deleted"}
        except Exception:
            return {"message": "Adoption does not exist"}
