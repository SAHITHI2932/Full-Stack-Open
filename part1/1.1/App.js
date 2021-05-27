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
      <Header C={course} />
      <Content A1={part1} A2={part2} A3={part3} B1={exercises1} B2={exercises2} B3={exercises3} />
      <Total T={exercises1+exercises2+exercises3}/>
    </div>  )
}

const Header=prop=>{
  return(
    <div>
      <h1>{prop.C}</h1>
    </div>
  );
}
const Content=props=>{
  return(
    <div>
      <p>
        {props.A1} {props.B1}
      </p>
      <p>
        {props.A2} {props.B2}
      </p>
      <p>
        {props.A3} {props.B3}
      </p>
    </div>
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