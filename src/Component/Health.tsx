// import React from 'react';

export const checkHealth = (healthTestValue:number, name:string) => {
  // console.log("healthTestValue",healthTestValue);
  let healthDescriptions = 
    [{"id": 1,"minHealth": 0,"maxHealth": 0,"description": `Your ${name} has fainted!`},
    {"id": 2,"minHealth": 1,"maxHealth": 10,"description": `Your ${name} is about to faint!`},
    {"id": 3,"minHealth": 1,"maxHealth": 25,"description": `Your ${name} is only just holding on!`},
    {"id": 4,"minHealth": 10,"maxHealth": 50,"description": `Your ${name} is in pain.`},
    {"id": 5,"minHealth": 20,"maxHealth": 70,"description": `Your ${name} has taken some hard hits.`},
    {"id": 6,"minHealth": 40,"maxHealth": 80,"description": `Your ${name} has a few cuts and bruises.`},
    {"id": 7,"minHealth": 60,"maxHealth": 90,"description": `Your ${name} has a few scuff marks.`},
    {"id": 8,"minHealth": 70,"maxHealth": 100,"description": `Your ${name} looks happy and content!`},
    {"id": 9,"minHealth": 80,"maxHealth": 100,"description": `Your ${name} is in perfect health!`},
  ];
  // console.log("healthDescriptions",healthDescriptions);
  let possibleHealthDescriptions = [];
  
  for(let i=0; i<healthDescriptions.length; i++){
    if(healthTestValue>=healthDescriptions[i].minHealth){
      if(healthTestValue<=healthDescriptions[i].maxHealth){
        possibleHealthDescriptions.push(healthDescriptions[i])
      }
    }
  }
  // console.log("possibleHealthDescriptions",possibleHealthDescriptions);
  
  if(possibleHealthDescriptions.length===0){
    possibleHealthDescriptions.push({"id": 10,"minHealth": 0,"maxHealth": 100,"description": "broken!"})
  }
  // console.log("possibleHealthDescriptions",possibleHealthDescriptions);
  
  let randDescriptionPosition =  Math.floor(Math.random() * (possibleHealthDescriptions.length));
  // console.log("randDescriptionPosition",randDescriptionPosition);
  // console.log("possibleHealthDescriptions[randDescriptionPosition]",possibleHealthDescriptions[randDescriptionPosition]);
  // console.log(possibleHealthDescriptions[randDescriptionPosition].description);
  let descriptionValue=possibleHealthDescriptions[randDescriptionPosition].description;
  return descriptionValue;
};