
import { useState } from 'react';
import './App.css';
import {useMergeState} from "./Hook/useMergeState";

function App() {

  const initState = {
    username: "",
    email: "",
    password: "",
  }

  const [ state, setState ] = useMergeState(initState) 
  const [data,setData]=useState([]);

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit=(e)=>{
    e.preventDefault();
    setData([...data,state]);
  }

 
  return (
    <div className="App">
      <h1>React with Custom  Hook useMergeState</h1>
      <form onSubmit={handleSubmit}>
      <div>
        <input
           name='username'
           placeholder='Username'
           onChange={handleChange}
        />
      </div>
      <div>
        <input
           name='email'
           placeholder='Email'
           onChange={handleChange}
        />
      </div>
      <div>
        <input
           name='password'
           placeholder='Password'
           onChange={handleChange}
        />
      </div>
      <div>
         <input type="submit" value="SUBMIT"/>
      </div>
      </form>
      <div>
        {
          data.map((item)=>{
            return (
              <div key={item.username}>
              <div>{item.username}</div>
              <div>{item.email}</div>
              <div>{item.password}</div>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
