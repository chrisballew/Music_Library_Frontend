import React, { useState } from 'react';


function App() {

    const [music, setMusic] = useState([{title:'', artist: '', genre:'', release_date:'' }])

  return (
  <div>
    <h1> Music Library</h1>
  <h3>Welcome to your Music Library</h3>
  <table>
    <thread>
      <tr>
        <th> Title </th>
        <th> Artist </th>
        <th> Album </th>
        <th> Genre </th>
      </tr>
    </thread>
  </table>
  </div>
  );
}

export default App;