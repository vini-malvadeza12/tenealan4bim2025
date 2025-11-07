import { useState } from "react";

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
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
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

  

const enviarForms=(e)=>{
  e.preventDefault()
  console.log('Email: ${email}, Senha: ${senha}')
}

  return (
    <div style={{ padding: "20px" }}>
      <h2>Formulário</h2>
      <form onSubmit={handleSubmit}>

        

        <label>
          Nome:
          <input
            name="nome"
            placeholder="Digite seu nome"
            value={form.nome}
            onChange={handleChange}
          />
        </label>
        <br /><br />

        <label>
          Idade:
          <input
            name="idade"
            placeholder="Digite sua idade"
            value={form.idade}
            onChange={handleChange}
          />
        </label>
        <br /><br />

        <label>
          Telefone:
          <input
            name="telefone"
            placeholder="Digite seu telefone"
            value={form.telefone}
            onChange={handleChange}
          />
        </label>
        <br /><br />

        <label>
          Instagram:
          <input
            name="instagram"
            placeholder="Digite seu Instagram"
            value={form.instagram}
            onChange={handleChange}
          />
        </label>
        <br /><br />

        <label>
          GitHub:
          <input
            name="github"
            placeholder="Digite seu GitHub"
            value={form.github}
            onChange={handleChange}
          />
        </label>
        <br /><br />

        <label>
          Pensamento:
          <input
            name="pensamento"
            placeholder="Digite um pensamento"
            value={form.pensamento}
            onChange={handleChange}
          />
        </label>
        <br /><br />

        <label>
          Probleminha:
          <input
            name="probleminha"
            placeholder="Um probleminha que resolveu"
            value={form.probleminha}
            onChange={handleChange}
          />
        </label>
        <br /><br />

        <label>
          Última série:
          <input
            name="ultimaSerie"
            placeholder="Última série assistida"
            value={form.ultimaSerie}
            onChange={handleChange}
          />
        </label>
        <br /><br />

        <label>
          Último jogo:
          <input
            name="ultimoJogo"
            placeholder="Último jogo jogado"
            value={form.ultimoJogo}
            onChange={handleChange}
          />
        </label>
        <br /><br />

        <label>
          Música:
          <input
            name="musica"
            placeholder="Música favorita"
            value={form.musica}
            onChange={handleChange}
          />
        </label>
        <br /><br />

        <label>
          Gênero:
          <input
            name="genero"
            placeholder="Gênero favorito"
            value={form.genero}
            onChange={handleChange}
          />
        </label>
        <br /><br />

        <label>
          Habilidade especial:
          <input
            name="habilidadeEspecial"
            placeholder="Sua habilidade especial"
            value={form.habilidadeEspecial}
            onChange={handleChange}
          />
        </label>
        <br /><br />

        <label>
          Poder especial:
          <input
            name="poderEspecial"
            placeholder="Seu poder especial"
            value={form.poderEspecial}
            onChange={handleChange}
          />
        </label>
        <br /><br />

        <label>
          Time que torce:
          <input
            name="time"
            placeholder="Seu time"
            value={form.time}
            onChange={handleChange}
          />
        </label>
        <br /><br />

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
