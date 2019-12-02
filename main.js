const makeDino = function(dino,time,diet,bool=false) {
  return  {
    species:dino,
    period:time,
    carnivore:diet,
    extinct:bool

    

  }
  
  
}



const makeSingular = function(callBack) {
  const dino1 = makeDino(callBack.species.slice(0,-2), callBack.period, callBack.carnivore,callBack.extinct)
  const dino2 = makeDino(callBack.species, callBack.period, callBack.carnivore,callBack.extinct)
  console.log(dino1.species)
    if(dino2.species.includes('us')){

      
      return dino1
    }else return dino2

  
    
  

}


const truncateSpecies = function(callBack) {
  const dino2 = makeDino(callBack.species.slice(0,7)+'...', callBack.period, callBack.carnivore,callBack.extinct)
  const dino3 = makeDino(callBack.species, callBack.period, callBack.carnivore,callBack.extinct)
    
  if(dino3.species.length >=11){
    return dino2

    }else return dino3
}

const makeExtinct = function(callBack) {
  const dino3 =   makeDino(callBack.species, callBack.period, callBack.carnivore,callBack.extinct = true)
return dino3
}

module.exports = {
  makeDino,
  makeSingular,
  truncateSpecies,
  makeExtinct
}