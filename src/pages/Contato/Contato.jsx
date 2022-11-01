/* Estilização */
import estilo from "./Contato.module.css";

/* import Api */
import servidorApi from "../../API/servidor-api";

/* CSS MUI */
import { TextField, Button } from "@mui/material";

/* Componentes */
import Caixa from "../../components/Caixa/Caixa";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const Contato = () => {
  /* Eventos/Função para captura da digitação nos campos */
  const inputNome = (event) => {
    setNome(event.target.value);
  };

  const inputEmail = (event) => {
    setEmail(event.target.value);
  };

  const inputMensagem = (event) => {
    setMensagem(event.target.value);
  };

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  /* Hook necessário para criar uma navegação/redirecionamento manualmente (ou seja, sem depender dos routes) */
  let history = useHistory();

  const enviarMensagem = async (event) => {
    event.preventDefault();

    const opcoes = {
      method: "POST",
      body: JSON.stringify({ nome, email, mensagem }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    };

    /* Script para envio dos dados para a API */
    try {
      await fetch(`${servidorApi}/contatos`, opcoes);
      alert("Dados enviado com sucesso!");
      history.push("/");
    } catch (error) {
      console.log("Erro ao enviar" + error.mensage);
    }

    /* Limpar campos */
    setNome("");
    setEmail("");
    setMensagem("");
  };

  //let desabilitado = nome ==="" || email ==="" || mensagem==="";

  /* Tootle do botão: caso qualquer um das variáveis seja undefined, desabilitado se manterá true e com isso o botão ficará desabilitado.
  
  Quando todas deixarem de ser undefined, desabilitado se tornará false e com isso o batão será habilitado.
  */
  let desabilitado = !nome || !email || !mensagem;

  return (
    <section>
      <h2 className={estilo.titulo_secao}>Contato</h2>

      <Caixa>
        <form
          onSubmit={enviarMensagem}
          className={estilo.formulario}
          method="POST"
        >
          <div>
            <TextField
              onChange={inputNome}
              type="text"
              label="Nome"
              variant="outlined"
              fullWidth
              required
              helperText={!nome ? "Você deve digitar o nome" : ""}
            />
          </div>

          <div>
            <TextField
              onChange={inputEmail}
              type="Email"
              label="E-mail"
              variant="outlined"
              fullWidth
              required
              helperText={!email ? "Informe um e-mail de contato" : ""}
            />
          </div>

          <div>
            <TextField
              onChange={inputMensagem}
              type="text"
              label="Mensagem"
              variant="outlined"
              fullWidth
              required
              helperText={!mensagem ? "Digite sua mensagem" : ""}
              multiline
              rows={4}
            />
          </div>

          <div>
            <Button type="submit" variant="contained" disabled={desabilitado}>
              Enviar Mensagem
            </Button>
          </div>
        </form>
      </Caixa>
    </section>
  );
};

export default Contato;
