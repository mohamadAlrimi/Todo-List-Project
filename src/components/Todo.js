import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Divider } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import Grid from '@mui/material/Grid2';
// Icons 
import CheckIcon from '@mui/icons-material/Check';
import IconButton from '@mui/material/IconButton';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { useContext } from "react";
import { TodosContext } from "../context/todosContext";

export default function Todo({todo,handleCkeck}){
  const {todos,setTodos  } = useContext(TodosContext);
  function handleCheckClick (){
    const updateTodo = todos.map((t) => {
      if(t.id=== todo.id)
        t.isCompleted = ! t.isCompleted ;
      return t;
    });
    setTodos(updateTodo)
  }
    return((<> <Card className="todoCard" sx={{ minWidth: 275  ,background:"#283593" ,color:"white" ,marginTop : 5}}>
        <CardContent>
        <Grid container spacing={2}>
        <Grid size={8} >
        <Typography variant="h5"  sx={{textAlign:"right"}}
          >
         {todo.title}
          </Typography>
        <Typography variant="h6"  sx={{textAlign:"right"}}
          >
     {todo.details}
          </Typography>
          
        </Grid>
        {/* Action Button  */}
        <Grid size={4}  display="flex" justifyContent="space-around" alignItems="center">


          {/* Check icon button  */}
        <IconButton onClick={()=>{
          handleCheckClick();
        }} className="iconButton" style={{color: todo.isCompleted ?"white" :"#8bc34a" , background: todo.isCompleted ?"#8bc34a" :"white", border: "solid #8bc34a 3px"}}>
        < CheckIcon/>
      </IconButton>
        {/* Check icon button  */}
        <IconButton  className="iconButton" style={{color:"#1769aa", background:"white", border: "solid #1769aa 3px"}}>
        < ModeEditOutlineOutlinedIcon/>
      </IconButton>
        <IconButton  className="iconButton" style={{color:"#b23c17", background:"white", border: "solid #b23c17 3px"}}>
        < DeleteOutlineOutlinedIcon/>
      </IconButton>
        </Grid>
            {/* Action Button  */}
      </Grid>
          
        </CardContent>
       
      </Card></>))
}