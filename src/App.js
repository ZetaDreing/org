import { useState } from 'react';
import Header from './components/header/index';
import Form from './components/form/index';
import MyOrg from './components/myOrg';
import Collaborators from './components/collaborators';
import './App.css';

function App() {
  const [addVisibility, setAddVisibility] = useState(true)
  const [collaborator, setCollaborator] = useState({})
  const [collaborators, setCollaborators] = useState([{
    team: "Front End",
    photo: "https://github.com/harlandlohora.png",
    name: "Harland Lohora",
    job: "Instructor"
  },
  {
    team: "Programación",
    photo: "https://avatars.githubusercontent.com/u/53845240?v=4",
    name: "Edwin Isaac Avila Garcia",
    job: "Desarrollador de software"
  },
  {
    team: "UX y Diseño",
    photo: "https://github.com/JeanmarieAluraLatam.png",
    name: "Jeanmarie Quijada",
    job: "Instructora en Alura Latam"
  },
  {
    team: "Programación",
    photo: "https://github.com/christianpva.png",
    name: "Christian Velasco",
    job: "Head de Alura e Instructor"
  },
  {
    team: "Innovación y Gestión",
    photo: "https://github.com/JoseDarioGonzalezCha.png",
    name: "Jose Gonzalez",
    job: "Dev FullStack"
  }])

  const teams = [
    {
      title: "Programación",
      primaryColor: "#57C278",
      secondaryColor: "#D9F7E9" 
    },
    {
      title: "Front End",
      primaryColor: "#82CFFA",
      secondaryColor: "#E8F8FF" 
    },
    {
      title: "Data Science",
      primaryColor: "#A6D157",
      secondaryColor: "#F0F8E2" 
    },
    {
      title: "Devops",
      primaryColor: "#E06B69",
      secondaryColor: "#FDE7E8"
    },
    {
      title: "UX y Diseño",
      primaryColor: "#DB6EBF",
      secondaryColor: "#FAE9F5"
    },
    {
      title: "Móvil",
      primaryColor:"#FFBA05",
      secondaryColor:"#FFF5D9" 
    },
    {
      title: "Innovación y Gestión",
      primaryColor: "#FF8A29",
      secondaryColor: "#FFEEDF" 
    }
  ]
  return (
    <>
      <Header />
      {addVisibility && <Form
        setCollaborator={setCollaborator}
        setCollaborators={setCollaborators}
        collaborators={collaborators}
        collaborator={collaborator}
        teams={teams}
      />}
      <MyOrg
        setAddVisibility={setAddVisibility}
        addVisibility={addVisibility}
      />
      {teams.map((team, index) => {
        return (<Collaborators
          collaborators={collaborators}
          team={team}
          key={index}
        />)
      })}
    </>
  );
}

export default App;
