//import styles 
import './App.css';
//import EventsList comp
import EventsList from './components/EventsList';
import TodoForm from './components/ToDoForm';

function App() {

  return (

    <div className="App">

      <h1>Eventonica</h1>
      <p className='para1'>Welcome to our Events website.  Here you can find a list of upcoming events!</p>
      <p className='para2'>Please feel free to add, delete and search for events!</p>
      <EventsList />
      <TodoForm />

    </div>

  )

};

export default App
