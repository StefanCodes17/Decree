CREATE TABLE IF NOT EXISTS {}.entries(
    id INT(12) NOT NULL auto_increment PRIMARY KEY,
    title VARCHAR(30) NOT NULL, 
    date_created DATETIME NOT NULL,
    active INT(2) NOT NULL,
    section_id INT(12) REFERENCES subsections(id)
    ON DELETE CASCADE
    ON UPDATE CASCADE
)
