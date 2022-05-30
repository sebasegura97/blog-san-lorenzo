import Card from "../component/Card.js";

export default function ListCard(props) {
  return (
    <>
      {props.listado.map((name) => (
        <Card
          key= {name.id}
          titulo={name.titulo}
          imagen={name.imagen}
          descripcion={name.descripcion}
        />
      ))}
    </>
  );
}
