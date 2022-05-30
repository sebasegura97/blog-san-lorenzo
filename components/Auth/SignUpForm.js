import { Button, Grid, TextField, Typography } from "@mui/material";
import { createUserWithEmailAndPassword } from "firebase/auth";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { auth } from "../../firebase";

const SignUpForm = ({ toggleForm }) => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      console.log("User created", result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2} padding={6}>
        <Grid item xs={12}>
          <Typography variant="h4"> Registro </Typography>
        </Grid>
        <Grid item xs={12}>
          <Controller
            name="email"
            type="email"
            control={control}
            render={({ field }) => (
              <TextField {...field} fullWidth label="Email" />
            )}
          />
        </Grid>

        <Grid item xs={12}>
          <Controller
            name="password"
            type="password"
            control={control}
            render={({ field }) => (
              <TextField {...field} fullWidth label="Contraseña" />
            )}
          />
        </Grid>
        <Grid item xs={12} justifyContent="flex-end" display="flex" marginTop={2}>
          <Button type="submit" variant="contained">
            {" "}
            Registrarse{" "}
          </Button>
        </Grid>
        <Grid item xs={12} justifyContent="flex-end" display="flex">
          <Button variant="text" onClick={toggleForm}>
            {" "}
            Ya tengo cuenta, iniciar sesión{" "}
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default SignUpForm;
