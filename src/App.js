import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import RegistrationForm from './components/registrationform';
function App() {
  return (
    <div className="App">
    <h1>BYJUS LEARNING APP</h1>
    <p>
    <a href="https://byjusexamprep.com/">CLICK TO OPEN(current tab)</a></p>
    <p>
    <a href="https://byjus.com/learn/account/login " target='blank'>CLICK TO OPEN (newtab)</a>
    <h2>Start To Learning</h2>
    </p>
      <Header/>
      <RegistrationForm/> 
    </div>
  );
}

export default App;
