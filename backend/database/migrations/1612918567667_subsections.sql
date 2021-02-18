CREATE TABLE IF NOT EXISTS {}.subsections(
    id INT(12) NOT NULL auto_increment PRIMARY KEY,
    title VARCHAR(30) NOT NULL, 
    INDEX uid (user_id),
    user_id INT(12) REFERENCES users(id)
    ON DELETE CASCADE
    ON UPDATE CASCADE
)
