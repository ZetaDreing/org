import { useState } from 'react';
import hexToRgba from 'hex-to-rgba';
import { v4 as uuid } from 'uuid';
import FormInput from '../formInput';
import Teams from '../teams';
import Bt from '../bt';
import './form.css';
export default function Form({setCollaborator,setCollaborators,collaborators,teams,setNewTeam,setTeams,newTeam}) {
  const [name,setName] = useState('');
  const [job,setJob] = useState('');
  const [photo,setPhoto] = useState('');
  const [team,setTeam] = useState('')
  const [teamName,setTeamName] = useState('')
  const [teamColor,setTeamColor] = useState('')
  const HandleSubmit=(e)=>{
    e.preventDefault()
    let data ={
      name,
      job,
      photo,
      team,
      id:uuid()
    }
    setCollaborator(data)
    setCollaborators([...collaborators,data])
  }
  let newTeamObject = {title:teamName,primaryColor:teamColor, secondaryColor:hexToRgba(teamColor,0.3)}
  const HandleNewTeam =(e)=>{
    e.preventDefault()
    setNewTeam(newTeamObject)
    setTeams([...teams,{...newTeamObject,id:uuid()}])
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
        <form action="" onSubmit={HandleNewTeam} className='form'>
            <h2>Rellena el formulario para crear un nuevo equipo.</h2>
            <FormInput 
            label='Nombre del equipo' 
            placeholder='Ingresa el nombre del equipo'
            required 
            state={teamName}
            setState={setTeamName}
            />
            <FormInput 
            label='Color' 
            placeholder='Ingresa el color en hexadecimal'
            required 
            state={teamColor}
            setState={setTeamColor}
            type={'color'}
            />
            <Bt texto='Crear nuevo equipo' />
            </form>
    </section>
  )
}
