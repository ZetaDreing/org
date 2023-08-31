import { useState } from 'react'
import FormInput from '../formInput'
import Teams from '../teams'
import Bt from '../bt'
import './form.css'
export default function Form({setCollaborator,setCollaborators,collaborator,collaborators,teams}) {
  const [name,setName] = useState('');
  const [job,setJob] = useState('');
  const [photo,setPhoto] = useState('');
  const [team,setTeam] = useState('')
  const HandleSubmit=(e)=>{
    e.preventDefault()
    let data ={
      name,
      job,
      photo,
      team
    }
    setCollaborator(data)
    setCollaborators([...collaborators,data])
  }
  return (
    <section className='form_conteiner'>
        <form action="" onSubmit={HandleSubmit} className='form'>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <FormInput 
            label='Nombre' 
            placeholder='Ingresa nombre'
            required 
            state={name}
            setState={setName}
            />
            <FormInput 
            label='Puesto' 
            placeholder='Ingresa Puesto'
            required 
            state={job}
            setState={setJob}
            />
            <FormInput 
            label='Foto' 
            placeholder='Ingresa enlace de foto' 
            required
            state={photo}
            setState={setPhoto}
            />
            <Teams
              state={team}
              setState={setTeam}
              teams={teams}
            />
            <Bt texto='Crear' />
        </form>
    </section>
  )
}
