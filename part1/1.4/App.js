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
  
  

  return (
    <div>
     <Header course={course} />
      <Content parts={parts}/>
      <Total parts={parts}/>
    </div>
  )
}
const Header=c=>{
  return(
    <h1>{c.course}</h1>
  )
}
const Content=(props)=>{
  const l=props.parts
  const P=l.map((part)=>{
    return(<p>{part.name} {part.exercises}</p>)
      }
    )
    return(<div>{P}</div>)
}
const Total=(props)=>{
  const l=props.parts
  let count=0
  for(const t of l){
    count+=t.exercises
  }
  return(
    <p>No:Of:Exercises:{count}</p>
  )
}

export default App