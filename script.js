const database = [
    {name:'John', country:'Israel', age:31, isMarried:true},
    {name:'Mary', country:'Israel', age:19, isMarried:false},
    {name:'Bill', country:'Belgium', age:22, isMarried:true},
    {name:'Hanna', country:'France', age:27, isMarried:true},
    {name:'George', country:'Israel', age:6, isMarried:false},
    {name:'Lucy', country:'Spain', age:17, isMarried:false}
];

// 6. Remove user by position. (remove)
function button1Function() {
    const marriedPeople = database.filter(function (element){
        (element.isMarried === true) ?
            console.log(`${element.name} is married.`):false;
    })
}
// 2. Print database sorted by age ASC. (min->max) (sort)
function button2Function() {
    database.sort(function (a,b){
        return a.age - b.age;
    });
    database.forEach(function (person) {
        console.log(`${person.name} is ${person.age} years old.`);
    });
}
// 3. Calculate average age. (reduce)
function button3Function() {
    const avg = database.reduce(function (acc, person, index, array) {
        acc += person.age;
        if (index === array.length - 1) {
            return acc / array.length;
        }
        return acc;
    }, 0);
    console.log(avg);
}
// 4. Print statistic by country.
function button4Function() {
    const countryCount = database.reduce(function (acc, element){
        if (acc[element.country]) {
            acc[element.country]++;
        } else {
            acc[element.country] = 1;
        }
        return acc;
    }, {});
    console.log(countryCount)
}
// 5. Print married person sorted ASC by name, not married DESC by age
//     and average age of married person.
function button5Function() {
    const marriedPeople = database.filter(function (person){
        return person.isMarried;
    });
    const notMarriedPeople = database.filter(function (person){
        return !person.isMarried;
    });

    marriedPeople.sort(function (a, b){
        if (a.name < b.name) {
            return -1;
        } else if (a.name > b.name) {
            return 1;
        } else {
            return 0;
        }
    });
    notMarriedPeople.sort(function (a, b){
        return b.age - a.age
    });

    const totalAge = marriedPeople.reduce(function (total, person){
        return total + person.age
    }, 0);
    const averageAge = totalAge / marriedPeople.length;

    marriedPeople.forEach(function (person) {
        console.log(`${person.name} is married.`);
    });

    notMarriedPeople.forEach(function (person) {
        console.log(`${person.name} is not married.`);
    });

    console.log(`The average age of married people is ${Math.round(averageAge)}.`);
}
// 6. Remove user by position. (remove)
function remove(array, position) {
    return array.filter(function(person, index) {
        return index !== position;
    });
}
function button6Function(){
    const newDatabase = remove(database, 5);
    console.log(newDatabase);
}