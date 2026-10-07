import { useNavigate } from "react-router";
import { useForm } from "../hooks/useForm";
import { useFetch } from "../hooks/useFetch";

export const LoginPage = () => {
  const { formulario, handleChange } = useForm();
  const { fetchData, data, loading, error } = useFetch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await fetchData("http://localhost:3000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formulario),
    });

    if (result) {
      localStorage.setItem("isLogged", "true");
      navigate("/home");
    }
  };

  return (
    <div className="flex justify-center p-8">
      <form onSubmit={handleSubmit} className="w-80">
        <h1 className="mb-4 text-xl">Login</h1>

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

        <button className="border px-4 py-2" type="submit">
          Iniciar sesion
        </button>

        {loading && <p>Cargando...</p>}
        {error && <p>{error.message}</p>}
        {data && <p>Respuesta recibida</p>}
      </form>
    </div>
  );
};
