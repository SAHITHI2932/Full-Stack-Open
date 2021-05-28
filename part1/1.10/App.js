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
        <Button listener={s1} message='good'/>
        <Button listener={s2} message='neutral'/>
        <Button listener={s3} message='bad'/>
      </p>
      <h2>Statistics</h2>
      <Statistics GOOD={good} NEUTRAL={neutral} BAD={bad}/>
    </div>
  )
}
 const Statistics=(props)=>{
   if(props.GOOD===0 && props.NEUTRAL===0 && props.BAD===0)
   return(
     <h2>No Feedback given</h2>
   )
  const total=props.GOOD+props.NEUTRAL+props.BAD
  const average=props.GOOD-props.BAD/total
  const positive=props.GOOD*100/total
  return(
  <div>
    <Statistic count={props.GOOD} text='good'/>
    <Statistic count={props.NEUTRAL} text='neutral'/>
    <Statistic count={props.BAD} text='bad'/>
    <Statistic count={total} text='all'/>
    <Statistic count={average} text='average'/>
    <Statistic count={positive} text='positive'/>
</div>
  )
}
   const Button=(props)=>{
     return(
       <button onClick={props.listener}>{props.message}</button>
     )
   }
const Statistic=(props)=>{
  return(
    <p>{props.text} {props.count}</p>
  )
}
export default App