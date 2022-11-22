import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'


function App() {

  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const getData = async () => {
    try{
      setIsLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setTours(data);
      setIsLoading(false);
    }catch(error) {
      console.log(error);
      setIsLoading(false);
    }
  }

  useEffect(()=> {
    getData();
  }, []);

  function removeTour(id) {
    const newTours = tours.filter((tour) => tour.id!==id);
    setTours(newTours);
  }

  if(isLoading) {
      return <Loading />
  }
  
  if(tours.length === 0) {
    return (
      <div className="title">
        <h2>no tours left</h2>
        <button className="btn" onClick={()=> getData()}>refresh</button>
      </div>
    )
  }

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour}/>
    </main>
  )

    
}

export default App
