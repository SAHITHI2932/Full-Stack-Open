import React from 'react'

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
  export default Course