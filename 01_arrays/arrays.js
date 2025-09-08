const strings = ["a", "b", "c", "d"];
const numbers = [1, 2, 3, 4, 5];

//push
strings.push("e"); //Adds 'e' to the end of the array. outcome: ["a", "b", "c", "d", "e"]

//pop
strings.pop(); //Removes the last item from the array. outcome: ["a", "b", "c", "d"]. outcome: ['a', 'b', 'c', 'd']
strings.pop(); //outcome: ['a', 'b', 'c']

//unshift
strings.unshift("x"); //Adds 'x' to the front of the array. outcome: ['x', 'a', 'b', 'c']

//splice
strings.splice(2, 0, "alien"); //At index 2, remove 0 items and add 'alien'. So index 2 is right before 'b'. outcome: ['x', 'a', 'alien', 'b', 'c']

console.log(strings); //Final outcome: ['x', 'a', 'alien', 'b', 'c']
