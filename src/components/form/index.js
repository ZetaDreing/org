import FormInput from '../formInput'
import Teams from '../teams'
import Bt from '../bt'
import './form.css'
export default function Form() {
  const HandleSubmit=(e)=>{
    e.preventDefault()
  }
  return (
    <section className='form_conteiner'>
        <form action="" onSubmit={HandleSubmit} className='form'>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <FormInput label='Nombre' placeholder='Ingresa nombre' />
            <FormInput label='Puesto' placeholder='Ingresa Puesto' />
            <FormInput label='Foto' placeholder='Ingresa enlace de foto' />
            <Teams/>
            <Bt texto='Crear' />
        </form>
    </section>
  )
}
