// Write your solution in this file!
const employee = {
  name: "Abdi Hussein",
  streetAddress: "123 Main Street"
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
  // Return a new object using the spread operator (non-destructive)
  return {
    ...employee,
    [key]: value
  };
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  // Directly modify the original object (destructive)
  employee[key] = value;
  return employee;
}

function deleteFromEmployeeByKey(employee, key) {
  // Use the spread operator to create a new object without the deleted key
  const newEmployee = { ...employee };
  delete newEmployee[key];
  return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
  // Directly delete the key from the original object
  delete employee[key];
  return employee;
}



