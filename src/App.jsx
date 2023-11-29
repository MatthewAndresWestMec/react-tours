import Tour from './components/Tour';
import { useState, useEffect } from 'react'
import './styles/App.css';
import './styles/index.css'

function App() {
  const url = 'https://course-api.com/react-tours-project'
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const  [tours,setTours] = useState([])
  const  [originalTours,setoriginalTours] = useState([])

    useEffect(() => {
        fetch(url).then((response) => {
            if (response.status >= 200 && response.status <= 299) { return response.json()} else {
                setIsLoading(false)
                setIsError(true)
                throw new Error(response.statusText)
            }
        }).then((tours) => {
          setTours(tours)
          setoriginalTours(tours)
            setIsLoading(false)
            setIsError(false)
        }).catch((error) => { console.log(error) })
    }, [])

  const removeTours = (id) => {
    let newTours = tours.filter(p => p.id !== id)
    setTours(newTours)
  }
  
  if(isLoading){
    return ( <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <h1>Loading....</h1>
        <img
          src="https://placekitten.com/800/800?image=4"
          alt="Spinning Cat"
          style={{ width: '800px', height: '800px', borderRadius: '50%', margin: '20px' }}
        />
      </div>)
}
if(isError){
    return ( <div><h1>Error....</h1>
    <img
          src="https://placekitten.com/800/800?image=2"
          alt="Spinning Cat"
          style={{ width: '800px', height: '800px', borderRadius: '50%', margin: '20px' }}
        /></div>)
}
  return (
    <main>
      <div className="me">Matthew's Tour Website</div>
    <section className='container'>
      <Tour tours={tours} remove={removeTours}/>
      <div className='buttons'>
        <button onClick={() => setTours([])}>Clear</button>
        <button onClick={() => setTours(originalTours)}>Reset</button>
      </div>
    </section>
  </main>
  );
}

export default App;
