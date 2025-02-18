import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Divider } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import Grid from "@mui/material/Grid2";
// Icons
import CheckIcon from "@mui/icons-material/Check";
import IconButton from "@mui/material/IconButton";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { useContext, useState } from "react";
import { TodosContext } from "../context/TodosContext";
// Dialog
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";

export default function Todo({ todo, handleCkeck }) {
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [showUpdateDialog, setShowUpdateDialog] = useState(false);
  const [updatedTodo ,setUpdatedTodo]=useState({title :todo.title,details :todo.details })
  const { todos, setTodos } = useContext(TodosContext);
  // EVENTS HANDLERS
  function handleCheckClick() {
    const updateTodo = todos.map((t) => {
      if (t.id === todo.id) t.isCompleted = !t.isCompleted;
      return t;
    });
    setTodos(updateTodo);
    localStorage.setItem("todos",JSON.stringify(updateTodo))
  }
  function handleDeleteClick() {
    setShowDeleteDialog(true);
  }
  function handleUpdateClick() {
    setShowUpdateDialog(true);
  }
  function handleDeleteDialogClose() {
    setShowDeleteDialog(false);
  }
  function handleUpdateClose() {
    setShowUpdateDialog(false);
  }
  function handleDeleteConfirm() {
    const updatedTodos = todos.filter((t) => {
      return t.id !== todo.id;
    });
    setTodos(updatedTodos);
    localStorage.setItem("todos",JSON.stringify(updatedTodos))
  }
  function handleUpdateConfirm() {
   const updatedTodos= todos.map((t)=>{
    if(t.id === todo.id){
      return{...t, title:updatedTodo.title , details : updatedTodo.details}
    } else {
      return t
    }
   }) 
   setTodos(updatedTodos)
   setShowUpdateDialog(false)
   localStorage.setItem("todos",JSON.stringify(updatedTodos))
  }
  // ----EVENTS HANDLERS

  return (
    <>
      {/* Delete dialog  */}
      <Dialog
        style={{ direction: "rtl" }}
        open={showDeleteDialog}
        onClose={handleDeleteDialogClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          هل أنت متأكد انك تريد حذف هذه المهمة؟{" "}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            لا يمكن التراجع عن الحذف بعد اتمام حذف المهمة
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteDialogClose}>اغلاق</Button>
          <Button autoFocus onClick={handleDeleteConfirm}>
            نعم . قم بالحذف
          </Button>
        </DialogActions>
      </Dialog>
      {/* -----Delete dialog  */}
      {/* Udata Dailog  */}
      <Dialog
        style={{ direction: "rtl" }}
        open={showUpdateDialog}
        onClose={handleUpdateClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">تعديل مهمة </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="عنوان المهمة"
            fullWidth
            variant="standard"
            value={updatedTodo.title}
            onChange={(e)=>{
              setUpdatedTodo({...updatedTodo , title : e.target.value})
            }}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label=" التفاصيل"
            fullWidth
            variant="standard"
            value={updatedTodo.details}
            onChange={(e)=>{
              setUpdatedTodo({...updatedTodo , details : e.target.value})
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleUpdateClose}>اغلاق</Button>
          <Button autoFocus onClick={handleUpdateConfirm}>
            تعديل
          </Button>
        </DialogActions>
      </Dialog>
      {/* -----Udata Dailog  */}

      <Card
        className="todoCard"
        sx={{
          minWidth: 275,
          background: "#283593",
          color: "white",
          marginTop: 5,
        }}
      >
        <CardContent>
          <Grid container spacing={2}>
            <Grid size={8}>
              <Typography variant="h5" sx={{ textAlign: "right" }}>
                {todo.title}
              </Typography>
              <Typography variant="h6" sx={{ textAlign: "right" }}>
                {todo.details}
              </Typography>
            </Grid>
            {/* Action Button  */}
            <Grid
              size={4}
              display="flex"
              justifyContent="space-around"
              alignItems="center"
            >
              {/* Check icon button  */}
              <IconButton
                onClick={() => {
                  handleCheckClick( );
                }}
                className="iconButton"
                style={{
                  color: todo.isCompleted ? "white" : "#8bc34a",
                  background: todo.isCompleted ? "#8bc34a" : "white",
                  border: "solid #8bc34a 3px",
                }}
              >
                <CheckIcon />
              </IconButton>
              {/* Check icon button  */}
               {/* UPDATE BUTTON  */}
              <IconButton
              onClick={handleUpdateClick}
                className="iconButton"
                style={{
                  color: "#1769aa",
                  background: "white",
                  border: "solid #1769aa 3px",
                }}
              >
                <ModeEditOutlineOutlinedIcon />
              </IconButton>
              {/* ====UPDATE BUTTON  */}
              {/* Delete dialog  */}
              <IconButton
                onClick={handleDeleteClick}
                className="iconButton"
                style={{
                  color: "#b23c17",
                  background: "white",
                  border: "solid #b23c17 3px",
                }}
              >
                <DeleteOutlineOutlinedIcon   />
              </IconButton>
              {/* -----Delete dialog  */}
            </Grid>
            {/* Action Button  */}
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}