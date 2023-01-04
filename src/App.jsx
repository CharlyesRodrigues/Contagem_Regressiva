import Title from './components/Title'
import Counter from './components/Counter'
import newyear from './assets/newyear.jpg'
import './App.css'

import useCountdown from './hooks/useCountdown'

function App() {
 

  const [day, hour, minutes, second] = useCountdown ("Janeiro 1, 2023, 00:00:00");
  
  
  return (
    <div className='App' style ={{ backgroundImage: `url( ${newyear})` }}>
      <div className='containner'>
        <Title title = 'Contagem Regressiva para 2023' />       
          <div className='countdown-container'>
          <Counter title="Dias"  number={day}/>
          <Counter title="Horas"  number={hour}/>
          <Counter title="Minutos"  number={minutes}/>
          <Counter title="Segundos"  number={second}/>
         

          </div>

      </div>

    </div>
  )
}

export default App
