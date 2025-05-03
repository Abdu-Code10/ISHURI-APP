CREATE DATABASE IF NOT EXISTS ishuri;
USE ishuri;

CREATE TABLE lessons (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255),
  education_level VARCHAR(50),
  subject VARCHAR(100),
  content TEXT
);

INSERT INTO lessons (title, education_level, subject, content)
VALUES
  ('Counting 1–10', 'Nursery', 'Math', 'Basic numbers'),
  ('Introduction to Reading', 'Primary', 'English', 'ABC lessons'),
  ('Cell Biology', 'Secondary', 'Science', 'Introduction to cells'),
  ('Academic Writing Basics', 'University', 'English', 'Writing styles');
