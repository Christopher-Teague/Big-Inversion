import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard firstName="Egon" lastName="Spengler" age={ 27 } hairColor="brown" /> 
      <PersonCard firstName="Peter" lastName="Venkman" age={ 32 } hairColor="black" /> 
      <PersonCard firstName="Ray" lastName="Stantz" age={ 31 } hairColor="brown" /> 
      <PersonCard firstName="Winston" lastName="Zeddemore" age={ 29 } hairColor="black" /> 
    </div>
  );
}

export default App;
