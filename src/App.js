import React from 'react';
import TextField from '@mui/material/TextField';
import './App.css';
import {
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  FormHelperText,
  FormGroup,
  Checkbox,
} from '@mui/material';
import { useForm } from "react-hook-form";

const App = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <div className="App__form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>Username</div>
        <TextField
          id="outlined-basic"
          name="firstName!"
          // label="Enter username"
          placeholder='Enter username'
          variant="outlined"
          fullWidth
          {...register("firstName", { required: "First Name is required." })}
          error={Boolean(errors.firstName)}
          helperText={errors.firstName?.message}
        />
        <div>Password</div>
        <TextField
          id="outlined-basic"
          // label="Enter password"
          placeholder='Enter password'
          variant="outlined"
          fullWidth
          name="lastName"
          {...register("lastName", { required: "Your password is between 4 and 12 characters." })}
          error={Boolean(errors.lastName)}
          helperText={errors.lastName?.message}
          text={'eefefe'}
        />
        {/* <div>Your password is between 4 and 12 characters</div> */}
        <div>Inpur Text Label</div>
        <TextField
          id="outlined-basic"
          // label="E-mail"
          placeholder='Enter input Text Label'
          variant="outlined"
          fullWidth
          name="email"
          {...register("email", { required: "Error message informing me  of a problem." })}
          error={Boolean(errors.email)}
          helperText={errors.email?.message}
        />

        <FormGroup
          error={Boolean(errors.tnc)}
        >
          <FormControlLabel
            control={
              <Checkbox

                style={{ color: '#CCCCCC', }}
                name="tnc" {...register("tnc", { required: "" })} />
            }
            label="Remember me"
          />
        </FormGroup>
        <FormHelperText style={{ color: '#d32f2f', backgroundColor: 'red' }}>{errors.tnc?.message}</FormHelperText>



        {/* Radio button */}
        <FormControl error={Boolean(errors.radioSelection)} >

          <RadioGroup aria-label="radioSelection" name="radioSelection">

            <FormControlLabel
              value="female"
              control={
                <Radio {...register("radioSelection", { required: "Make a choice" })} />
              }
              label="Radio selection 1"
            />
            <FormControlLabel
              value="male"
              control={
                <Radio {...register("radioSelection", { required: "Make a choice" })} />
              }
              label="Radio selection 2"
            />
            <FormControlLabel
              value="other"
              control={
                <Radio {...register("radioSelection", { required: "Make a choice" })} />
              }
              label="Radio selection 3"
            />

          </RadioGroup>
          <FormHelperText style={{ color: '#d32f2f' }}>{errors.radioSelection?.message}</FormHelperText>
        </FormControl>


        <Button variant="contained" color="primary" type="submit" className="btns">
          Next
        </Button>
      </form>
    </div>
  )
}
export default App