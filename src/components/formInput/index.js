import './formInput.css'
export default function FormInput(props) {
  const HandleSetState=(e)=>{
    props.setState(e.target.value)
  }
  const {type='text'} = props
  return (
    <div className={`form-input input-${type}`}>
        <label htmlFor="">{props.label}</label>
        <input type={type}
        placeholder={props.placeholder}
        required={props.required} 
        value={props.state}
        onChange={HandleSetState}
        />

    </div>
  )
}
