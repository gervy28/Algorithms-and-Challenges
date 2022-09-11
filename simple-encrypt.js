function encrypt(text, n) {
  if( !text ) return text;
  for (let x = 1; x <= n; x++){
    let oddString = "", evenString = "";
    for (let i = 0; i < text.length; i++){
      if(i == 0 || (i % 2) == 0) {
        oddString += text[i];
      } else{
        evenString += text[i];
      }
    } 
    text = evenString + oddString;
  }
  return text;
}

function decrypt(encryptedText, n) {
  if( !encryptedText ) return encryptedText;
  for (let x = 1; x <= n; x++){
    let midPoint = Math.floor(encryptedText.length / 2),
        evenString = encryptedText.slice(0, midPoint), 
        oddString = encryptedText.slice(midPoint),
        finalString = "";
    for (let i = 0; i < encryptedText.length; i++){
      if(i === 0 || (i % 2) == 0) {
        finalString += oddString.slice(0,1);
        oddString = oddString.slice(1);
      } else{
        finalString += evenString.slice(0,1);
        evenString = evenString.slice(1);
      }
    } 
    encryptedText = finalString;
  }
  
  return encryptedText;
  // all remaining letters are on the right
}

// similar solution but used array in the second lap

function encrypt(text, n) {
    console.log(text, n);
    if (!text || n <= 0) return text; 
    while (n--) {
      let ans = '';
      for (let i = 1; i < text.length; i += 2) {
        ans += text[i];
      }
      for (let i = 0; i < text.length; i += 2) {
        ans += text[i];
      }
      text = ans;
    }
    return text;
  }
  
  function decrypt(encryptedText, n) {
    if (!encryptedText || n <= 0) return encryptedText;
    const ans = new Array(encryptedText.length);
    while (n--) {
      let j = 0;
      for (let i = 1; i < ans.length; i += 2) {
        ans[i] = encryptedText[j++];
      }
      for (let i = 0; i < ans.length; i += 2) {
        ans[i] = encryptedText[j++];
      }
      encryptedText = ans.join('');
    }
    return encryptedText;
  }


  // soluton somewhat like mine

  function encrypt(text, n) {
    if (!text || !text.length || n <= 0)
    {
      return text;
    }
  
    var res = "";
    var oth = "";
  
    for (var i = 0; i < text.length; ++i)
    {
      if (i % 2 == 0)
      {
        oth += text[i];
      }
      else
      {
        res += text[i];
      }
    }
  
    return encrypt(res + oth, --n);
  }
  
  function decrypt(encryptedText, n) {
    if (!encryptedText || !encryptedText.length || n <= 0)
    {
      return encryptedText;
    }
  
    var first = encryptedText.slice(0, encryptedText.length / 2);
    var second = encryptedText.slice(encryptedText.length / 2);
    
    var res = "";
    var i = 0;
    var j = 0;
  
    while (res.length < encryptedText.length)
    {
      if (res.length % 2 == 0)
      {
        res += second[i];
        i++;
      }
      else
      {
        res += first[j];
        j++;
      }
    }
  
    return decrypt(res, --n);
  }



  // Utilizing Recursion

  function encrypt(text, n=0) {
    return n<1 || text==null ? text : encrypt( [...text].reduce(([a,b],v,i)=> i%2 ? [a+v,b]:[a,b+v],['','']).join(''), n-1)
  }
  
  function decrypt(text, n) {
    return n<1 || text==null ? text : decrypt( [...text].slice(text.length/2).map((v,i) => v+text[i] ).join('').slice(0,text.length), n-1)
  }