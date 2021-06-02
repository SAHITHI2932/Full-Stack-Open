import React,{useState} from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas',number: '040-123456' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [newNumber,setNewNumber]= useState('')  

  const handleNC=(event)=>{
      setNewName(event.target.value)
  }
  const handleNC1=(event)=>{
      setNewNumber(event.target.value)
  }

  const addN=(event)=>{
    event.preventDefault()
    const val=persons.some((g)=>{return g.name===newName})
    if(val===true){
      alert(`${newName} is already added to phonebook`)
     }
     else{
    const people={
      name:newName,
      number:newNumber
    }
    setPersons(persons.concat(people))
    setNewNumber('')
    setNewName('')
  }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addN}>
        <div>
          name: <input value={newName} onChange={handleNC}/>
          number: <input value={newNumber} onChange={handleNC1}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {
          persons.map(t=>{return(
            <h3 key={t.name}>{t.name} {t.number}</h3>
              )
            }
          )
        }
      </div>
    </div>
  )
}

export default App