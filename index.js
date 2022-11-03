const inquirer = require('inquirer');
const mysql = require('mysql');
const createTable = require('console.table');



inquirer
  .prompt([
    {
      type: 'list',
      name: 'actions',
      choices: ['view all departments', 'view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee', 'update an employee role'],
      message: 'What would you like to do?'
    },
      ])
     .then(({actions}) => {
       if(actions ==='view all departments'){
            viewDepartments();
        } else if (actions === 'view all roles'){
            viewRoles();
        } else if (actions === 'view all employees'){
            viewEmployees();
        } else if (actions === 'add a department'){
            addDepartment();
        } else if (actions === 'add a role'){
            addRole();
        } else if (actions === 'add an employee'){
            addEmployee();
        } else if (actions === 'update an employee role'){
            updateEmpoyeeRole();
        }
        })
  
function viewDepartments(){
    db.query('SELECT * FROM departments', function (err, results){
        console.table(res);
        startPrompt();  
    })}
      
function viewRoles(){
    db.query('SELECT * FROM roles', function(err, results){
        console.table(res);
        startPrompt();
    })} 

function viewEmployees(){
    db.query('SELECT * FROM employees JOIN roles.department_id ON department.id, JOIN employee.role_id ON roles.id', function(err, results){
        console.table(res);
        startPrompt();
    })}

function addDepartment(){
    inquirer.prompt([
        {    
            type:'input',
            name: 'name',
            message: 'What department do you want to add?',
        }
        ])
    .then((responseDept)=> {
            const newDepartment = new Department(responseDept)
            departments.push(responseDept);
        })}
    
        startPrompt();

function addRole(){
    inquirer.prompt([
        {    
            type:'input',
            name: 'name',
            message: 'What role do you want to add?',
        },
        {    
            type:'input',
            name: 'salary',
            message: 'Enter salary information.',
        },
        {    
            type:'input',
            name: 'department',
            message: 'Enter the responsible department.',
        },

        ])
    .then((responseRole)=> {
            const newRole = new Role(responseRole)
            Roles.push(responseRole);
        })}
            
                startPrompt();

function addEmployee(){
    inquirer.prompt([
        {    
            type:'input',
            name: 'first_name',
            message: 'Please enter the first name.',
        },
        {    
            type:'input',
            name: 'last_name',
            message: 'Please enter the last name.',
        },
        {    
            type:'list',
            name: 'role',
            choices:['Sales Lead', 'Salesperson', 'Lead Engineer', 'Software Engineer', 'Account Manager', 'Accountant', 'Legal Team Lead', 'Laywer', 'Sales Lead'],
            message: 'Please select the role.',
        },
        {    
            type:'input',
            name: 'manager',
            message: 'Please enter the manager who oversees this employee.',
        },

        ])
    .then((response)=> {
            const newEmployee = new Employee(responseEmployee)
            Employee.push(responseEmployee);
        })}
                    
                startPrompt();

function updateEmpoyeeRole(){
    inquirer.prompt([
        {    
            type:'input',
            name: 'last_name',
            message: 'Please enter the employee last name you want to update.',
        },
        {    
            type:'input',
            name: 'first_name',
            message: 'Please enter the employee first name you want to update.',
        },        
        {    
            type:'list',
            name: 'new role',
            choices:['Sales Lead', 'Salesperson', 'Lead Engineer', 'Software Engineer', 'Account Manager', 'Accountant', 'Legal Team Lead', 'Laywer', 'Sales Lead'],
            message: 'Please select the new role for this emoloyee.',
        }
        
])};



  
