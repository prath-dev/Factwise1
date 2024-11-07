
import "./EDitfaq.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faTimes, faCheck } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
const Editfaq = ({name,setdisabled, setedit,edithandler,birth,gender,countryedit,description,setcountry,genderedit,setgender,dateedit,setdate,descriptionedit,setdescription,disabled}) =>{
    const [isOpen,setIsOpen] = useState(false)
 
  const disabledhandler =() =>{
    setdisabled(false)
  }
    const countryhandler = (e) =>{
        setcountry(e.target.value)
        disabledhandler ()
    }
    const datehandler = (e) =>{
      const newDate = e.target.value;
      setdate(newDate);
      disabledhandler();
    }
    const genderhanlder = (e) =>{
      setgender( e.target.value)
      disabledhandler ()
    
    }
    const descriptionhandler = (e) =>{
      setdescription( e.target.value)
      disabledhandler ()
    }
    return (
        <>  
      <div className="user-info-edit">
        <div className='inputs'>
        <div className=" column age-info">
        <p>Age :</p>
        <input type="date" value={dateedit} onChange={datehandler}  required/>
        </div>
        <div className=" column gender-info">
        <p>Gender :</p>
        <select  value={genderedit}  onChange={genderhanlder} type="text"   required >
         <option value="Male">Male</option>
        <option value="Female">Female</option>
         <option value="Transgender">Transgender</option>
        <option value="Rather not say">Rather not say</option>
        <option value="Other">Other</option>
        </select>
        </div>
        <div className=" column gender-info">
        <p>Country :</p>
        <input value={countryedit} onChange={countryhandler} type="text" required/>
        </div>
        </div>
        <div className="description">
        <textarea
        value={descriptionedit}
        onChange={descriptionhandler}
        className="description"></textarea>
   </div>
  
      <div className='buttons flex'>
      <FontAwesomeIcon onClick={()=>setedit(false)} icon={faTimes} />
      <FontAwesomeIcon  onClick={ !disabled  && edithandler}  style={{
        color: disabled ? 'gray' : 'green',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1
      }} icon={faCheck}  />
      </div>
      </div>

        
        </>
    )
}

export  default Editfaq