//Create function with a single parameter
const getSleepHours = day => {
  switch (day) {
    case 'monday':
      return 8;
      break;
    case 'tuesday':
      return 8;
      break;
    case 'wednesday':
      return 6;
      break;
    case 'thursday':
      return 8;
      break;
    case 'thursday':
      return 8;
      break;
    case 'friday':
      return 5;
      break;
    case 'saturday':
      return 9;
      break;
    case 'sunday':
      return 8 ;
      break;
  }
};

//Create a function with no parameters
const getActualSleepHours = () => getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');

//Create a function with no parameters, variable idealHours and set to your ideal number of sleep hours
const getIdealSleepHours = () => {
  const idealHours = 8;
  return idealHours * 7;
};

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();

if ( actualSleepHours === idealSleepHours ){
  console.log('You got the perfect amount of sleep!');
}else if ( actualSleepHours > idealSleepHours ){
  const overSlept = actualSleepHours - idealSleepHours;
  console.log(`You got ${overSlept} more hours than you needed!`);
}else if ( actualSleepHours < idealSleepHours ){
  const underSlept = idealSleepHours - actualSleepHours;
  console.log(`You were short ${underSlept} hours of sleep!`);
}else {
  console.log('Wake up Sleepy!');
}

};

calculateSleepDebt();
