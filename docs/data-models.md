# DATA MODELS

---

### Dogs

| name             | type       | unique | optional |
| ---------------- | ---------- | ------ | -------- |
| id               | SERIAL(PK) | yes    | no       |
| name             | VARCHAR    | no     | no       |
| gender           | VARCHAR    | no     | no       |
| breed            | VARCHAR    | no     | no       |
| age              | VARCHAR    | no     | no       |
| size             | VARCHAR    | no     | no       |
| notes            | TEXT       | no     | yes      |
| picture_url      | VARCHAR    | no     | no       |
| is_adopted       | BOOLEAN    | no     | no       |


Contains information about each instance of a dog.


---

### Adoptions

| name                 | type       | unique | optional |
| -------------------- | ---------- | ------ | -------- |
| id                   | SERIAL(PK) | yes    | no       |
| adopter_name         | VARCHAR    | no     | no       |
| adopter_address      | VARCHAR    | no     | no       |
| adopter_email        | VARCHAR    | no     | no       |
| adopter_phone_number | VARCHAR    | no     | no       |
| dog_id               | INT        | yes    | no       |
| date_of_adoption     | TEXT       | no     | no       |


Contains information about each adoption instance. Dog id references a specific dog from table 'dogs'.

---

### Accounts

| name             | type       | unique | optional |
| ---------------- | ---------- | ------ | -------- |
| id               | SERIAL(PK) | yes    | no       |
| username         | VARCHAR    | yes    | no       |
| hashed_password  | VARCHAR    | no     | no       |
| full_name        | VARCHAR    | no     | no       |


Contains information about a specific user. Password is hashed for security purposes.
