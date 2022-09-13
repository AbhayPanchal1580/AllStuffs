import './App.css';
import  CarList from './components/CarList';
import  Posts from './components/Posts';


function App() {
  return (
    <div className="App">
     <CarList Car={App}/>
     {/* <Posts posts={Posts}/> */}
    </div>
  );
}

export default App;
