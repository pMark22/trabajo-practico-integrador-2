import { useState } from "react";

export const useForm = () => {
  const [formulario, setFormulario] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    //prev porque el nuevo estado depende del estado anterior
    setFormulario((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return {
    formulario,
    handleChange,
  };
};
