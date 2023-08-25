import './myOrg.css'
export default function MyOrg({addVisibility,setAddVisibility}) {

    const HandleAdd=()=>{
        setAddVisibility(!addVisibility)
    }
  return (
    <section className='my_org-conteiner'>
       <div className='my_org-content'>
       <h2>Mi organización</h2>
       </div>
       <div className='add_icon-conteiner'>
       <img src="/img/add_icon.png" alt="add icon" onClick={HandleAdd} />
       </div>
    </section>
  )
}
