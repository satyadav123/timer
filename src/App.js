
import logo from './logo.svg';
import './App.css';
import Timer from './component/time';

function App() {
  return (
    <div className="App">
      <Timer start="0" end="15"/>
    </div>
  );
}

export default App;