import React,{useState} from 'react';
import './Adopt.css'
import Petslist from './Petslist';
import { useFormik } from "formik";
import Pets from '../../petsjson/PetsData.json';
function Adopt(props) {
    let dogBreeds=Pets.dogs
    const [breed,setBreeds]=useState(dogBreeds)
    let catBreeds=Pets.cats
    let getPetname=(pettype)=>{
       if(pettype==="Dog"){
        setBreeds(dogBreeds)
       }else if(pettype==="Cat"){
        setBreeds(catBreeds)
       }  
    }
    const formik = useFormik({
        initialValues: {
          
        },
        onSubmit: async (values) => {

          const validate = (values) => {
            var phoneNum = /^[6-9]\d{9}$/;
            let errors = {};
          
            if (!values.Email) {
              errors= 'EmailID Required';
            }
             else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.Email)) {
              errors = 'Invalid email address';
            }else if(!values.Fullname){
              errors="Fullname is Required"
            }else if(values.Fullname.length<4){
              errors="name requires minimum 4 Characters"
            }else if(!values.Phone){
              errors="Phonenumber required "
            }else if(!values.Phone.match(phoneNum)){ 
              errors="enter valid phoneNo"
            }else{
              errors=false
            }
            return errors;
          };
          
           let validform=validate(values)
           
          
          if(validform===false){

            let actionType=""
            if(props.trigger_adopt){
                 actionType="adopt"
            }else{
                 actionType="giveaway"
            }
           console.log(values)
           console.log(actionType)
           const indexedDB =
                     window.indexedDB ||
                     window.mozIndexedDB ||
                     window.webkitIndexedDB ||
                     window.msIndexedDB ||
                    window.shimIndexedDB;
           const request=indexedDB.open("Animalshelter",1);
           request.onerror=function(event){
            console.log("Error in DB")
            console.log(event)
           }
           request.onupgradeneeded = function () {
            const db = request.result;
            const store = db.createObjectStore("animalshelter", { keyPath: "id" });
            store.createIndex("animalshelter_data",["value"],{unique:false});
            store.createIndex("adopt_data",["value","query"],{unique:false});
          };

          request.onsuccess = function () {
            console.log("Database opened successfully");
          
            const db = request.result;
          
            // 1
            const transaction = db.transaction("animalshelter", "readwrite");
            //2
            const store = transaction.objectStore("animalshelter");
            const adoptdataIndex = store.index("animalshelter_data");
            
            //3
            let a=Math.random()
            store.put({id:a,value:`${actionType}`,Fullname:`${values.Fullname}`,pettype:`${values.Pettype}`,
                       Breed:`${values.Breed}`,Email:`${values.Email}`,Phone:`${values.Phone}`,query:`${actionType}`});
            //4
            //const idQuery = store.get(1);
            const adoptQuery = adoptdataIndex.getAll(["adopt"]);
            const giveawayQuery = adoptdataIndex.getAll(["giveaway"]);
            // 5
            adoptQuery.onsuccess = function () {
                console.log('adoptrequestType', adoptQuery.result);
              };
            giveawayQuery.onsuccess = function () {
                console.log('giveawayrequestType', giveawayQuery.result);
              };
            // 6
            transaction.oncomplete = function () {
              db.close();
            };
          };

         alert(actionType+" request sended successfully")

        }else{
          console.log(validform)
          alert(validform)
         }

        },})
    return (props.trigger_adopt)?(


        <div className='adopt'>
            <form onSubmit={formik.handleSubmit}>
            <p onClick={()=>props.popupClose("adopt")} className='close'>x</p>
            <div className='contents'>
            <h1>Adopt a pet</h1>
            <h2>What pet do you want to adopt ?</h2>
            <label>Pet type<span>*</span></label>
            <select name='Pettype' onChange={formik.handleChange} onClick={(e)=>getPetname(e.target.value)}>
                <option>Select</option>
                <option value={"Dog"}>Dog</option>
                <option value={"Cat"}>Cat</option>
            </select>
            <label>Breed<span>*</span></label>
            <select name='Breed' onChange={formik.handleChange}>
                <option>Select</option>
                {
                  breed.map((input)=>{
                    return <option value={input.Breed}>{input.Breed}</option>})
                }
            </select>
            <h2>Please fill in your details</h2>
            <label>Fullname<span>*</span></label>
            <input name='Fullname' onChange={formik.handleChange} placeholder="Enter your Fullname"></input>
            <label>Email<span>*</span></label>
            <input name='Email' onChange={formik.handleChange} placeholder="Enter your Email"></input>
            <label>Phone<span>*</span></label>
            <input name='Phone' onChange={formik.handleChange} placeholder="Enter your PhoneNo"></input>
            <button className='submit-btn' type={"submit"} value="REQUEST FOR ADOPTION">REQUEST FOR ADOPTION</button>
            </div>
            </form>
        </div>
        
        
        ):(props.trigger_giveaway)?

        // second form
        <div className='adopt'>
        <form onSubmit={formik.handleSubmit}>
        <p onClick={()=>props.popupClose("giveaway")} className='close'>x</p>
        <div className='contents'>
        <h1>Give Away</h1>
        <h2>What pet do you want to give away ?</h2>
        <label>Pet type<span>*</span></label>
        <select name='Pet-type' onChange={formik.handleChange} onClick={(e)=>getPetname(e.target.value)}>
            <option>Select</option>
            <option value={"Dog"}>Dog</option>
            <option value={"Cat"}>Cat</option>
        </select>
        <label>Breed<span>*</span></label>
        <select name='Breed' onChange={formik.handleChange} >
            <option>Select</option>
            {
              breed.map((input)=>{
                return <option value={input.Breed}>{input.Breed}</option>})
            }
        </select>
        <h2>Please fill in your details</h2>
        <label>Fullname<span>*</span></label>
        <input name='Fullname' onChange={formik.handleChange} placeholder="Enter your Fullname"></input>
        <label>Email<span>*</span></label>
        <input name='Email' onChange={formik.handleChange} placeholder="Enter your Email"></input>
        <label>Phone<span>*</span></label>
        <input name='Phone' onChange={formik.handleChange} placeholder="Enter your PhoneNo"></input>
        <button className='submit-btn' type={"submit"} value="REQUEST FOR ADOPTION">REQUEST FOR GIVE AWAY</button>
        </div>
        </form>
    </div>
    
        
        
        :(props.trigger_dog)?
        <Petslist popClose={props.popupClose}></Petslist>:"";
}

export default Adopt