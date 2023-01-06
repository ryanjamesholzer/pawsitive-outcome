steps = [
    [
        # "Up" SQL statement
        # Revisit breed
        """
        CREATE TABLE dogs (
            id SERIAL PRIMARY KEY NOT NULL,
            name VARCHAR(100) NOT NULL,
            gender VARCHAR(10) NOT NULL,
            breed VARCHAR(200) NOT NULL,
            age INT NOT NULL,
            size VARCHAR(20) NOT NULL,
            notes TEXT,
            is_adopted BOOL NOT NULL DEFAULT FALSE,
            picture_url VARCHAR(200) NOT NULL
        );
        """,
        # "Down" SQL statement
        """
        DROP TABLE dogs;
        """
    ],
    [
        # "Up" SQL statement
        """
        CREATE TABLE adoptions (
            id SERIAL PRIMARY KEY NOT NULL,
            adopter_name VARCHAR(50) NOT NULL,
            adopter_address VARCHAR(50) NOT NULL,
            adopter_email VARCHAR(255) NOT NULL,
            adopter_phone_number VARCHAR(13) NOT NULL,
            dog_id INT REFERENCES dogs(id) UNIQUE NOT NULL,
            date_of_adoption DATE
        );
        """,
        # "Down" SQL statement
        """
        DROP TABLE adoptions;
        """
    ],
    [
        """
        CREATE TABLE accounts (
            id SERIAL PRIMARY KEY NOT NULL,
            username VARCHAR(200) NOT NULL,
            hashed_password VARCHAR(200) NOT NULL,
            full_name VARCHAR(250) NOT NULL
        );
        """,
        """
        DROP TABLE accounts;
        """
    ]
]
