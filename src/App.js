
import './App.css';
import React from 'react'
function App() {
  const [score,setScore]=React.useState(76)
  const [wicket,setWicket]=React.useState(2)
  const [overs,setOvers]=React.useState(8)

  function changescore(value)

  {
    if(score>100)
    {
      return setScore("India Won");
    }
    else{
    return setScore(score+value)
    }
  }

  function changewicket(value)
  {
    if(wicket>10 && score>100)
    {
      return ;
    }
    else{
    return setWicket(wicket+value)
    }
  }

  function changeovers(value)
  {
    if(score>100)
    {
      return ;
    }
    else{
    return setOvers(overs+value)
    }
  }


  return (
    <div className="App">
    <h1>Cricket Score Tracker</h1>
    
    <h3>Currecnt Score </h3>
    <h3 className={score%2===0? "red":"green"}>{score}</h3>
    
    
    <h3>Current Wicket</h3>
    <h3 className={wicket%2===0? "red":"green"}>{wicket}</h3>
    <h3>Current Over</h3>
    <h3 className={overs%2===0? "red":"green"}>{overs}</h3>
    
   
    <button onClick={()=>changescore(1)}>Score</button>
    <button onClick={()=>changewicket(1)}>Wicket</button>
    <button onClick={()=>changeovers(1)}>Over</button>
    <br></br>
    <button onClick={()=>changescore(1)}>1 Run</button>
    <button onClick={()=>changescore(4)}>4 Run</button>
    <button onClick={()=>changescore(6)}>6 Run</button>
    </div>
    
  );
}

export default App;
