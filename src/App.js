import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App" style={{display: "flex", direction:"rtl", justifyContent: "center" , alignItems :" center" ,background :"#607d8b" , height:"100vh"}}>
      <TodoList/>
    
    </div>
  );
}

export default App;
