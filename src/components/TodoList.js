import * as React from "react";

import Container from "@mui/material/Container";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Divider } from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
// icons
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import Grid from "@mui/material/Grid2";
import TextField from "@mui/material/TextField";
// Components
import Todo from "./Todo";
//  Others
import { useContext } from "react"; 
import { TodosContext } from "../context/todosContext";
import { useState } from "react";
import { v4 as idv4 } from "uuid";

// const initialTodos = [
//   {
//     id: idv4(),
//     title: "jjjgjgh",
//     details: "kdhsfhgh",
//     isCompleted: false,
//   },
//   {
//     id: idv4(),
//     title: "jjjgjgh",
//     details: "kdhsfhgh",
//     isCompleted: false,
//   },
//   {
//     id: idv4(),
//     title: "title 1",
//     details: "kdhsfhgh",
//     isCompleted: false,
//   },
// ];


export default function TodoList() {
  const {todos ,setTodos} = useContext(TodosContext)

  const [titleInput , setTitleInput]=useState("")
  // function handleCheckClick (todoId){
  // const updateTodo = todos.map((t) => {
  //   if(t.id===todoId)
  //     t.isCompleted = ! t.isCompleted ;
  //   return t;
  // });
  // setTodos(updateTodo)
  // }
  const todoJsx = todos.map((t) => {
    return (
   
        <Todo key={t.id} todo ={t}   />
    
    );
  });
  function handlAddClick(){
const newTodo = {
  id : idv4(),
  title: titleInput,
  details:"" ,
  isCompleted : false 

}
setTodos([...todos , newTodo])
setTitleInput("")
  }
  return (
    <Container maxWidth="sm">
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h2" style={{ fontWeight: "bold" }}>
            مهامي
          </Typography>
          <Divider />
          {/* Filter Buttons  */}
          <ToggleButtonGroup
            style={{ direction: "ltr", marginTop: "20px" }}
            //   value={alignment}
            exclusive
            //   onChange={handleAlignment}
            aria-label="text alignment"
          >
            <ToggleButton value="right">غير المنجز</ToggleButton>
            <ToggleButton value="center">المنجز</ToggleButton>
            <ToggleButton value="left">الكل</ToggleButton>
          </ToggleButtonGroup>

          {/* ---Filter Buttons  */}
          {/* All Todos  */}
          {todoJsx}
          {/*--- All Todos  */}
          {/* input and add button */}
          <Grid container style={{ marginTop: "20px" }} spacing={2}>
            <Grid
              size={8}
              display="flex"
              justifyContent="space-around"
              alignItems="center"
            >
              {" "}
              <TextField
                style={{ width: "100%" }}
                id="outlined-basic"
                label="عنوان المهمة"
                variant="outlined"
                value={titleInput}
                onChange={(e)=>{
                  setTitleInput(e.target.value)
                }}
              />
            </Grid>
            <Grid
              size={4}
              display="flex"
              justifyContent="space-around"
              alignItems="center"
            >
              {" "}
              <Button
                style={{ width: "100%", height: "100%" }}
                variant="contained"
                onClick={()=>{
                  handlAddClick();
                }}
              >
                {" "}
                اضافة
              </Button>
            </Grid>
          </Grid>
          {/*-- input and add button */}
        </CardContent>
      </Card>
    </Container>
  );
}
