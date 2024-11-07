
import { useState } from "react"
import User from "./Usercard/User"
const UserListing = ({data,setfilterdata}) =>{
    const [show,setshow] = useState(false)
    const [edit,setedit] = useState(false) 
    return (
        <>
        {
          data.map((user,index)=>{
            const {first ,email,dob,picture,age,gender,country,description,id} =user
            return (
                <>
                <User  edit={edit} setedit={setedit} data={data} setfilterdata={setfilterdata} id={id} 
                 description={description} country={country} gender={gender}
                 picture={picture}index={index} show={index===show?true:false} setshow={setshow} dob={dob}email={email}name={first} />
                </>
            )
          })
        }
        </>
    )
}
export default UserListing