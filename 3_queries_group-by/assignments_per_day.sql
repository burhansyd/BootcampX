SELECT day, COUNT(*) as total_submissions
FROM assignments
GROUP BY day
HAVING COUNT(*) >= 10
ORDER BY day;