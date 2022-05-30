import Contraseñas from "./Contraseñas";

function General(props) {
  return (
    <>
      {props.listado.map((name) => (
        <Contraseñas
          key= {name.id}
          titulo={name.titulo}
          imagen={name.imagen}
          descripcion={name.descripcion}
        />
      ))}
    </>
  );
}

export default General;