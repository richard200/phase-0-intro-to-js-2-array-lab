// Write your solution here!
 const cats = ["Milo", "Otis", "Garfield"];


function destructivelyAppendCat(name){
    cats.push("Ralph");
}

function destructivelyPrependCat(name){
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat(){
    cats.pop();
}

function destructivelyRemoveFirstCat(){
    cats.shift();
}

function appendCat(name){
   let cats2 = [...cats, name];
        return cats2;
    
  }

  function prependCat(name){
    let cats2= [name, ...cats];
        return cats2;
  }

  function removeLastCat(){
    let cats2 = cats.slice(0, cats.length-1);
        return cats2;
  }

  function removeFirstCat(){
    let cats2 = cats.slice(1);
        return cats2;
  }