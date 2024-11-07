import { useState } from "react"
import "./Searchbar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
const Searchbar = ({filterdata}) =>{
   
    const [query,setquery] = useState("")
    const filterHandler = (e) =>{
       setquery(e.target.value)
        filterdata(e.target.value)
    } 
    return (
        <>
        <div className="input-container">
        <input  className="search" placeholder="search" type="text" value={query} onChange={filterHandler} type="search"/>
    
        <button className="search-btn" type="submit" >
          <FontAwesomeIcon
            icon={faSearch}
           
          />
        </button>
        </div>
        </>
    )
}
export default Searchbar