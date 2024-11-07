import { useState } from "react"
import Searchbar from "./Searchcomponent/Searchbar"
import UserListing from "./UserListing"


import { cleberities } from "../cleberities"

const Userinfo = () =>{
 
    const [filterdata,setfilterdata] = useState(cleberities)
    const filterdatahandler = (data) =>{
      setfilterdata(cleberities.filter((f)=>f.first.toLowerCase().includes(data)))
    }
  
    return (
        <>
         <div className="List">
          <h3>List view</h3>
        
         <Searchbar filterdata={filterdatahandler}/>
     
        <UserListing setfilterdata={setfilterdata}  data={filterdata}/>
        </div>
        </>
    )
}
export default Userinfo