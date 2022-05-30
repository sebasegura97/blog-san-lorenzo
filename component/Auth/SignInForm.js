import { Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import useAuthContext from "../../hooks/useAuthContext";
import useSignIn from "../../hooks/useSignIn";

const SignInForm = ({ toggleForm }) => {
  const { toggleAuthDialog } = useAuthContext();

  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const { loginWithEmailAndPassword } = useSignIn();

  const onSubmit = async (data) => {
    try {
      const result = await loginWithEmailAndPassword(data.email, data.password);
      if (result.success) {
        console.log('sucessful sign in', result)
        toggleAuthDialog();
        window.location.reload()
      } else {
        alert("Ha ocurrido un error : " + result.error);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2} padding={6}>
        <Grid item xs={12}>
          <Typography variant="h4"> Iniciar Sesion </Typography>
        </Grid>
        <Grid item xs={12}>
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <TextField {...field} fullWidth label="Email" type="email" />
            )}
          />
        </Grid>

        <Grid item xs={12}>
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                label="Contraseña"
                type="password"
              />
            )}
          />
        </Grid>
        <Grid
          item
          xs={12}
          justifyContent="flex-end"
          display="flex"
          marginTop={2}
        >
          <Button type="submit" variant="contained">
            {" "}
            Ingresar{" "}
          </Button>
        </Grid>
        <Grid item xs={12} justifyContent="flex-end" display="flex">
          <Button variant="text" onClick={toggleForm}>
            {" "}
            No tengo cuenta, registrarme{" "}
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default SignInForm;
