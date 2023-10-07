const name = "boss";
let age = 28;
const hasHobbies = true;

const summarizeUser = (userName, userAge, userHashobby) => {
    return (" name is " + userName + ", age is " + userAge + " and the user has hobbies " + userHashobby)
}

const add = (a, b) => {
    return a + b;
}

console.log(summarizeUser(name, age, hasHobbies));