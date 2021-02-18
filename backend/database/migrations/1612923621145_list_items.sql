CREATE TABLE IF NOT EXISTS {}.list_items(
    id INT(12) NOT NULL auto_increment PRIMARY KEY,
    item VARCHAR(100) NOT NULL,
    entry_id INT(12) REFERENCES entries(id)
)