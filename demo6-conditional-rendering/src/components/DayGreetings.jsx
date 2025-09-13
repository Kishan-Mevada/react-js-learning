const DayGreetings = ({timeOfDay}) => {
    return timeOfDay === 'morning' ? 'Good Morning!'
           : timeOfDay === 'afternoon' ? 'Good Afternoon!' : 'Good Night!';
}

export default DayGreetings;