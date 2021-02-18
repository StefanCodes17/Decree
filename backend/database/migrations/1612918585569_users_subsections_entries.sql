CREATE TABLE IF NOT EXISTS {}.subsections_entries(
    subsection_id INT(12) REFERENCES subsections(id),
    entry_id INT(12) REFERENCES entries(id)
)