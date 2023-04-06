import { Box, Button, Grid, Stack, styled, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import theme from '../../../../../theme';
import emailjs from '@emailjs/browser';

const FormInput = styled(TextField)({
    marginBottom:8,
    display: "block",
    fontWeight:"bold",
    color:'red',
})

const From = () => {
  const [name, setName] = useState(null);
  const [nameError, setNameError] = useState(false);
  const [subject, setSubject] = useState(null);
  const [subjectError, setSubjectError] = useState(false);
  const [email, setEmail] = useState(null);
  const [emailError, setEmailError] = useState(false);
  const [message, setMessage] = useState(null);
  const [messageError, setMessageError] = useState(false);
 

  const handleSubmit = (e) =>{
    e.preventDefault();
    setNameError(false);
    setSubjectError(false);
    setEmailError(false);
    setMessageError(false);

    if(name === null){
      setNameError(true);
    }
    if(email === null){
      setEmailError(true);
    }
    if(subject === null){
      setSubjectError(true);
    }
    if(message === null){
      setMessageError(true);
    }

    if(name && email && subject && message){
      emailjs.send("service_mq82qwp","template_17nlssi",{from_name:name, to_name:"ugyen", message:message, reply_to:email,},'F05NDeARLrmBPp45o').then((response) => {
        alert("Message has been sent!!!");
        window.location.reload(false)
      })
      .catch((err) => {
        alert("Message has not been sent!!!");
        window.location.reload(false)
      });
    }
  }
  

  return (
    <Box width={"100%"}>
    <Typography
      textAlign={"start"} variant='h5' fontWeight={"bold"} marginTop="10px" marginBottom={"20px"}
    >
      How can I <span style={{color:theme.palette.primary.main}}>Help you?</span>
    </Typography>

    <form noValidate autoComplete='off' onSubmit={handleSubmit}>
      <Grid container direction={"row"} spacing={2} sx={{justifyContent:"space-between", alignItems:"start"}}>
        <Grid item xs={12} md={6}>
            <Stack direction={"column"}>
                <FormInput
                    onChange={(e)=> setName(e.target.value)}
                    label="Full Name"
                    variant='outlined'
                    fullWidth
                    required
                    error = {nameError}
                />

                <FormInput
                    onChange={(e)=> setEmail(e.target.value)}
                    label="Email Address"
                    variant='outlined'
                    fullWidth
                    required
                    error = {emailError}
                />

                <FormInput
                    onChange={(e)=>setSubject(e.target.value)}
                    label="Subject"
                    variant='outlined'
                    fullWidth
                    required
                    error = {subjectError}
                />
            </Stack>
        </Grid>
        <Grid item xs={12} md={6} height={"100%"}>
            <FormInput
                onChange={(e)=>setMessage(e.target.value)}
                label="Message"
                variant='outlined'
                fullWidth
                required
                multiline
                rows={6}
                error = {messageError}
            />
        </Grid>
       
      </Grid>
    

      <Button
        sx={{background:theme.palette.primary.main, color:"white", borderRadius:"50px", marginTop:"30px", padding:"10px 20px", fontWeight:"bold" }}
        variant='contained'
        type='submit'
      >
        Send Message
      </Button>

    </form>


  </Box>
  )
}

export default From