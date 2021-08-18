SELECT students.name, COUNT(assistance_requests.*) as total_assistances
FROM students
JOIN assistance_requests ON teacher_id = students.id
WHERE name = 'Elliot Dickinson'
GROUP BY students.name