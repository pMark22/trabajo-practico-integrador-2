import { useForm } from "../hooks/useForm";
import { useFetch } from "../hooks/useFetch";

export const RegisterPage = () => {
  const { formulario, handleChange } = useForm();
  const { fetchData, data, loading, error } = useFetch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(formulario);

    await fetchData("http://localhost:3000/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formulario),
    });
  };

  return (
    <div>
      <h1>Register</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={formulario.username || ""}
            onChange={handleChange}
          />
        </div>

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

        <div>
          <label>Nombre</label>
          <input
            type="text"
            name="first_name"
            value={formulario.first_name || ""}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Apellido</label>
          <input
            type="text"
            name="last_name"
            value={formulario.last_name || ""}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Registrarse</button>
      </form>

      {loading && <p>Cargando...</p>}
      {error && <p>{error.message}</p>}
      {data && <p>Usuario registrado correctamente</p>}
    </div>
  );
};
