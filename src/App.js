import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList';
import { createTheme,ThemeProvider  } from '@mui/material/styles';
import { TodosContext } from './context/todosContext';
import { v4 as idv4 } from "uuid";
import { useState } from "react";
const theme = createTheme({
  typography:{
    fontFamily:[""]
  }
});

const initialTodos = [
  {
    id: idv4(),
    title: "  عنوان المهمة   ",
    details: "شرح توضيحي  حول المهمة",
    isCompleted: false,
  },
  // {
  //   id: idv4(),
  //   title: "jjjgjgh",
  //   details: "kdhsfhgh",
  //   isCompleted: false,
  // },
  // {
  //   id: idv4(),
  //   title: "title 1",
  //   details: "kdhsfhgh",
  //   isCompleted: false,
  // },
];

function App() {
    const [todos , setTodos]= useState(initialTodos)
  return (
    <ThemeProvider  theme={theme}>
    <div className="App" style={{display: "flex", direction:"rtl", justifyContent: "center" , alignItems :" center" ,background :"#607d8b" , height:"100vh"}}>
      <TodosContext.Provider value={{todos , setTodos}}>  <TodoList/></TodosContext.Provider>
    
    
    </div>
    </ThemeProvider>
  );
}

export default App;
