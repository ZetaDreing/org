import './formInput.css'
export default function FormInput(props) {
  const HandleSetState=(e)=>{
    props.setState(e.target.value)
  }
  return (
    <div className='form-input'>
        <label htmlFor="">{props.label}</label>
        <input type="text" 
        placeholder={props.placeholder}
        required={props.required} 
        value={props.state}
        onChange={HandleSetState}
        />

    </div>
  )
}
