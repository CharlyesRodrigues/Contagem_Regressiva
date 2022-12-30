import { useState } from "react";


const useCountdown = (date) =>{

    const [day, setDay] = useState()
    const [hour, setHour] = useState()
    const [minutes, setMinutes] = useState()
    const [second, setSecond] = useState()


  const countDown = () => {
   
    const  countDate = new Date(date).getTime(); // countDate se refere a data futura
  
    const  now= new Date().getTime(); // now se refere a data atual
   
    const intervalo =  countDate - now;
   
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    const dayNumber = Math.floor(intervalo/ day);
    const hourNumber = Math.floor((intervalo % day ) / hour);
    const minutesNumber = Math.floor((intervalo % hour) / minute);
    const secondsNumber = Math.floor((intervalo % minute)/ second);
  

    setDay(dayNumber);
    setHour(hourNumber);
    setMinutes(minutesNumber);
    setSecond(secondsNumber);

};

setInterval(countDown, 1000); // setInterval é um comando próprio que incrementa de um e um segundo 




return [day, hour, minutes, second];  // retorna em forma de array os states


};

export default useCountdown;