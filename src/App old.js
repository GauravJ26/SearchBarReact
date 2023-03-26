import './App.css';
import { Users } from './users';
import {useState} from 'react';
import Table from './Table';


function App() {
  const [query,setQuery] = useState("");

const keys = [ "name" , "username", "email", 'phone']
const search = (data) => {
  return data.filter(
    (item)=>
    keys.some((key)=> item[key].toLowerCase().includes(query ))
  );
};
  return (
    <div className="App">
<div className="App-header">
<input 
type='text' 
placeholder='Search..'
className="search"
onChange={(e)=>setQuery(e.target.value)}
/>

{/* <ul className='list'>
  {Users.filter((keyword) =>
  keyword.name
  .toLowerCase().includes(query))
  .map((keyword)=>(
    <li key={keyword.id}
     className="listItem">
      {keyword.name}
    </li>
  ))}
</ul> */}

<Table data={search(Users)}/>

</div>    </div>
  );
}

export default App;
