import {AiFillCloseCircle} from 'react-icons/ai'
import './collaborator.css';
export default function Collaborator({collaborator,team,HandleDelete}) {
  return (
    <section className='collaborator-conteiner'>
      <AiFillCloseCircle className='close_icon' onClick={()=>HandleDelete(collaborator.id)}/>
        <img className="collaborator_img" src={collaborator.photo} alt="avatar" />
        <h3 className="collaborator_name">{collaborator.name}</h3>
        <p className='collaborator_job'>{collaborator.job}</p>
        <div className='collaborator_color' style={{backgroundColor:team.primaryColor}}></div>
    </section>
  )
}
