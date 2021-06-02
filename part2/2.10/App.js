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
      <Filter b={handleNC2}/>
     <PersonForm k={addN} p={newName} r={handleNC}  l={newNumber} t={handleNC1}/>
      <h2>Numbers</h2>
      <Persons member={vari}/>
    </div>
  )
}
const Filter=({b})=>{
  return(
    <h4>filter shown with<input onChange={b}/></h4>
  )
}
const PersonForm=({k,p,r,l,t})=>{
  return(
    <form onSubmit={k}>
    <div>
      name: <input value={p} onChange={r}/>
      number: <input value={l} onChange={t}/>
    </div>
    <div>
      <button type="submit">add</button>
    </div>
  </form>
  )
}
const Persons=({member})=>{
  return(
    <div>
        {
          member.map(t=>{return(
            <h3 key={t.name}>{t.name} {t.number}</h3>
              )
            }
          )
        }
      </div>
  )
}
export default App