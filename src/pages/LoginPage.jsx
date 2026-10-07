import { useForm } from "../hooks/useForm";
import { useFetch } from "../hooks/useFetch";

export const LoginPage = () => {
  const { formulario, handleChange } = useForm();
  const { fetchData, data, loading, error } = useFetch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetchData("http://localhost:3000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formulario),
    });
  };

  return (
    <div>
      <h1>Login</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formulario.email || ""}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formulario.password || ""}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Iniciar sesion</button>
      </form>

      {loading && <p>Cargando...</p>}
      {error && <p>{error.message}</p>}
      {data && <p>Respuesta recibida</p>}
    </div>
  );
};
