INSERT INTO roles(role_type) 
VALUES ('admin'), ('user');

INSERT INTO users(email, google_id, first_name, last_name, passwordHash, role_id)
VALUES 
('sk893q@gmail.com','21372149rn9f2f19yg7b3g78', 'Stefan', 'Kolev', MD5('bg2004bg2004'), 0),
('themythicaldragonking@gmail.com','21372149adtf2f19yg7b3g78', 'Stefan', 'Kolev', MD5('bg2004bg2004'), 1);

INSERT INTO subsections(title, user_id)
VALUES
('Homework', 0),
('Quizzes', 0),
('Tests', 1);

INSERT INTO users_subsections(user_id, section_id)
VALUES
(0, 0),
(0, 1),
(1, 2);

INSERT INTO entries(title, active, section_id)
VALUES
('Calculus II', 1, 0),
('Social Studies', 1, 0);

INSERT INTO subsections_entries(subsection_id, entry_id)
VALUES
(0, 0),
(0, 1);

INSERT INTO list_items(item, entry_id)
VALUES
('Calculus II', 0),
('Social Studies', 0);


