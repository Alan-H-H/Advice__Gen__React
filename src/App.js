import diceIcon from "./images/icon-dice.svg"
import imgDesk from "./images/pattern-divider-desktop.svg"
import imgMob from "./images/pattern-divider-mobile.svg"

import './App.css';
import { useState } from "react";

function App() {

    const [message, setMessage] = useState({
      id: 1,
      advice: "roll the dice!",
    });

    const [isLocked, setIsLocked] = useState(false)
    
    const fetchAdvice = () =>{
      fetch('https://api.adviceslip.com/advice')
        .then(response => response.json())
          .then((data) => {
            const {
              slip: {id, advice},
            } = data
          setMessage ({ id, advice })
      
    })}

    const getAdvice = ()=>{
      if (isLocked){
        return
          } else {
          setTimeout(()=>{
            setIsLocked(false)
      }, 1000)
    }
      fetchAdvice()
  }

      let dataId = message.id
      let dataAdvice = message.advice

      console.log(dataAdvice)
      return (
       <div id="container">
        <h1>ADVICE # {dataId}</h1>
          <p>"{dataAdvice}"</p>
            <img src={imgMob} id="mobile" />
              <img src={imgDesk} id="desktop" />
                <br></br>
                  <div id="icon" onClick={getAdvice}>
                    <img src={diceIcon} />
                  </div>
        </div>
      )
    
}



export default App;
