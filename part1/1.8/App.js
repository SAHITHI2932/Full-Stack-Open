import React, { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const s1=()=>{setGood(good+1)}
  const s2=()=>{setNeutral(neutral+1)}
  const s3=()=>{setBad(bad+1)}
 
  return (
    <div>
      <h1>give feedback</h1>
      <p>
        <button onClick={s1}>good</button><button onClick={s2}>neutral</button><button onClick={s3}>bad</button>
      </p>
      <h2>Statistics</h2>
      <Statistics GOOD={good} NEUTRAL={neutral} BAD={bad}/>
    </div>
  )
}
 const Statistics=(props)=>{
  const total=props.GOOD+props.NEUTRAL+props.BAD
  const average=props.GOOD-props.BAD/total
  const positive=props.GOOD*100/total
  return(
  <p> good {props.GOOD}<br></br>
      neutral {props.NEUTRAL}<br></br>
      bad {props.BAD}<br></br>
      all {total}<br></br>
      average {average}<br></br>
      positive {positive}<br></br>
  </p>
  )
}

export default App