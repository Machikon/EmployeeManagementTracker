SELECT * FROM departments;
SELECT * FROM roles;
SELECT * FROM employees;
JOIN roles.department_id ON departments.id,
JOIN employees.role_id ON roles.id,
JOIN employees.manager_id ON employees.id;



