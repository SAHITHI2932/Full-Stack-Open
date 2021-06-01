
import React from 'react'
import { renderIntoDocument } from 'react-dom/test-utils'

const App = () => {
  const course = {
    name: 'Half Stack application development',
    id:1,
    parts: [
      {
        id:1,
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        id:2,
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        id:3,
        name: 'State of a component',
        exercises: 14
      },
      {
        id:4,
        name:'redux',
        exercises:11
      }
    ]
  }
  
  

  return (
    <div>
     <Course s={course}/>
    </div>
  )
}
   const Course=({s})=>{
     return(
       <div>
       <Header a={s.name}/>
       <Content h={s.parts}/>
       <Total h={s.parts}/>
     
       </div>
     )
   }
    
   const Header=({a})=>{
     return(
       <h2>{a}</h2>
     )
   }
   const Content=({h})=>{
     return(
       <div>
         {
           h.map(p=>{
             return(
               <Part key={p.id} word={p.name} word1={p.exercises}/>
             )
           }

           )
         }
       </div>
     )
   }
   const Part=({word,word1})=>{
     return(
       <p>{word} {word1}</p>
     )
   }
   const Total=({h})=>{
     let x=0
     for( const j of h)
     {
       x+=j.exercises
     }
     return(
       <p>total of {x} exercises</p>
     )
   }
export default App