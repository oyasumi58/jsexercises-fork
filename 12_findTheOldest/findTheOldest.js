const people = [
    {
      name: "Carly", //83
      yearOfBirth: 1942,
      
    },
    {
      name: "Ray", //49
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane", //29
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]

const d = new Date();

const findTheOldest = function(arr) {
    //get all ages of ppl
    let ages = arr.map((person) =>  {
        if (person.yearOfDeath){
            return {name: person.name, age: person.yearOfDeath - person.yearOfBirth};
        } else if (typeof person.yearOfDeath === "undefined") {
            //console.log(d.getFullYear() - person.yearOfBirth);
            return {name: person.name, age:(d.getFullYear() - person.yearOfBirth)};
        }
    });
    
    //arrange ages from oldest to smallest
    //console.log(ages);
    let ageLine = ages.sort((a,b) => {
        if (a.age > b.age) return -1
        if (a.age < b.age) return 1
        if (a.age == b.age) return 0
    });
    //console.log(ageLine);

//get oldest and refind the object it was to via filtering everything except the match out
    let oldest = ageLine[0];
    console.log(oldest)
    let goldest = arr.filter((person) => {
        return person.name === oldest.name
        && oldest.age === 
        (person.yearOfDeath - person.yearOfBirth) 
        
        || person.name === oldest.name 
        && oldest.age === +(d.getFullYear() - person.yearOfBirth);
    });
    console.log(goldest);
//return only the object
    return goldest[0];
};

console.log(findTheOldest(people).name);

// let gob = people.map((person) => person.yearOfBirth)
// console.log(d.getFullYear() - gob[0]);
// console.log(d.getFullYear());

//solution

//main way uses reduce function > concise but quite complex


//Alt Way of the no death person
//person.yearOfDeath ??= new Date().getFullYear();
//use nullish coalescing operator which assigns it a value ONLY if NULL OR UNDEFINED
// rest of alt method is similar to mine >> uses sort



// Do not edit below this line
module.exports = findTheOldest;
