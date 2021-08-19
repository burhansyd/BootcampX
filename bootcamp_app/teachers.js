const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

pool.query(`
SELECT teachers.name, cohorts.name
FROM teachers
JOIN assistance_requests ON teacher_id = teachers.id
JOIN students ON student_id = students.id
JOIN cohorts ON cohort_id = cohorts.id
WHERE cohorts.name = ${process.argv[2]}
ORDER BY teachers.name;
`).then(res => {
  res.rows.forEach(row => {
    console.log(`${row.cohorts.name}: ${row.teachers.name}`);
  })
});