// one way..
let stack = [];
stack.push("Google.com");
stack.push("instagram");
stack.push("youtube");

// [Google.com, Instagram, Youtube]
let lastVisited = stack.pop();


// another way - unshift method would require to reindex 

let stackTwo = [];
stackTwo.unshift("Howdy");
stackTwo.unshift("this word added");
stackTwo.unshift("more data");

// [more data, this word added, howdy]


stackTwo.shift()