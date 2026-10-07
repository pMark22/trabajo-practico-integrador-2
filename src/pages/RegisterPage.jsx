import { useForm } from "../hooks/useForm";
import { useFetch } from "../hooks/useFetch";

export const RegisterPage = () => {
  const { formulario, handleChange } = useForm();
  const { fetchData, data, loading, error } = useFetch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetchData("http://localhost:3000/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formulario),
    });
  };

  return (
    <div className="flex justify-center p-8">
      <form onSubmit={handleSubmit} className="w-80">
        <h1 className="mb-4 text-xl">Registro</h1>

        <input
          className="mb-3 w-full border p-2"
          type="text"
          name="username"
          placeholder="Username"
          value={formulario.username || ""}
          onChange={handleChange}
        />

        <input
          className="mb-3 w-full border p-2"
          type="email"
          name="email"
          placeholder="Email"
          value={formulario.email || ""}
          onChange={handleChange}
        />

        <input
          className="mb-3 w-full border p-2"
          type="password"
          name="password"
          placeholder="Password"
          value={formulario.password || ""}
          onChange={handleChange}
        />

        <input
          className="mb-3 w-full border p-2"
          type="text"
          name="first_name"
          placeholder="Nombre"
          value={formulario.first_name || ""}
          onChange={handleChange}
        />

        <input
          className="mb-3 w-full border p-2"
          type="text"
          name="last_name"
          placeholder="Apellido"
          value={formulario.last_name || ""}
          onChange={handleChange}
        />

        <button className="border px-4 py-2" type="submit">
          Registrarse
        </button>

        {loading && <p>Cargando...</p>}
        {error && <p>{error.message}</p>}
        {data && <p>Usuario registrado correctamente</p>}
      </form>
    </div>
  );
};
