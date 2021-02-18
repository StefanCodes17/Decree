CREATE TABLE IF NOT EXISTS {}.subsections_entries(
    entry_id INT(12) REFERENCES entries(id),
    item_id INT(12) REFERENCES list_items(id)
)