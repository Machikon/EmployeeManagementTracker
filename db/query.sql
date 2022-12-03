SELECT * FROM department;
SELECT * FROM role;
SELECT * FROM employee;
JOIN role.department_id ON department.id,
JOIN employee.role_id ON role.id,
JOIN employee.manager_id ON employee.id



