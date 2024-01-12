import React from 'react'
// import Typography from '@material-ui/core/Typography'
import Typography from '@material-ui/core/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';


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
      >
        Submit
      </Button>

    </Container>
  )
}