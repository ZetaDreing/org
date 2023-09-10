import './collaborators.css'
import Collaborator from '../collaborator'
export default function Collaborators({collaborators,team,newColor,HandleDelete}) {
 const HandleColor=(e)=>{
  newColor(e.target.value,team.id)
 }
  return (

    <>
     {collaborators.length > 0 && 
      <section className='collaborators-conteiner' style={{backgroundColor:team.secondaryColor}}>
        <div className='title_and_input-color'>
        <input 
      type="color"
      className='input_Collaborators-color' 
        value={team.primaryColor}
        onChange={HandleColor}
      />
        <h3 className='collaborators_title' style={{borderBlockColor:team.primaryColor}}>{team.title}</h3>

        </div>
      <div className='collaborators-content'>
      {collaborators.map((collaborator)=>{
       return( 
       <Collaborator
        key={collaborator.id}
        collaborator={collaborator}
        team={team}
        HandleDelete={HandleDelete}
      />
      
      )
      })}
      </div>

  </section>
    }
    </>
   
  )
}

