import { useState } from 'react';
import hexToRgba from 'hex-to-rgba';
import { v4 as uuid } from 'uuid';
import Header from './components/header/index';
import Form from './components/form/index';
import MyOrg from './components/myOrg';
import Collaborators from './components/collaborators';
import Footer from './components/footer';
import './App.css';

function App() {
  const [addVisibility, setAddVisibility] = useState(true)
  const [collaborator, setCollaborator] = useState({})

  const [teams, setTeams] = useState([
    {
      id: uuid(),
      title: "Programación",
      primaryColor: "#57C278",
      secondaryColor: "#D9F7E9"
    },
    {
      id: uuid(),
      title: "Front End",
      primaryColor: "#82CFFA",
      secondaryColor: "#E8F8FF"
    },
    {
      id: uuid(),
      title: "Data Science",
      primaryColor: "#A6D157",
      secondaryColor: "#F0F8E2"
    },
    {
      id: uuid(),
      title: "Devops",
      primaryColor: "#E06B69",
      secondaryColor: "#FDE7E8"
    },
    {
      id: uuid(),
      title: "UX y Diseño",
      primaryColor: "#DB6EBF",
      secondaryColor: "#FAE9F5"
    },
    {
      id: uuid(),
      title: "Móvil",
      primaryColor: "#FFBA05",
      secondaryColor: "#FFF5D9"
    },
    {
      id: uuid(),
      title: "Innovación y Gestión",
      primaryColor: "#FF8A29",
      secondaryColor: "#FFEEDF"
    }
  ])
  const [newTeam, setNewTeam] = useState([])
  const [collaborators, setCollaborators] = useState([{
    id: uuid(),
    team: "Front End",
    photo: "https://github.com/harlandlohora.png",
    name: "Harland Lohora",
    job: "Instructor"
  },
  {
    id: uuid(),
    team: "Programación",
    photo: "https://avatars.githubusercontent.com/u/53845240?v=4",
    name: "Edwin Isaac Avila Garcia",
    job: "Desarrollador de software"
  },
  {
    id: uuid(),
    team: "UX y Diseño",
    photo: "https://github.com/JeanmarieAluraLatam.png",
    name: "Jeanmarie Quijada",
    job: "Instructora en Alura Latam"
  },
  {
    id: uuid(),
    team: "Programación",
    photo: "https://github.com/christianpva.png",
    name: "Christian Velasco",
    job: "Head de Alura e Instructor"
  },
  {
    id: uuid(),
    team: "Innovación y Gestión",
    photo: "https://github.com/JoseDarioGonzalezCha.png",
    name: "Jose Gonzalez",
    job: "Dev FullStack"
  }])
  let newColor = (color, id) => {
    const updateTeams = teams.map(teams => {
      if (teams.id === id) {
        teams.primaryColor = color
        teams.secondaryColor = hexToRgba(color, 0.3)
      }
      return (teams)
    })
    setTeams(updateTeams)
  }
  const HandleDelete = (id) => {
    const uptadateCollaborators = collaborators.filter(collaborator => collaborator.id != id)
    setCollaborators(uptadateCollaborators)
  }
  return (
    <>
      <Header />
      {addVisibility && <Form
        setCollaborator={setCollaborator}
        setCollaborators={setCollaborators}
        collaborators={collaborators}
        collaborator={collaborator}
        teams={teams}
        newTeam={newTeam}
        setNewTeam={setNewTeam}
        setTeams={setTeams}
      />}
      <MyOrg
        setAddVisibility={setAddVisibility}
        addVisibility={addVisibility}
      />
      {teams.map((team) => (
        <Collaborators
          collaborators={collaborators.filter(collaborator => collaborator.team === team.title)}
          team={team}
          newColor={newColor}
          key={team.id}
          HandleDelete={HandleDelete}
        />
      ))}
    <Footer/>
    </>
  );
}

export default App;
