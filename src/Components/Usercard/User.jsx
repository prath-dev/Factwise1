
import Faqitem from "../Faqcomponent/Faqitem"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus,} from "@fortawesome/free-solid-svg-icons";
import Modal from "../Modal";
import "./User.css"
const User = ({name,email,dob,setshow, description,show,index,picture,gender ,data,country,id,setfilterdata,edit,setedit}) =>{
 const togglehandler = () =>{
  console.log(edit)
  if(!edit) {
    if( show===false){
        setshow(index)
    }
    else {
      setshow(false)
    }
  }
  
 }
 
    return (
        <>
    
         <div className="faqcard">
            <div className="user-info-container">
             
                <div className="user-info">
                    <img src={picture} alt="user-image"/>
                    <p>{name}</p>
                </div>
                <div className="toogle-btn">
                {!show ? (
                <FontAwesomeIcon
                  onClick={ togglehandler}
                  icon={faPlus}
                />
              ) : (
                <FontAwesomeIcon
                  onClick={togglehandler}
                  icon={faMinus}
                 
                />
              )}
                </div>
            </div>
         
       {show && <Faqitem setshow={setshow} edit={edit} setedit={setedit} setfilterdata={setfilterdata}id={id} datas={data}  description={description} country={country} gender={gender} name={dob}/>}
       </div>
        </>
    )
}
export default User