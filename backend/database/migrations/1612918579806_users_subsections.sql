CREATE TABLE IF NOT EXISTS {}.users_subsections(
    user_id INT(12) REFERENCES users(id),
    section_id INT(12) REFERENCES subsections(id)
)