import React,{useState} from 'react';
import './Petlist.css';
import pets from "../../petsjson/PetsData.json";
function Petslist(props) {
  let dogs=pets.dogs
  const [pettype,setPettype]=useState(dogs)
  const [petcolor,setPetcolor]=useState(false)
  let cats=pets.cats
  const petType=(pet_type)=>{
      if(pet_type==="dogs"){
        setPettype(dogs)
        setPetcolor(false)
      }else if(pet_type==="cats"){
        setPettype(cats)
        setPetcolor(true)
      }
  }
  return (
    <div className='pets'>
      <p 
       onClick={()=>props.popClose("pets")}
       className='close2'>x</p>
      <h1>What all pets do we have ?</h1>
      <div><h2 onClick={()=>petType("dogs")} className={petcolor?"":"btn-click"}>DOGS</h2>
      <h2 onClick={()=>petType("cats")}      className={petcolor?"btn-click":""}>CATS</h2></div>
      
      <table width="130%" cellSpacing="30">   
              <thead>
               <tr className='table-head'>
                <td>Name</td>
                <td>Breed</td>
                <td>Age(Months)</td>
               </tr>
              </thead>
              <div className='table-line'></div>
              <tbody className='table-body'>
              {pettype.map((input)=>{
              return ( <tr>
              <td>{input.name}</td>
              <td>{input.Breed}</td>
              <td>{input.age}</td>
              </tr>)
               })} 
              </tbody>
      </table>
      </div>

    
  )
  
}

export default Petslist