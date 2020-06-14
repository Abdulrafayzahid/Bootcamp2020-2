import React from 'react';
import './App.css';

function App({name}) {

  const addFirstValue = (e) => {
    document.getElementById("getFirstNum").innerText = e.target.value
    let Ans = (document.querySelector('#firstInput').value - document.querySelector('#secondInput').value)

    document.getElementById('asnwer').innerText = Ans
  }

  const addSecondValue = (e) => {
    document.getElementById("getSecondNum").innerText = e.target.value
    let Ans = document.querySelector('#firstInput').value - document.querySelector('#secondInput').value

    document.getElementById('asnwer').innerText = Ans
  }

  let rest = () => {
    document.querySelector('#getFirstNum').innerText = 0
    document.querySelector('#getSecondNum').innerText = 0
    document.querySelector('#asnwer').innerText = 0
    document.querySelector('#firstInput').value = null
    document.querySelector('#secondInput').value = null
  }

  return (
    <div className="App">
      <h1>Hello world from <span> {name} </span></h1>

      <h2>Let's do some maths</h2>

      <input type="number" id="firstInput"  onChange={(e) => addFirstValue(e)} />
      <span> - </span> 
      <input type="number" id="secondInput" onChange={(e) => addSecondValue(e)} />

      <h3><span id="getFirstNum">0</span> - <span id="getSecondNum">0</span></h3>

      <h3>Your answer is: <span id="asnwer"></span></h3>

      <p>
        <button onClick={rest}>Reset</button>
      </p>
    </div>
  );
}

export default App;
