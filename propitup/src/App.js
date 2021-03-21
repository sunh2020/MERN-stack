import logo from './logo.svg';
import './App.css';

import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      const newUser = { username, email, password };
      <PersonCard firstName="Doe" lastName="Jane" age={45} hairColor="Black"/>
     
      <PersonCard firstName="John" lastName="Smith" age={88} hairColor="Brown" /> 

      
      <PersonCard firstName="Fillmore" lastName="Millard" age={50} hairColor="Brown"/>
     
      <PersonCard firstName="Smith" lastName="Maria" age={62} hairColor="Brown" />
      
    </div>
  )
}

export default App;
