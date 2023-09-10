import {AiFillGithub,AiFillLinkedin} from 'react-icons/ai'
import './footer.css'
export default function Footer() {
  return (
    <footer className='footer-conteiner'>
        <img src="/img/polygon 1.svg" alt="polygon 1" />
        <div className='networks_icons-conteiner'>
        <AiFillLinkedin className='network_icon'/>
        <AiFillGithub className='network_icon'/>
        </div>
        <img src="/img/polygon 2.svg" alt="polygon 2" />
        <img className='logo_icon' src="/img/Logo.svg" alt="Logo" />
        <img src="/img/Ellipse 2.svg" alt="Ellipse 2" />
        <h4 className='credits'>Desarrollado por Zeus Mendoza López</h4>
        <img className='ellipse' src="/img/Ellipse 3.svg" alt="Ellipse 3" />
    </footer>
  )
}
