
function count_letters(string){

var letter_counts =new LetterCounts();
var letters = string.toLowerCase().split("");

for (var i= 0;i <letters.length; i++){
letter =letters[i];

if (!letter_counts.contains(letter)){
    letter_counts.add(letter);
} else{
    letter_counts.increment(letter);
}
}
return letter_counts;
}

function LetterCounts(){
    this.letter_counts ={};
}

LetterCounts.prototype.add = function(letter){
    this.letter_counts[letter] =1;
}
LetterCounts.prototype.increment = function(letter){
    this.letter_counts[letter] +=1;
}
LetterCounts.prototype.contains = function(letter){
    if (this.letter_counts[letter] === undefined) {
        return false;
    }else{
        return true;
    }
}
LetterCounts.prototype.get = function(letter){
    if (this.letter_counts[letter] === undefined) {
        return 0;
    }else{
        return this.letter_counts[letter]
    }
}
var letter_counts = count_letters("Example sentence");


console.log(letter_counts['s']); 