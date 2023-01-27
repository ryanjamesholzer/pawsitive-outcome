steps = [
    [
        """
        CREATE TABLE dogs (
            id SERIAL PRIMARY KEY,
            name VARCHAR(100) NOT NULL,
            gender VARCHAR(10) NOT NULL,
            breed VARCHAR(200) NOT NULL,
            age VARCHAR(100) NOT NULL,
            size VARCHAR(20) NOT NULL,
            notes TEXT,
            picture_url VARCHAR(200) NOT NULL,
            is_adopted BOOLEAN DEFAULT FALSE
        );
        """,
        """
        DROP TABLE dogs;
        """,
    ],
    [
        """
        CREATE TABLE adoptions (
            id SERIAL PRIMARY KEY,
            adopter_name VARCHAR(50) NOT NULL,
            adopter_address VARCHAR(50) NOT NULL,
            adopter_email VARCHAR(255) NOT NULL,
            adopter_phone_number VARCHAR(13) NOT NULL,
            dog_id INT REFERENCES dogs(id) NOT NULL,
            date_of_adoption DATE
        );
        """,
        """
        DROP TABLE adoptions;
        """,
    ],
    [
        """
        CREATE TABLE accounts (
            id SERIAL PRIMARY KEY NOT NULL,
            username VARCHAR(200) UNIQUE NOT NULL,
            hashed_password VARCHAR(200) NOT NULL,
            full_name VARCHAR(250) NOT NULL
        );
        """,
        """
        DROP TABLE accounts;
        """,
    ],
]
