import * as React from "react";

import Container from "@mui/material/Container";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Divider } from "@mui/material";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
// icons
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
export default function TodoList() {
  return (
    <Container maxWidth="sm">
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h2" 
          >
            مهامي
          </Typography>
          <Divider/>
          {/* Filter Buttons  */}
          <ToggleButtonGroup
          style={{direction:"ltr" ,marginTop:"20px"}}
    //   value={alignment}
      exclusive
    //   onChange={handleAlignment}
      aria-label="text alignment"
    >
      
     
      <ToggleButton value="right">
      غير المنجز
      </ToggleButton>
      <ToggleButton value="center" >
     المنجز
      </ToggleButton>
      <ToggleButton value="left" >
       الكل
      </ToggleButton>
      
      
    </ToggleButtonGroup>
          {/* Filter Buttons  */}
          
         
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Container>
  );
}
