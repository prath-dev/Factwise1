const Modal = ({id,datas,setfilterdata,setshowmodal,setshow}) =>{
    const deletehandler = () =>{
     setfilterdata(datas.filter((f)=>f.id!==id))
     setshowmodal(false)
     setshow(false)
   
    }
    const Cancelhandler = () =>{
        setshowmodal(false)
    }
    return (
        <>
        <section className="modal-container">
    <div className="delete-dialog">
      <p>Are you sure you want to delete?</p>
      <button onClick={Cancelhandler} className="cancel-button">Cancel</button>
      <button onClick={deletehandler} className="delete-button">Delete</button>
    </div>
  </section> 

        </>
    )
}
export default Modal