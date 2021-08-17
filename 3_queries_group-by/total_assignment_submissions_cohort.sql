SELECT cohorts.name as cohort_name, COUNT(assignment_submissions.*) as total_submissions
FROM assignment_submissions
JOIN students ON student_id = students.id
JOIN cohorts ON cohort_id = cohorts.id
GROUP BY cohorts.name
ORDER BY COUNT(assignment_submissions.*) DESC;
