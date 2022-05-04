import Contraseñas from "../component/Contraseñas.js";

function General() {
  const names = [
    {
      imagen: "/passwords.png",
      titulo: "Contraseña",
      descripcion:
        "Este articulo será siempre actualizado, mostrando la motivación y el proceso de este proyecto.",
    },

    {
      imagen: "/passwords.png",
      titulo: "Contraseña2",
      descripcion:
        "2222222 Este articulo será siempre actualizado, mostrando la motivación y el proceso de este proyecto.",
    },

    {
      imagen: "/passwords.png",
      titulo: "Contraseña3",
      descripcion:
        "33333333 Este articulo será siempre actualizado, mostrando la motivación y el proceso de este proyecto.",
    },
    {
      imagen: "/passwords.png",
      titulo: "Contraseña3",
      descripcion:
        "33333333 Este articulo será siempre actualizado, mostrando la motivación y el proceso de este proyecto.",
    },
  ];

  return (
    <div>
      {names.map((name) => (
        <Contraseñas titulo={name.titulo} imagen={name.imagen} descripcion={name.descripcion} />
      ))}
    </div>
  );
}

export default General;
