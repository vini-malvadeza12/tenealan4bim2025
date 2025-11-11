import { useEffect, useState } from "react";

export default function FormularioSimples() {
  const [form, setForm] = useState({
    nome: "",
    idade: "",
    telefone: "",
    instagram: "",
    github: "",
    pensamento: "",
    probleminha: "",
    ultimaSerie: "",
    ultimoJogo: "",
    musica: "",
    genero: "",
    habilidadeEspecial: "",
    poderEspecial: "",
    time: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Dados do formulário:", form);
    alert("Formulário enviado! Veja no console (F12).");
  }

  useEffect(() => {
    fetch("https://www.api.alanleiser.com/")
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.log("error"));
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",  
        alignItems: "center",      
        height: "100vh",            
        backgroundColor: "#f4f4f4", 
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",  
          alignItems: "center",     
          justifyContent: "center",
          padding: "30px",
          backgroundColor: "#fff",
          borderRadius: "15px",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
          width: "400px",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Formulário</h2>
        <form
          onSubmit={handleSubmit}
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {Object.keys(form).map((campo) => (
            <div key={campo} style={{ marginBottom: "12px", width: "100%" }}>
              <label
                style={{
                  display: "block",
                  marginBottom: "5px",
                  fontWeight: "bold",
                  fontSize: "14px",
                }}
              >
                {campo.charAt(0).toUpperCase() + campo.slice(1)}:
              </label>
              <input
                name={campo}
                placeholder={`Digite seu ${campo}`}
                value={form[campo]}
                onChange={handleChange}
                style={{
                  width: "100%",
                  padding: "8px",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                  outline: "none",
                  transition: "0.2s",
                }}
                onFocus={(e) =>
                  (e.target.style.border = "1px solid #007bff")
                }
                onBlur={(e) =>
                  (e.target.style.border = "1px solid #ccc")
                }
              />
            </div>
          ))}
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "10px",
              backgroundColor: "#007bff",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontWeight: "bold",
              marginTop: "10px",
            }}
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}
