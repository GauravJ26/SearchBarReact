import './App.css';
import { Users } from './users';
import {useState, useEffect} from 'react';
import Table from './Table';
import axios from 'axios';

function App() {
  const [query,setQuery] = useState("");
  const [data, setData] = useState([])

useEffect(() => {
  const fetchUsers = async () =>{
  // const res = await axios.get(`http://localhost:5001?q=${query}`)

const res = await axios.get(`https://reqres.in/api/users?q=${query}`)
    // https://reqres.in/api/users
  setData(res.data);
  };
if (query.length === 0 || query.length > 2) fetchUsers()
}, [query]);

 return (
<div className="App">
<div className="App-header">
<h3 className='heading1'>Type something to search from the table displayed below</h3>

<input 
type='text' 
placeholder='Search..'
className="search"
onChange={(e)=>setQuery(e.target.value)}
/>
<Table data={data}/>
</div>    
</div>
  );
}

export default App;
