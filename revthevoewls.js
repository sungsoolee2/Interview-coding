function reverseVowels(str){
 
    var vowels = "aeiouAEIOU";
    
    var vowelsToReverse = [];
    
    for(i = 0 ; i< str.length ; i++){
    if(vowels.indexOf(str[i]) > -1){
    vowelsToReverse.push(str[i]);
    }
    }

    var strArray = str.split('');
    var lastIndex = vowelsToReverse.length -1;
    for( i = 0 ;i < strArray.length ; i++){
    if(vowels.indexOf(strArray[i]) > -1){
    strArray[i] = vowelsToReverse[lastIndex];
    lastIndex -- ;
    }
    }
    if(str !== strArray.join(''))
    return strArray.join('');
    else
    return "no vowels to replace";
   }
   console.log(reverseVowels("bbb"));
   console.log(reverseVowels("hello world"));
   console.log(reverseVowels("Output"));