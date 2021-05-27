import React from 'react'

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header c={course} />
      <Content A1={part1} A2={part2} A3={part3} B1={exercises1} B2={exercises2} B3={exercises3} />
      <Total T={exercises1+exercises2+exercises3}/>
    </div>  )
}

const Header=props=>{
  return(
    <div>
      <h1>{props.c}</h1>
    </div>
  );
}
const Content=props=>{
  return(
    <div>
      
        <Part P={props.A1} E={props.B1}/>
     
      
        <Part P={props.A2} E={props.B2}/>
      
     
        <Part P={props.A3} E={props.B3}/>
      
    </div>
  )
}
const Part=prop=>{
  return(
    <p>{prop.P} {prop.E}</p>
  )
}

const Total=t=>{
  return(
    <div>
      <p>No:Of:Exercises:{t.T}</p>
    </div>
  )
}

export default App