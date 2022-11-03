INSERT INTO departments (id, department_name)
VALUES (100, "Engineering"),
       (200, "Finance"),
       (300, "Legal"),
       (400, "Sales"),
       

INSERT INTO roles (id, title, salary, department_id)
VALUES (1, "Sales Lead", 80000, 4),
       (2, "Account Manager", 60000, 4),
       (3, "Accoutant", 80000, 2),
       (4, "Legal Team Lead", 130000, 3),
       (5, "Lawyer", 250000, 3),
       (6, "Lead Engineer", 150000, 1),
       (7, "Salesperson", 60000, 4),
       (8, "Software Engineer", 100000, 1);

INSERT INTO employees (id, first_name, last_name, role_id, manager_id)
VALUES ("John", "Doe", 1, null),
       ("Mike", "Chan", 7, 1),
       ("Ashley", "Rodriguez", 6, null),
       ("Kevin", "Tupik", 8, 3),
       ("Kunal", "Singh", 2, null),
       ("Malia", "Brown", 3, 5),
       ("Sarah", "Lourd", 4, null),
       ("Tom", "Allen", 5, 8);

