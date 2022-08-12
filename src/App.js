import logo from './logo.svg';
import './App.css';
import Counter from './component/Counter';

//import message from './message'; 
// import Welcome from './component/Welcome';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      
      {/* <message/> */}
       
        {/* <Welcome/> */}

        <Counter/>
  
      </header>
    </div>
  );
}

export default App;
