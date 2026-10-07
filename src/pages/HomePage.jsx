import { useEffect } from "react";
import { useFetch } from "../hooks/useFetch";

export const HomePage = () => {
  const { fetchData, data, loading, error } = useFetch();

  const obtenerPerfil = async () => {
    await fetchData("http://localhost:3000/api/auth/profile", {
      method: "GET",
    });
  };

  useEffect(() => {
    obtenerPerfil();
  }, []);

  return (
    <div className="p-6">
      {loading && <p>Cargando...</p>}

      {error && <p>Error al cargar el perfil</p>}

      {data && <h1 className="text-2xl font-bold">Hola, {data.first_name}</h1>}
    </div>
  );
};
