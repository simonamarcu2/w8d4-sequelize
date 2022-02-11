SELECT employee_detail.name, current_job_detail.job_title
FROM employee_detail
JOIN current_job_detail ON employee_detail.employee_id = current_job_detail.employee_id;

SELECT employee_detail.name, current_job_detail.job_title
FROM employee_detail
JOIN current_job_detail ON employee_detail.employee_id = current_job_detail.employee_id;

SELECT SUM(employee_id)
FROM current_job_detail;

SELECT * FROM current_job_detail;
SELECT employee_id, SUM(salary) FROM current_job_detail GROUP BY employee_id;

SELECT MAX(salary) AS BiggestSalary FROM current_job_detail ;
SELECT job_title FROM current_job_detail WHERE salary > 74999;
SELECT * FROM current_job_detail WHERE job_title LIKE "Developer";

SELECT * FROM current_job_detail WHERE job_title LIKE "Developer" ORDER BY salary;
SELECT COUNT(*) FROM current_job_detail WHERE job_title LIKE "Developer" ORDER BY salary;

SELECT * FROM current_job_detail WHERE job_title LIKE "Developer";
SELECT * FROM current_job_detail WHERE job_title NOT IN ("Developer");