const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

const values = [process.argv[2]]

const queryString = `
SELECT teachers.name, cohorts.name
FROM teachers
JOIN assistance_requests ON teacher_id = teachers.id
JOIN students ON student_id = students.id
JOIN cohorts ON cohort_id = cohorts.id
WHERE cohorts.name = $1
ORDER BY teachers.name;
`

pool.query(queryString, values).then(res => {
  res.rows.forEach(row => {
    console.log(`${row.cohorts.name}: ${row.teachers.name}`);
  })
});