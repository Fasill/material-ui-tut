import React from 'react'
// import Typography from '@material-ui/core/Typography'
import Typography from '@material-ui/core/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import AcUnitOutlinedIcon from '@mui/icons-material/AcUnitOutlined';
import SendIcon from '@mui/icons-material/Send';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
export default function Create() {
  return (
    <Container>
      <Typography
        variant = "h6"
        color="textSecondary"
        component="h2"
        gutterBottom
      >
        Create a New Note
      </Typography>
      <Button
      type='submit'
      color='secondary'
      variant='contained'
      onClick= {()=>console.log("you clicked me")}
     
      endIcon = {<KeyboardArrowRightIcon/>}
      >
        Submit
      </Button>

      {/* icons */}
      {/* <AcUnitOutlinedIcon/>
      <AcUnitOutlinedIcon color="secondary" fontSize='large'/>
      <AcUnitOutlinedIcon color="secondary" fontSize='small'/>
      <AcUnitOutlinedIcon color="action" fontSize='small'/>
      <AcUnitOutlinedIcon color="error" fontSize='small'/>
      <AcUnitOutlinedIcon color="disabled" fontSize='small'/> */}

    </Container>
  )
}