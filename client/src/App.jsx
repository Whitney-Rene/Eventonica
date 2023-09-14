//import styles 
import './App.css';
//import EventsList comp
import EventsList from './components/eventsList';

function App() {

  return (

    <div className="App">

      <h1>Eventonica</h1>
      <p>Welcome to our Events website.  Here you can find a list of upcoming events!  Please feel free to add, delete and update events!</p>
      <EventsList />
      
    </div>

  )

};

export default App
