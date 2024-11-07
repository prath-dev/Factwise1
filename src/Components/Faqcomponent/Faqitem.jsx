import "./Faqitem.css"
import { useState } from "react";
import Editfaq from "../EditFaq/Editfaq"
import { calculateAge } from "../../constant"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faPencilAlt, faTimes, faCheck } from '@fortawesome/free-solid-svg-icons';
import Modal from "../Modal";
const Faqitem = (
  {name,age,gender,country,description,datas,setfilterdata,id,edit,setedit,setshow}) =>{
  const [countryedit,setcountry] = useState(country)
  const [dateedit,setdate] = useState(name)
  const [descriptionedit,setdescription]= useState(description)
  const [genderedit,setgender] = useState(gender)
  const [disabled,setdisabled] = useState(true)
  const [showmodal,setshowmodal] = useState(false)
  
 const adultchecker = () =>{
  let checkadult = datas.find((f)=>f.id===id)
  checkadult = calculateAge(checkadult.dob)
  if(checkadult>18) {
  return true
  }
  else {
    return false
  }
 }
  const edithandler = () => {
  
    setedit(!edit)
    setdisabled(true)
    setfilterdata(
      datas.map((m) => {
        
        if (m.id !== id) return m
        return {
          ...m,
          ...(countryedit !== null && { country: countryedit }),
          ...(dateedit !== null && { dob: dateedit}),
          ...(genderedit !== null && { gender: genderedit }),
          ...(descriptionedit !== null && { description: descriptionedit }),
        };
      })
    );
  };
  const ShowModalhandler  = () =>{  
      setshowmodal(true)
  }
   
    return (
        <>
      {  !edit && <div className="Faq">
        <div className="delete-modal">
       { showmodal && <Modal setshow={setshow} setedit={setedit}  setshowmodal={setshowmodal} setfilterdata={setfilterdata} datas={datas} id={id} />}
        </div>
      <div className="user-info">
        <div className=" column age-info">
        <p>Age :</p>
        <p>{calculateAge(name)}</p>
        </div>
        <div className=" column gender-info">
        <p>Gender :</p>
        <p>{gender}</p>
        </div>
        <div className=" column gender-info">
        <p>Country :</p>
        <p>{country}</p>
        </div>
      </div>
      <div className="description">
        <h3>Description:</h3>
        <p>{description}</p>
      </div>
      <div className="btn flex">
      <FontAwesomeIcon  onClick={ShowModalhandler} icon={faTrashAlt} style={{ color: "red", fontSize: "24px" }}/>
       <FontAwesomeIcon
    icon={faPencilAlt} onClick={  adultchecker() && edithandler} style={{   color: "green", fontSize: "25px", marginLeft: "12px",  }}/>
      </div>
      </div>
}
      { edit &&  <Editfaq name={name} setedit={setedit} edithandler={edithandler}  disabled={disabled} setdisabled={setdisabled} description={description} genderedit={genderedit} setgender={setgender} descriptionedit={descriptionedit} setdescription={setdescription} setcountry={setcountry} countryedit={countryedit} dataedit={dateedit} setdate={setdate} birth={name}gender={gender}country={country}/>}
        </>
    )
}
export default Faqitem