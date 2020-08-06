// const mathNum = [39,89,90];
// const engNum = [19,79,60];

// const allNum = mathNum.concat(engNum);

// console.log(allNum);


const mathNum = [39,89,90];
const engNum = [19,79,60,88];

const allNum = [...mathNum,...engNum];

console.log(allNum);

const income = [480,390,899];

const rich = Math.max(...income);
console.log(rich);

