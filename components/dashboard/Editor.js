import { useEffect, useState } from "react";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import dynamic from "next/dynamic";
import { collection, addDoc, Timestamp, setDoc, doc } from "firebase/firestore";

import { database } from "../../firebase";
import { Controller, useForm } from "react-hook-form";

const MdEditor = dynamic(() => import("@uiw/react-md-editor"), { ssr: false });

function Editor() {
  const [loading, setLoading] = useState(false);
  const [mdContet, setMdContent] = useState("**Hello world!!!**");

  const { control, handleSubmit, watch, setValue } = useForm({
    defaultValues: {
      title: "",
      shortDescription: "",
      slug: "",
      cardImage: "",
    },
  });
  const titleObserver = watch("title");

  async function onSubmit(formData) {
    setLoading(true);

    const post = {
      content: mdContet,
      active: false,
      // slug,
      ...formData,
    };

    try {
      const result = await addDoc(collection(database, "posts"), post);
      console.log("post creado", result);
    } catch (error) {
      console.log(error);
      alert(
        "Ha ocurrido un error al crear el articulo, para mas info ver consola :)"
      );
    }
    setLoading(false);
  }

  useEffect(() => {
    setValue(
      "slug",
      titleObserver.normalize().toLowerCase().replaceAll(" ", "-")
    );
  }, [titleObserver]);

  return (
    <Box px={8}>
      <Typography variant="h3" my={4} fontWeight={800}>
        {" "}
        Nuevo articulo{" "}
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={8}>
            <Controller
              name="title"
              control={control}
              render={({ field }) => (
                <TextField {...field} fullWidth label="Titulo" type="text" />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Controller
              name="slug"
              control={control}
              render={({ field }) => (
                <TextField {...field} fullWidth label="slug" type="text" />
              )}
            />
          </Grid>

          <Grid item xs={12}>
            <Controller
              name="shortDescription"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  label="Descripcion"
                  type="text"
                />
              )}
            />
          </Grid>

          <Grid item xs={12}>
            <Controller
              name="cardImage"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  label="Card image"
                  type="text"
                />
              )}
            />
          </Grid>

          <Grid item xs={12}>
            <MdEditor value={mdContet} onChange={setMdContent} />
          </Grid>

          <Grid item xs={12} display="flex" justifyContent="flex-end">
            <Button
              variant="contained"
              type="submit"
              // onClick={handlePublishButton}
              disabled={loading}
            >
              {" "}
              Publicar{" "}
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
}

export default Editor;
