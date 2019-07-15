var getRandomEvent = function(random){
random =Math.floor(Math.random() * 3);
if (random === 0){
  return 'Barcelona';
  }else if(random === 1){
  return 'Rio';
  }else if(random === 2){
  return 'Vancuver';
  }
}

function getHolidayDays (event) {
let days;
  if(event === 'Barcelona'){
  days = 7;
  }else if(event === 'Rio'){
  days = 14;
  }else if(event === 'Vancuver'){
  days = 21;
  }
  return days;
}

function Event (event){
console.log(`The holiday will take place in ${event}`);
}

function Time(time) {
  
  console.log(`Will be there for ${time}`);
};
