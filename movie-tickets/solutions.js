
// my first solution, finished in 15 minutes
// the logic, check every one against the change that he has available

function tickets(peopleInLine){
    let currentCash = 0, 
        receivedCash; //index value,
    
    // peopleInLine person 0 is first in line
    for(i = 0; i < peopleInLine.length; i++){
      if(peopleInLine[i] == 25){
        currentCash = currentCash + 25;
      } else if(peopleInLine[i] == 50){
        if(currentCash >= 25){
          currentCash = currentCash - 25;
        }else{
          return 'NO';
        }
      } else if(peopleInLine[i] == 100){
        if(currentCash >= 75){
          currentCash = currentCash - 75;
        } else{
          return 'NO';
        }
      }   
    }
    return 'YES';
  }
  

  // better logic I relized while going


  // If he has cash, ticket price, and received cash
  // he will receive cash
  // he only gives cash if received is greater than ticket price
  // if received is greater than ticket price he needs to give change
  // if he has enough change he can continue
  // if there is any extra he can add it to his cash


  function tickets(peopleInLine){
    let currentCash = 0,
        ticketPrice = 25;
    for(p = 0; p < peopleInLine.length; p++){
        let changeNeeded = peopleInLine[p] - ticketPrice;
        if(changeNeeded > currentCash){ 
          return "NO"
        }else if (changeNeeded > 0){
            currentCash = currentCash - changeNeeded;
        }else{
          currentCash = currentCash + ticketPrice;
        }
    }
    return "YES"
  }



  // mock tests:
  Test.assertEquals(tickets([25, 25, 50, 100, 25, 50]), "NO");
  Test.assertEquals(tickets([25, 25, 25, 25, 25, 25, 25, 100, 50, 25]), "YES");


  // I don't like this either (also missed my logic here, need to figure out how to draw these out even better)

  function tickets(peopleInLine){
    let currentCash = 0,
        ticketPrice = 25;
    for(p = 0; p < peopleInLine.length; p++){
        let changeNeeded = peopleInLine[p] - ticketPrice;
        if(changeNeeded > currentCash){ 
          return "NO"
        }else if (changeNeeded > 0){
            currentCash = currentCash - changeNeeded;
        }else{
          currentCash = currentCash + ticketPrice;
        }
    }
    return "YES"
  }




  // three types of cash coming in.. 
  function tickets(peopleInLine){
    let cashDrawer ={
        '25': 0,
        '50' : 0,
        '100' : 0,
    };
  }

// Final Solution -- seems wayyyyyy tooo complex

  function tickets(peopleInLine){
    let cashDrawer ={
        '25': 0,
        '50' : 0,
        '100' : 0,
    };
    for(p = 0; p < peopleInLine.length; p++){
      switch(peopleInLine[p]){
        // get a 25 take keep it, give back nothing
        case 25:
          cashDrawer['25'] += 1;
          break;
        //  check if you have a 25; if not "NO"; else give the 25 add a 50;
        case 50:
          if(cashDrawer['25'] === 0){
            return 'NO';
          }else{
            cashDrawer['25'] -= 1;
            cashDrawer['50'] += 1;
            break;
          }
        case 100:
          if(cashDrawer['50'] === 0 & cashDrawer['25'] < 3){
            return "NO";
          } else if (cashDrawer['50'] >= 1 & cashDrawer['25'] < 1){
            return "NO";
          } else if (cashDrawer['50'] >= 1){
            cashDrawer['50'] -= 1;
            cashDrawer['25'] -= 1;
            cashDrawer['100'] += 1;
            break;
          } else {
            cashDrawer['25'] -= 3;
            cashDrawer['100'] += 1;
            break;
          }      
      }
    }
    return "YES";
  }





  // EXCELLENT WORK:
  function tickets(peopleInLine) {
    var bills = [0, 0, 0]
    for (var i = 0; i < peopleInLine.length; i++) {
      switch (peopleInLine[i]) {
        case 25:
          bills[0]++
          break
          
        case 50:
          bills[0]--
          bills[1]++
          break
          
        case 100:
          bills[1] ? bills[1]-- : bills[0] -= 2
          bills[0]--
          break
      }
      
      if (bills[0] < 0) {
        return 'NO'
      }
    }
    
    return 'YES'
  }

  // I love the elegance of checking this against 0 - interesting and need to think about how to do this.. 
  // Another great example

  function tickets(peopleInLine){
    let [c25,c50,c100] = [0,0,0];
    for(let v of peopleInLine) {
      if(v===25) c25++;
      if(v===50) {c50++; c25--;}
      if(v===100) {c25--; c50>0?c50--:c25-=2;}
      if(c25<0||c50<0) return 'NO'
    }
    return 'YES'
  }




  // OOP example, overly complex though, say the comments. 
  // just runs the whole thing and looks for a negative number
  function Clerk(name) {
    this.name = name;
    
    this.money = {
      25 : 0,
      50 : 0,
      100: 0 
    };
    
    this.sell = function(element, index, array) {
      this.money[element]++;
  
      switch (element) {
        case 25:
          return true;
        case 50:
          this.money[25]--;
          break;
        case 100:
          this.money[50] ? this.money[50]-- : this.money[25] -= 2;
          this.money[25]--;
          break;
      }
      return this.money[25] >= 0;
    };
  }
  
  function tickets(peopleInLine){
    var vasya = new Clerk("Vasya");
    return peopleInLine.every(vasya.sell.bind(vasya)) ? "YES" : "NO";
  }


