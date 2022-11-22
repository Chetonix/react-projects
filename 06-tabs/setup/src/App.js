import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'
function App() {

  const [isLoading, setIsLoading] = useState(false);
  const [roles, setRoles ] = useState([]);
  const getData = async () => {

    setIsLoading(true);
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    setRoles(data);
    setIsLoading(false);
  }

  useEffect(() => {
    getData();
  }, []);

  if(isLoading) {
    return(
    <section className="section loading">
        <h1>Loading...</h1>
    </section>
    )
  }

  return (
    <section className="section">
      <div className='title'>
        <h2>experience</h2>
        <div className='underline'></div>
      </div>
      <div className="jobs-center">
        <div className='btn-container'>
        {roles.map(role => {
          return (
            <button className='job-btn' key={role.id}>{role.company}</button>
          )
        })}
      </div>
      <article className='job-info'>
        <h3></h3>
      </article>
      </div>
    </section>
  )
}

export default App
