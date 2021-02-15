
import React from 'react';




const List = ({people,deletea}) => {
  // const [people,setPeople] = useState(data);
  
  // const deleteItem = (id)=>{
  //   let newPeople = people.filter((person)=>person.id !== id);
  //   setPeople(newPeople)

  // };


  return (
    <>
     {people.map((p)=>{
       const {id,age,name,image} = p;   //exact match
       return (
        <article key ={id} className='person'>
        <img src={image} alt={name}></img>
        <div>
          <h4>{name}</h4>
          <p>{age} Years old</p>
          <button onClick={()=>deletea(id)}>Delete</button>
        </div>
        </article>
       );
     })}
    </>
  );
};

export default List;
