import './App.css';
import ComponentA from './components/ComponentA'
import ComponentC from './components/ComponentC'
import { useState, useContext } from 'react'
import { DataContext } from './DataContext'


function App() {

  const [userInfo, setUserInfo] = useState({
    name: 'Austin',
    favColor: "blue",
    favFood: "Kimchi Chigae",
    favMovie: "The Boy and the Beast",
    favVideoGame: "Chrono Trigger"
  })

  return (
    <div className="App">
      <h2> Data Context Lesson</h2>
      <DataContext.Provider value={{ userInfo, setUserInfo }}>
        <ComponentA/>
        <ComponentC/>
      </DataContext.Provider>
    </div>
  );
}

export default App;
