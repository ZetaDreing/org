import './teams.css'
export default function Teams(props) {
  const HandleSetState=(e)=>{
    props.setState(e.target.value)
  }  
  return (
    <div className='conteiner'>
      <label htmlFor="">Equipo</label>
      <select 
      placeholder='Seleccionar equipo'
      value={props.state}
      onChange={HandleSetState}
      >
        {props.teams.map((equipo, index) => {
          return(<option value={equipo.title} key={index}>{equipo.title}</option>)
        })}
      </select>
    </div>
  )
}
