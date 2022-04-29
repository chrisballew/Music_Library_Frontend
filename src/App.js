import React, { useState, useEffect} from "react";
import axios from "axios";
import SongTable from "./Components/SongTable/SongTable";
import SearchBar from "./Components/SearchBar/SearchBar";
//import './App.css';

function App() {

  const [songs, setSongs] = useState([])

  useEffect(() => {
    getAllSongs()
  }, [])

  async function getAllSongs(){
    let response = await axios.get("http://127.0.0.1:8000/music/")
    setSongs(response.data)
  }

  return (
    <div className="App">
      <SearchBar songs={songs} setSongs={setSongs}/>
      <SongTable songs={songs} getAllSongs={getAllSongs}/>
    </div>
  );
}


export default App;