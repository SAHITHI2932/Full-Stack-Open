import React from 'react'

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
  const details=parts.map(props=>{
    return(<p>{props.name} {props.exercises}</p>)
  })
  let count=0
  for(const part of parts){
      count+=part.exercises
  }

  return (
    <div>
      <h1>{course}</h1>
      {details}
      <p>no:of:exercises:{count}</p>
    </div>
  )
}

export default App