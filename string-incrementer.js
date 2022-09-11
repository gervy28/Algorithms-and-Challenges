function incrementString (string) {
    let value = [];
    let lastNonZeroValue;
    if (string.length == 0){
      return string + 1
    }
    for (let i = string.length - 1; i >= 0; i--){
      // find the last index that can be turned into a number
      let num = parseInt(string[i]);
      if(num >= 0){
        value.unshift(num);
      }else{
        break;
      }
    }
    console.log(value);
  }

  function incrementString (string) {
    let value = [];
    let lastNonZeroValue;
    if (string.length == 0){
      return string + 1
    }
    for (let i = string.length - 1; i >= 0; i--){
      // find the last index that can be turned into a number
      let num = parseInt(string[i]);
      if(num >= 0){
        value.unshift(num);
      }else{
        break;
      }
    }
    console.log(value);
    for(let x = value.length-1; x >= 0; x--){
      if(value[x] == 9){
        value[x] = 0;
      }else{
        value[x] += 1;
        break;
      }
    }
  }

  // 

  function incrementString (string) {
    let updateString;
    let value = [];
    let lastNonZeroValue;
    if (string.length == 0){
      return string + 1
    }
    for (let i = string.length - 1; i >= 0; i--){
      // find the last index that can be turned into a number
      let num = parseInt(string[i]);
      if(num >= 0){
        value.unshift(num);
      }else{
        break;
      }
    }
    console.log(value.length);
    updateString = 
    for(let x = value.length-1; x >= 0; x--){
      if(x === 0 && value[x] === 9){
        value[x] += 1;
      }else if(value[x] == 9){
        value[x] = 0;
      }else{
        value[x] += 1;
        break;
      }
    }
    
    return string + value.join("");
  }

  // passes all tests -- really feel like I'm buldozing for no reason
  function incrementString (string) {
    let updateString, value = [];
    let lastNonZeroValue;
    if (string.length == 0){
      return string + 1
    }
    for (let i = string.length - 1; i >= 0; i--){
      let num = parseInt(string[i]);
      if(num >= 0){
        value.unshift(num);
      }else{
        break;
      }
    }
    if (value.length === 0){
      return string + 1; 
    }else{
      updateString = string.slice(0, string.length - value.length);
    }
  
    for(let x = value.length-1; x >= 0; x--){
      if(x === 0 && value[x] === 9){
        value[x] += 1;
      }else if(value[x] == 9){
        value[x] = 0;
      }else{
        value[x] += 1;
        break;
      }
    }
    
    return updateString + value.join("");
  }


  // One Non-Rewgex Solution 
  // very very good recursive function that is easy to understand and has no Regex

  function incrementString(str){
    var c = str[str.length-1];
      switch(c){
              case '0':
              case '1':
              case '2':
              case '3':
              case '4':
              case '5':
              case '6':
              case '7':
              case '8': return str.substring(0, str.length-1) + (parseInt(c)+1); // if the last value is any number other than 9 add 1 to is
              case '9': return incrementString(str.substring(0, str.length-1)) + 0; // if the last number is 9, change the 9 to a zero,
              // call the substring funciton again with a new string that has the last value removed
              default: return str+"1"; // if not 0 - 9 just return +1 
                  }
  }

  function incrementString(str){
    str[str.length-1]; 

  }

