import './App.css';
import Header from './components/Header'
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <Header />
      <Counter value = {1}/> 
      <Counter value = {5}/>
      <Counter value = {15}/>
      <Counter value = {30}/>
    </div>
  );
}

export default App;
