# API-DESIGN

## Dog

- **Method**: `POST`, `GET`, `GET`, `PUT`, `DELETE`,
- **Path**: `/api/dogs`, `/api/dogs/<int:id>`
- **Headers**: `Authorization: Bearer token`

Input:

```json
{
  "name": str,
  "gender": str,
  "breed": str,
  "age": str,
  "size": str,
  "notes": Optional[str],
  "picture_url": str
}
```

Output:

```json
{
  "id": int,
  "name": str,
  "gender": str,
  "breed": str,
  "age": str,
  "size": str,
  "notes": Optional[str],
  "picture_url": str,
  "is_adopted": bool
}
```

Creating a dog does not require an id(provided by the database) or is_adopted field. When a dog is created, is_adopted is automatically set to 'false'. When a dog is adopted, the field is auto-updated to 'true'.


## Adoptions

- **Method**: `POST`, `GET`, `GET`, `DELETE`,
- **Path**: `/api/adoptions`, `/api/adoptions/<int:id>`
- **Headers**: `Authorization: Bearer token`

Input:

```json
{
  "adopter_name": str,
  "adopter_address": str,
  "adopter_email": str,
  "adopter_phone_number": str,
  "dog_id": int,
  "date_of_adoption": date
}
```

Output:

```json
{
  "id": int,
  "adopter_name": str,
  "adopter_address": str,
  "adopter_email": str,
  "adopter_phone_number": str,
  "dog": dict,
  "date_of_adoption": date
}
```

When an adoption is created, the is_adopted field on the dog updates to true, which then filters it from the list of dogs available for adoption on the front-end. The json returned from the creation of an adoption also returns the dog object in its entirety as a dictionary.


## Accounts

- **Method**: `POST`,
- **Path**: `/api/accounts`

Input:

```json
{
  "username": str,
  "password": str,
  "full_name": str
}
```

Output:

```json
{
  "id": int,
  "username": str,
  "full_name": str
}
```

An account is created, storing a hashed password in the database.


## Authorization

- **Method**: `POST`, `DELETE`, `GET`
- **Path**: `/api/token`
- **Headers**: `Authorization: Bearer token` (DELETE, GET only)

Input:

```json
{
  "username": str,
  "password": str,
}
```

Output:

```json
{
  "token": str,
  "username": str,
  "full_name": str
}
```

When a user logs in, a token is created. This allows them to visit the rest of the site.
