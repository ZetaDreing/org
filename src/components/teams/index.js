import './teams.css'
export default function Teams() {
  const teams = [
    "Programación",
    "(Front End)",
    "(Data Science)",
    "(Devops)",
    "(UX y Diseño)",
    "(Móvil)",
    "(Innovación y  Gestión)"
  ]

  return (
    <div className='conteiner'>
      <label htmlFor="">Equipo</label>
      <select name="" id="" placeholder='Seleccionar equipo'>
        {teams.map((equipo, index) => {
          return(<option key={index}>{equipo}</option>)
        })}
      </select>
    </div>
  )
}
