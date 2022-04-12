import axios from 'axios';
import React, { useEffect ,useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css";
import './Home.css'
import './Sign_up'

const Home = async () => {
  const [user,setUser]=useState([])

  const userList = await loadUser()
    
  useEffect( async ()=> {
    alert("Successfully called")
     if(userList)
      console.log('userList>>',userList);
    
    },[userList])
 
    const loadUser = async () => {
      const result = await axios.get('http://localhost:4000/posts')
      console.log(result.data)
      return result.data;
  }
  
  const deleteUser = async (id) => {
      await axios.delete(`http://localhost:4000/posts/${id}`);
      alert("Successfully Deleted")
      loadUser() 
  }
  return (
  <>
      <table className="styled-table">
    <thead>
        <tr>
            <th scope='col'>#</th>
            <th scope='col'>Name</th>
            <th scope='col'>Email</th>
            <th scope='col'>Number</th> 
            <th scope='col'>Action</th> 
        </tr>
        </thead>
        <tbody>
          {
            user.map((element,index)=>{
              return(
                <>
                <tr className='active-row'>              
              <td>{index+1}</td>
              <td>{element.name}</td>
              <td>{element.email}</td>
              <td>{element.number}</td>
              <td>
                
                  <button className='btn btn-outline-danger ms-2' onClick={()=>deleteUser(element.id)}>Delete</button>
                
                <NavLink to={`/edit/${element.id}`}>
                  <button className='btn btn-outline-primary ms-2'>Edit</button>
                </NavLink>
              </td>              
              </tr>
              </>
            )          
            })
}
         </tbody>   
</table>
  </>
  )
};
export default Home;
