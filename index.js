const inquirer = require('inquirer');
const mysql = require('mysql2');
const cTable = require('console.table');
const express = require('express');

// const db = mysql.createConnection(
//     {
//         host:'localhost',
         
//         user:'root',
//         password:'password',
//         database:'employees_db'
//     },
//     console.log(`connected to the employees_db database.`)
// );
const connection = mysql.createConnection({
    host: "localhost",
    // Your username
    user: "root",
    // port:3306,
    // Your password
    password: "password",
    database: "employees_db"
  });
  
  connection.connect(function (err) {
    if (err) throw err;
    console.log('connected to db.')
    startPrompt()
  });

// const db = require('./config/connection');

const startPrompt = () => {

    inquirer
        .prompt([
            {
                type: "list",
                name: "actions",
                message: "What would you like to do?",
                choices: ["view all departments", "view all roles", "view all employees", "add a department", "add a role", "add an employee", "update an employee role"],

            },
        ])
        .then((actions) => {
        //     if (actions === 'view all departments') {
        //         viewDepartments();
        //     } else if (actions === 'view all roles') {
        //         viewRoles();
        //     } else if (actions === 'view all employees') {
        //         viewEmployees();
        //     } else if (actions === 'add a department') {
        //         addDepartment();
        //     } else if (actions === 'add a role') {
        //         addRole();
        //     } else if (actions === 'add an employee') {
        //         addEmployee();
        //     } else if (actions === 'update an employee role') {
        //         updateEmpoyeeRole();
        //     } else { process.exit() }
        // console.log(actions.actions)
            switch (actions.actions){
                case "view all departments":
                    viewDepartments();
                    break;
                case "view all roles":
                    viewRoles();
                    break;
                case "view all employees":
                    viewEmployees();
                    break;
                case "add a department":
                    addDepartment();
                    break;
                case "add a role":
                    addRole();
                    break;
                case "add an employee":
                    addEmployee();
                    break;
                case "update an employee role":
                    updateEmpoyeeRole();
                    break;

            }
        });


function viewDepartments() {
    console.log('are you there?');
    connection.query("SELECT * FROM department", function(err, res){
        if (err) throw err
        // console.log('viewDepartments');
        console.table(res);
        startPrompt();
    })
};

function viewRoles() {
    connection.query('SELECT * FROM role', function (err, res) {
        if (err) throw err
        console.table(res); 
        startPrompt();
    })
};

function viewEmployees() {
    connection.query('SELECT * FROM employee', function(err, res){
        if (err) throw err
        console.table(res);
        startPrompt();
    })
};
// db.query('SELECT * FROM employees JOIN roles.department_id ON department.id, JOIN employee.role_id ON roles.id', function (err, res) {
function addDepartment() {
    connection.query("SELECT * FROM department", function(err, res){
        inquirer.prompt([
        {
            type: 'input',
            name: 'department_name',
            message: 'What department do you want to add?'
        },
    ])
       
        .then(function(res) {
    connection.query("INSERT INTO department SET ? ",{
                
                department_name:res.department_name
            },
            function (err) {
                if (err) throw err
                console.table(res);
                startPrompt(); 
              })
            }) 
        }) 
    };


function addRole() {
    connection.query("SELECT * FROM role", function(err, res){
        inquirer.prompt([
            {
                type: 'input',
                name: 'title',
                message: 'What role do you want to add?',
            },
            {
                type: 'input',
                name: 'salary',
                message: 'Enter salary information.',
            },
            {
                type: 'number',
                name: 'department_id',
                message: 'Enter the responsible department ID.',
            },
    
        ])
            .then(function(res) {
                connection.query("INSERT INTO role SET ?",{
                    title:res.title,
                    salary:res.salary,
                    department_id:res.department_id
                }, 
                function(err) {
                    if (err) throw err
                    console.table(res);
                    startPrompt();
            }) 
    })
 })
};


function addEmployee() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'first_name',
            message: 'Please enter the first name.',
        },
        {
            type: 'input',
            name: 'last_name',
            message: 'Please enter the last name.',
        },
        {
            type: 'number',
            name: 'role_id',
            // choices: ['Sales Lead', 'Salesperson', 'Lead Engineer', 'Software Engineer', 'Account Manager', 'Accountant', 'Legal Team Lead', 'Laywer', 'Sales Lead'],
            message: 'Please select the role ID.',
        },
        {
            type: 'number',
            name: 'manager_id',
            // choices: ['John Doe', 'Ashley Rodriguez', 'Kunal Singh', 'Sarah Lourd'],
            message: 'Please enter the manager ID who oversees this employee.',
        },

    ])
        .then(function (res) {
            connection.query("INSERT INTO employee SET ?",{
                first_name: res.first_name,
                last_name: res.last_name,
                role_id: res.role_id,
                manager_id: res.manager_id,
            },
            function(err){
                if (err) throw err
                console.table(res)
                startPrompt();
            }
        )})
};



function updateEmpoyeeRole() {
    connection.query("SELECT * FROM employee", function(err,res){
    //     if (err) throw err

    inquirer.prompt([
        // {
        //     type: 'input',
        //     name: 'last_name',
        //     message: 'Please enter the employee last name you want to update.',
        // },
        {
            type: 'input',
            name: 'first_name',
            message: 'Please enter the employee first name you want to update.',
        },
        {
            type: 'number',
            name: 'role_id',
            // choices: ['Sales Lead', 'Salesperson', 'Lead Engineer', 'Software Engineer', 'Account Manager', 'Accountant', 'Legal Team Lead', 'Laywer', 'Sales Lead'],
            message: 'Please enter the new role ID for this emoloyee.',
        }

    ])
        .then(function(res) {
            connection.query("UPDATE employee SET role_id = " + res.role_id + " WHERE employee.first_name = '" + res.first_name +"'",
            {
                // role_id: res.role_id
                // last_name:res.last_name,
                // first_name:res.first_name
            },
            function(err){
                if (err) throw err
                console.table(res)
                startPrompt()
            })
        })
    })
}
}


// module.exports = connection;
// Default response for any other request (Not Found)
// app.use((req, res) => {
//     res.status(404).end();
//   });

//   app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
//   });

//  startPrompt();



