import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList';
import { createTheme,ThemeProvider  } from '@mui/material/styles';
const theme = createTheme({
  typography:{
    fontFamily:["Alexandria"]
  }
});

function App() {
  return (
    <ThemeProvider  theme={theme}>
    <div className="App" style={{display: "flex", direction:"rtl", justifyContent: "center" , alignItems :" center" ,background :"#607d8b" , height:"100vh"}}>
      <TodoList/>
    
    </div>
    </ThemeProvider>
  );
}

export default App;
