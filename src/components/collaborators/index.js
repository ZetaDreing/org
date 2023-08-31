import './collaborators.css'
import Collaborator from '../collaborator'
export default function Collaborators({collaborators,team}) {
  return (

    <section className='collaborators-conteiner'>
        <h3 className='collaborators_title'>{team.title}</h3>
        <div className='collaborators-content'>
        {collaborators.map((collaborator,index)=>{
         return( <Collaborator
          key={index}
          collaborator={collaborator}
        />)
        })}
        </div>

    </section>
  )
}
