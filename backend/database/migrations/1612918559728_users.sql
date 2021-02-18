CREATE TABLE IF NOT EXISTS {}.users(
    id INT(12) NOT NULL auto_increment PRIMARY KEY,
    google_id VARCHAR(125) NOT NULL,
    email VARCHAR(50) NOT NULL, 
    first_name VARCHAR(30),
    last_name  VARCHAR(30),
    passwordHash VARCHAR(100),
    role_id INT(12) NOT NULL,
    UNIQUE (google_id),
    UNIQUE (email),
    INDEX uemail (email), 
    INDEX user_google_id (google_id),
    FOREIGN KEY (role_id) REFERENCES roles(id)
    ON DELETE CASCADE
    ON UPDATE CASCADE
)
