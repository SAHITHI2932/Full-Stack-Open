
import React from 'react'
import { renderIntoDocument } from 'react-dom/test-utils'

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }

  ]
  
  

  return (
    <div>
    {
      courses.map((e)=>{
        return(
          <Course key={e.id} s={e}/>
        )
      })
    }
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
     const d=h.map((can)=>{return(can.exercises)})
     const sol=d.reduce((d,e)=>{return d+e})
     return(
       <strong><p>total of {sol} exercises</p></strong>
     )

     
     
   }
export default App