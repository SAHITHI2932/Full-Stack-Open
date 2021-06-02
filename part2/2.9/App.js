import React,{useState} from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [ newName, setNewName ] = useState('')
  const [newNumber,setNewNumber]= useState('')  
  const [vari,setVari]=useState(persons)
  const handleNC=(event)=>{
      setNewName(event.target.value)
  }
  const handleNC1=(event)=>{
      setNewNumber(event.target.value)
  }
  const handleNC2=(event)=>{
  var x=event.target.value.toLowerCase()
  
  setVari(persons.filter((y)=>{return y.name.toLowerCase().includes(x)}))
  
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
    setVari(vari.concat(people))
    setNewNumber('')
    setNewName('')
  }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <h4>filter shown with<input onChange={handleNC2}/></h4>
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
          vari.map(t=>{return(
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