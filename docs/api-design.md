
### LOGIN
* Endpoint path: /token
* Endpoint method: POST

* Request shape (form):
  * username: string
  * password: string

* Response: Account information and a token
* Response shape (JSON):
    ```json
    {
      "account": {
        username: string,
        password: string,
      },
      "token": string
    }
    ```

### LOGOUT
* Endpoint path: /token
* Endpoint method: DELETE
* Headers: {
    Autorization: Bearer token
}
* Response: always true
* Response shape (JSON):
    ```json
    true
    ```

### LIST DOGS
* Endpoint path: /dogs
* Endpoint method: GET
* Response: list of DogOuts
* Response shape (JSON):
    ```json
    "dogs": [
        {
            "name": str,
            "breed": str,
            "age": int,
            "size": str,
            "is_adopted": bool default=False,
            "notes": text
        }
    ]
    ```

### ADD DOG
* Endpoint path: /dogs
* Endpoint method: POST
* Request shape (JSON):
    ```json
    {
        "name": str,
        "breed": str,
        "age": int,
        "size": str,
        "is_adopted": bool,
        "notes": text
    }
    ```
* Response: DogOut
* Response shape (JSON):
    ```json
    {
        "id": int,
        "name": str,
        "breed": str,
        "age": int,
        "size": str,
        "is_adopted": bool,
        "notes": text
    }
    ```

### SHOW DOG
* Endpoint path: /dogs/{dog_id}
* Endpoint method: GET
* Response: DogOut
* Response shape (JSON):
    ```json
    {
        "id": int,
        "name": str,
        "breed": str,
        "age": int,
        "size": str,
        "is_adopted": bool,
        "notes": text
    }
    ```
