import './collaborator.css';
export default function Collaborator({collaborator}) {
  return (
    <section className='collaborator-conteiner'>
        <img className="collaborator_img" src={collaborator.photo} alt="avatar" />
        <h3 className="collaborator_name">{collaborator.name}</h3>
        <p className='collaborator_job'>{collaborator.job}</p>
        <div className='collaborator_color'></div>
    </section>
  )
}
