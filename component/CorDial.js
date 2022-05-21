

export default function CorDial() {

  /* const style= () => {
    return { 
      container: {
      display: "flex",
      paddingLeft: "10px"
      },
      corazon: {
        display: "flex",
        marginRight: "27px"
      },
      image: {
        margin: "16px 6px 0 0",
        width: "13px",
        height: "13.33px"
      },
      parrafo: {
        fontSize: "12px",
        lineHeight: "15px",
        margin: "16px 0px 0 0",
        color: "#07C5DF",
        fontWeight: "700"
      },
  
      parrafo: {
        fontSize: "12px",
        lineHeight: "15px",
        margin: "16px 0 0 0",
        color: "#07C5DF",
        fontWeight: "700"
      }
  
    }
  } */
  

    const style = { 
    container: {
    display: "flex",
    paddingLeft: "10px"
    },
    corazon: {
      display: "flex",
      marginRight: "27px"
    },
    image: {
      margin: "16px 12px 0 0",
      width: "13px",
      height: "13.33px"
    },
    parrafo: {
      fontSize: "12px",
      lineHeight: "15px",
      margin: "16px 0px 0 0",
      color: "#07C5DF",
      fontWeight: "700"
    },
    parrafo: {
      fontSize: "12px",
      lineHeight: "15px",
      margin: "16px 0 0 0",
      color: "#07C5DF",
      fontWeight: "700"
    }
  }

  return (
    <>
        <div style= {style.container}>
            <div style= {style.corazon}>
                <img style= {style.image} src="corazon.svg" alt="corazon"/>
                <p style= {style.parrafo}>12</p>
            </div>
            <div style= {style.corazon}>
                <img style= {style.image} src="dialogo.svg" alt="dialogo"/>
                <p style= {style.parrafo}>20</p>
            </div>
        </div>
    </>
  );
}
