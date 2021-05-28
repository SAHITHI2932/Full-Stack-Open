import React, { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const s1=()=>{setGood(good+1)}
  const s2=()=>{setNeutral(neutral+1)}
  const s3=()=>{setBad(bad+1)}
  const total=good+neutral+bad
  const average=good-bad/total
  const positive=good*100/total
  return (
    <div>
      <h1>give feedback</h1>
      <p>
        <button onClick={s1}>good</button><button onClick={s2}>neutral</button><button onClick={s3}>bad</button>
      </p>
      <h2>Staistics</h2>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>
        
        all:{total}<br/>
        average:{average}<br/>
        positive:{positive}%
      
      </p>
    </div>
  )
}

export default App