// function reverseVowels(str){

//     var vowels = "aeiouAEIOU";

//     var vowelsToReverse = [];

//     for(i = 0 ; i< str.length ; i++){
//     if(vowels.indexOf(str[i]) > -1){
//     vowelsToReverse.push(str[i]);
//     }
//     }

//     var strArray = str.split('');
//     var lastIndex = vowelsToReverse.length -1;
//     for( i = 0 ;i < strArray.length ; i++){
//     if(vowels.indexOf(strArray[i]) > -1){
//     strArray[i] = vowelsToReverse[lastIndex];
//     lastIndex -- ;
//     }
//     }
//     if(str !== strArray.join(''))
//     return strArray.join('');
//     else
//     return "no vowels to replace";
//    }


function reverseVowels(str) {
//define var of vowels and array to hold vowels to be reversed//
    var vowels = "aeiouAEIOU";
    var vowelsToReverse = [];
// loop through str and push into vowelsToReverse string all vowels
    for (i = 0; i <= str.length; i++) {

        if (vowels.indexOf(str[i]) > -1) {
            vowelsToReverse.push(str[i]);
        }
    }

    var strArray = str.split('');// new str Array as str
    var lastIndex = vowelsToReverse.length - 1;//set last vowel of array to reverse //

    // loop through strArray and if there is vowel rev it with vowelstoReverse//
    for(i = 0; i < strArray.length ; i++) {
        if (vowels.indexOf(strArray[i]) > -1) {
            strArray[i] = vowelsToReverse[lastIndex];
            lastIndex--;//dec last index by 1 to reflect next vowel to reverse//
        }
    }
    if (str !== strArray.join(''))//if there are changes between str and strArray//
    return strArray.join('');//return the new strArray that has vowels rev//
    else
    return "No vowels to reverse!"//if equal then no changes occured//
}




console.log(reverseVowels("bbb"));
console.log(reverseVowels("hello world"));
console.log(reverseVowels("Output"));