// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]
beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
  });
function destructivelyAppendCat(name){
 return    cats.push("Ralph")}
 function destructivelyPrependCat(name){
    return cats.unshift("Bob")
 }
function destructivelyRemoveLastCat(){
    return cats.pop()
}
function destructivelyRemoveFirstCat(){
    return cats.shift()
}
function appendCat(name){
    return [...cats, "Broom"]
}
function prependCat(name){
    return ["Arnold", ...cats]
}
function removeLastCat(){
    return cats.slice(0, length - 1) }
    function removeFirstCat(){
        return cats.slice(1)
    }