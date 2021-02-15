import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {

 const [people,setPeople] = useState(data);
  const allList = ()=>{
    let newPeople = data;
    setPeople(newPeople)
  };

    
  const deleteItem = (id)=>{
    let newPeople = people.filter((person)=>person.id !== id);
    setPeople(newPeople)

  };


  return (
    <main>
      <section className='container'>
      <h3>{people.length} birthdays today</h3>
      <button  onClick={()=>setPeople([])}>Clear All</button><br />
 
        <List  people={people}  deletea={deleteItem}/>
      
        <button  onClick={()=>allList()}> ALL list</button>
      </section>
    </main>
    );
}

export default App;
