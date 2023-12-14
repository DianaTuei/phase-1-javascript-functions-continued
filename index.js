// code your solution here
function saturdayFun(activity = 'roller-skate') {;
    return `This Saturday, I want to ${activity}!`;

}
console.log(saturdayFun());
console.log(saturdayFun("bathe my dog"));


function mondayWork(activity = 'go to the office'){
    return `This Monday, I will ${activity}.`;

}
console.log(mondayWork());

function wrapAdjective(special = "*"){
    return function (adjective = "a dedicated programmer"){
        return `You are ${special}${adjective}${special}!`;
    };

}
const encouragingPromptFunction = wrapAdjective("!!!");
console.log(encouragingPromptFunction());
