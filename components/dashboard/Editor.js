import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import dynamic from "next/dynamic";
import { collection, addDoc, Timestamp, setDoc, doc } from "firebase/firestore";

import { database } from "../../firebase";
import { async } from "@firebase/util";

const MdEditor = dynamic(() => import("@uiw/react-md-editor"), { ssr: false });

function Editor() {
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState("**Hello world!!!**");

 async function handlePublishButton() {
    setLoading(true);
    const data = {
      content: value,
      active: false,
    };

    try {
      await setDoc(doc(database, "cities", "new-city-id"), data);
    } catch (error) {
      console.log(error);
      alert(
        "Ha ocurrido un error al crear el articulo, para mas info ver consola :)"
      );
    }
    setLoading(false);
  };

  return (
    <Box px={8}>
      <Typography variant="h3" my={4} fontWeight={800}>
        {" "}
        Nuevo articulo{" "}
      </Typography>
      <MdEditor value={value} onChange={setValue} />
      <Box display="flex" justifyContent="end" mt={4}>
        <Button
          variant="contained"
          onClick={handlePublishButton}
          disabled={loading}
        >
          {" "}
          Publicar{" "}
        </Button>
      </Box>
    </Box>
  );
}

export default Editor;
