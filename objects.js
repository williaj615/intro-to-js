
const bouncer = (age) => {
    if (age >= 21) {
    console.log('DRINK (at the bar)');

    } else {
    console.log('SHAME');
    }
}

bouncer(15);
bouncer(93);

const me = 'martin'
console.log(me.length)

const myObject = {
    name: 'Jasmine',
    age: '24'
}

console.log(myObject.name)

//OR

console.log(myObject['name'])

//CHALLENGE

const findAndLogEmployeeStatus = (employee) => {
    if (employee.name.charAt(0).toLowerCase() === 'm') {
        employee.status = 'vip'
    } else {
        employee.status = 'peasant'
    }
    console.log(`${employee.name} is a total ${employee.status}`)

    return employee
}



let person = {
    name: 'Michael',
    status: ''
}


// findAndLogEmployeeStatus({
//     name: prompt('Enter employee name'),
//     status: ''
// })
