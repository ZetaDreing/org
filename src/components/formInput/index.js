import './formInput.css'
export default function FormInput(props) {
  return (
    <div className='form-input'>
        <label htmlFor="">{props.label}</label>
        <input type="text" placeholder={props.placeholder} />
    </div>
  )
}
