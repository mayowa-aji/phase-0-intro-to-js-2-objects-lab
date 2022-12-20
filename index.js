// Write your solution in this file!
const employee = {}

function updateEmployeeWithKeyAndValue(employee, key, value){
  employee.name = 'Sam'

  const copyEmployee = {...employee}
  copyEmployee[key] = value
  return copyEmployee;
}

function  destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee.streetAddress = '12 Broadway'
    return employee
}

function  deleteFromEmployeeByKey(employee, key){
  const newEmployee = {...employee}
  delete newEmployee.name

  return newEmployee
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
  delete employee.name;
  return employee;
}

