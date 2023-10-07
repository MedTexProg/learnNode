const person = {
    name: 'nax',
    age: 29,
    greet() {
        console.log('Hi, I am ' + this.name);
    }
};

const printName = (personData) => {
    console.log(personData.name);
}

printName(person);

// const cpie = {...person};
// console.log(cpie);
//
// // person.greet()
// const hobbies = ['Sports', 'Cooking'];
// // for (let hobby of hobbies) {
// //     console.log(hobby);
// // }
// // console.log(hobbies.map(hobby => 'Hobby' + hobby));
// // console.log(hobbies)
// const copiedArray = [...hobbies];
// console.log(copiedArray);

