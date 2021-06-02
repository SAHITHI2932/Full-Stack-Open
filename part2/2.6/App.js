import React,{useState} from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')
    

  const handleNC=(event)=>{
      setNewName(event.target.value)
  }

  const addN=(event)=>{
    event.preventDefault()
    const people={
      name:newName
    }
    setPersons(persons.concat(people))
    setNewName('')
    
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addN}>
        <div>
          name: <input value={newName} onChange={handleNC}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {
          persons.map(t=>{return(
            <h3 key={t.name}>{t.name}</h3>
              )
            }
          )
        }
      </div>
    </div>
  )
}

export default App