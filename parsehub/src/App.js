import { useState, useEffect } from 'react';
import { getDir } from './API/API';
import Breadcrumb from './Breadcrumb';
import NavBar from './NavBar';
import './App.css';

function App() {

  const [dirEntries, setDirEntries] = useState([]);
  const [currentDir, setCurrentDir] = useState('home');
  let dir = [];
  let str = "String..";

  

  useEffect(() => {
    (async () => {
      const response = await getDir(currentDir);
      setDirEntries(oldEntries => [...oldEntries, response]);
    })();
  },[currentDir]);

  const removeItem = (e) => {
    let removeValue = e.target.innerText;
    removeValue = removeValue.replace(">", "").trim();
    console.log(removeValue);
    const indexValue = dirEntries.findIndex(item => item.name === removeValue);
    console.log(indexValue);
    setDirEntries(dirEntries.filter((item,index) => (index <= indexValue)));
  }

  return (
    <div className="App">
      <h3>Breadcrumb</h3>
      <nav className="breadcrumbsNav">
        {
          dirEntries.map((entry,index) => (
            <button onClick={removeItem}><NavBar key={index} name={entry.name} last={(index === dirEntries.length - 1) ? "" : ">"}/></button>
          ))
        }
      </nav>
      <div>
        {
          dirEntries.map((entry,index)=> (
            (index === dirEntries.length - 1) ? <Breadcrumb key={index} name={entry.name} children={entry.children} type={entry.type} setCurrentDir={setCurrentDir}/> : ""
          ))
        }
      </div>
    </div>
  );
}

export default App;