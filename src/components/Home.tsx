import React from "react";
import { useUser } from '../context/LoginContext';

function Home() {

  const { dataUser } = useUser();

  return (
    <div>
      <h2>Contenido: {dataUser.email}</h2>
      <h2> {dataUser.password}</h2>
    </div>
  );

} export default Home;
