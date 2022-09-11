// again on the first round I missed and instruction
// also missed other details like, what if there are no empty words...

// This is my first successful solution... way too much going on here. 
function titleCase(title, minorWords = 0) {
    if(title.length > 0){ 
     let minorWordArray = minorWords;
     if (minorWordArray.length > 0){
       minorWordArray = minorWords.toLowerCase().split(" ");
     }
     let newArray = title.toLowerCase().split(" ").map(function(word, index){
       let changedWord
       if(index === 0){
         return word[0].toUpperCase() + word.slice("1");
       }
       if(minorWordArray.length > 0){
         for (i=0; i < minorWordArray.length; i++){
           if (word === minorWordArray[i]){
             return changedWord = word;
           }else{
             changedWord = word[0].toUpperCase() + word.slice("1");
           }
         }
       }else{
         changedWord = word[0].toUpperCase() + word.slice("1");
       }
       return changedWord;
     });
     return newArray.join(" ");
   }
   else{ return title; }
 }



 // Solution #1;
 // comment Also, for a small speedup use minorWords = new Set(minorWords); and minorWords.has(v) to check if each word is in minorWords in O(1) time instead of O(n) time.
 function titleCase(title, minorWords) {
    var minorWords = typeof minorWords !== "undefined" ? minorWords.toLowerCase().split(' ') : [];
    return title.toLowerCase().split(' ').map(function(v, i) {
      if(v != "" && ( (minorWords.indexOf(v) === -1) || i == 0)) {
        v = v.split('');
        v[0] = v[0].toUpperCase();
        v = v.join('');
      }
      return v;
    }).join(' ');
  }


  // Another solution
  // BUT: It's bad practice to change prototypes of built-in objects. Best way is to create helper function with needed functionality

  String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
}

function titleCase(title, minorWords) {  
  var titleAr = title.toLowerCase().split(' '),
      minorWordsAr = minorWords ? minorWords.toLowerCase().split(' ') : [];
    
  return titleAr.map(function(e, i){return minorWordsAr.indexOf(e) === -1 || i === 0 ? e.capitalize() : e })
                .join(' ');
}