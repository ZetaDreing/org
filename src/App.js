import { useState } from 'react';
import Header from './components/header/index';
import Form from './components/form/index';
import MyOrg from './components/myOrg';
import './App.css';

function App() {
  const [addVisibility,setAddVisibility] = useState(true) 
  return (
    <>
    <Header/>
      {addVisibility && <Form/>}
      <MyOrg
      setAddVisibility={setAddVisibility}
      addVisibility={addVisibility}
      />
    </>
  );
}

export default App;
