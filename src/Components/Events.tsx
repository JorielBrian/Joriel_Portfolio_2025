import Christmas from "./SeasonalComponents/Christmas";

const Events = () => {
  const today = new Date();
  const month = today.getMonth();

  switch(month){
    case 0 & 11:
      return <Christmas />
      break;
  }
}

export default Events;