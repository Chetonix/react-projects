import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'
function App() {

  const [isLoading, setIsLoading] = useState(true);
  const [roles, setRoles ] = useState([]);
  const [value, setValue] = useState(0);

  const getData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setRoles(data);
    setIsLoading(false);
  }

  useEffect(() => {
    getData()
  }, [])

  if(isLoading) {
    return(
    <section className="section loading">
        <h1>Loading...</h1>
    </section>
    )
  }
  
  const { company, dates, duties, title } = roles[value];


  return (
    <section className="section">
      <div className='title'>
        <h2>experience</h2>
        <div className='underline'></div>
      </div>
      <div className="jobs-center">
        <div className='btn-container'>
        {roles.map((role, index) => {
          return (
            <button onClick={()=>setValue(index)} className={`job-btn ${value===index && 'active-btn'}`} key={role.id}>{role.company}</button>
          )
        })}
      </div>
      {/* Job Info */}
        <article className='job-info'>
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>
          {duties.map((duty, index) => {
              return (
                <div key={index} className="job-desc">
                  <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                  <p>{duty}</p>
                </div>
              )
            })}
        </article>
      </div>
      <button type="button" className="btn">
        more info
      </button>
    </section>
  )
}

export default App
