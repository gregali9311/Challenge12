const inquirer = require('inquirer');

const mysql = require('mysql2');

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'company_db'
    },
    console.log('We are live, people')
)


function initiate(){
    inquirer.prompt([
    {
        name: 'navigation',
        type: 'list',
        message: 'What would you like to do?',
        choices: ['View all employees','View all roles', 'View Departments','Add Employee', 'Add Role', 'Add Department','Quit','Update Employee Role',]
    }
] )
.then((answer) => {

    if(answer.navigation === 'Add Department'){

        adddep();
    } else if ( answer.navigation === "Add Role"){
        inquirer.prompt([{
            name: 'addrole',
            type: 'input',
            message: 'What is the name of the Role?'
        },
        {
            name: 'addsal',
            type: 'input',
            message: 'What is the amount of the salary?'
        },
        {
            name: 'assigndep',
            type: 'list',
            message: 'What department does this employee belong to?',
            choices: ['Marketing','Finance','Legal','Service','Engineering']
        }
    ])
        .then((answer)=>{
            console.log(answer.addrole)
            console.log(answer.addsal)
    
            db.query(`INSERT INTO roles(title,salary,dep_id) VALUES ('${answer.addrole}','${answer.addsal}','${answer.assigndep}')`, function(err, results){console.log(err)}) 
            
            initiate();
        })
            
    } else if( answer.navigation === 'Add Employee') {
        inquirer.prompt([
            {   name: "fname",
                type: 'input',
                message: 'What is the employees first name?'
            },
            {
                name: 'lname',
                type: 'input',
                message: 'What is the employees last name?'
            },
            {
                name: 'dep2',
                type: 'list',
                message: 'What department are they in?',
                choices: ['Finance', 'Legal','Service','Engineering']
            },
            {
                name: 'mgr',
                type: 'list',
                message: 'Who is this employees manager?',
                choices: ['Sally', 'Bob','Joe','Sue']
            }
        
        ])
        .then((answer)=>{
            db.query(`INSERT INTO employee(first_name,last_name, role_id,manager_id) VALUES ('${answer.fname}','${answer.lname}','${answer.dep2}','${answer.mgr}')`, function(err, results){console.log(err)})
            initiate();
        })

    } else if(answer.navigation === "View all employees"){
        db.query('SELECT * FROM employee', function (err, results){
            console.table(results)
            initiate();
        })
    } else if ( answer.navigation === "View Departments"){
        db.query("SELECT * FROM department", function (err, results){
            console.table(results)
            initiate();
        })
    } else if (answer.navigation === "View all roles"){
        db.query('SELECT * FROM roles', function(err, results){
            console.table(results)
            initiate();
        })
    }
})
}

function adddep(){
    inquirer.prompt([
        {
        name: 'adddep',
        type: 'input',
        message: 'What is the name of the department?'
        }
    ])
    .then((answer)=>{
        db.query(`INSERT INTO department(dep_name) VALUES ('${answer.adddep}')`, function(err, results){console.log(err)})
        initiate();
    })
}

initiate();
