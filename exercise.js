//Number 1

let euroCities = ['Paris','London','Valletta','Prague','Rome'];
let dollarCities = [euroCities]
console.log(euroCities);

//Number 2

euroCities[0] = 'Berlin';
console.log(euroCities);

//Number 3

console.log(euroCities.length);

//Number 4

euroCities.pop()
console.log(euroCities);

//Number 5

euroCities.push('Budapest')
console.log(euroCities);

//Number 6

euroCities.splice(1,2)
console.log(euroCities);

//Number 7

let asianCities = ['Nairobi','Mombasa','Hamburg','Hannover','Stuttgart'];
console.log(asianCities);

//Number 8

let newCities = asianCities.slice(1,4);
console.log(newCities);

//Number 9

let worldCities = asianCities.concat(euroCities);
console.log(worldCities);

//Number 10

worldCities.reverse();
console.log(worldCities);

//Number 11

worldCities[2] = 'Toronto';
console.log(worldCities);

//Number 12

worldCities.splice(1,0,'Washington');
console.log(worldCities);

//Extra practice
//Array of my favorite movies
let favMovie = ['Too soon','Gone forever','Singles','Dead'];
console.log(favMovie);

//Array of my parents names
let parentsName = ['Pixley musyoki','Beth mukui'];
console.log(parentsName);

//Combine two arrays
let result = favMovie.concat(parentsName);
console.log(result);

//Add my pet's name
result.push('Dog')
console.log(result);

//Access one of my parents name

console.log(result[4]);

//Update the name of one of my parents

result[4] = 'Ndwiko'
console.log(result);

//conditional branching:if,'?'
/* let year = prompt('which year was i born')
if (year == 1989) {
    alert('that is correct')
}
if (year != 1989) {
    alert('try again')
} */
/* let year = prompt('which year was i born?');
if (year < 2010) {
    alert('too early...')
    
}else if (year > 2010) {
    
}else {
    alert('exactly!')
} */

//conditional operator '?'

/* let age = prompt('how old are you?', '')
 if (age > 18) {
    access = true;
} else {
    access = false;
} 

let access = age>18?true:false;
alert(access);  */

let age = prompt('age?',18);
let message = (age < 5)? 'hi,baby!':
(age  < 18)? 'hello!':
(age < 100)? 'greetings!':
'what an usual age!';
alert(message)

//