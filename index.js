// Write your solution in this file!
const employee = {
    name: "streetAddress"
}

function updateEmployeeWithKeyAndValue(employee, key, value){
    return {
        ...employee,
        [key]: value,
    };
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return {...employee}; 
}

function deleteFromEmployeeByKey(employee, key) {
    const { [key]: deletedKey, ...remainingEmployee } = employee;
    return remainingEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}
//test