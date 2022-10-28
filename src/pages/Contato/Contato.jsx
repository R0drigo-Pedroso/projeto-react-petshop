/* Estilização */
import estilo from "./Contato.module.css";

/* CSS MUI */
import { TextField, Button } from "@mui/material";

/* Componentes */
import Caixa from "../../components/Caixa/Caixa";
import { useState } from "react";

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

  return (
    <section>
      <h2 className={estilo.titulo_secao}>Contato</h2>

      <Caixa>
        <form className={estilo.formulario} method="post">
          <div>
            <TextField
              onChange={inputNome}
              type="text"
              label="Nome"
              variant="outlined"
              fullWidth
              required
              helperText="Nome Obrigatório"
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
              helperText="E-mail Obrigatório"
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
              helperText="Fale conosco"
              multiline
              rows={4}
              defaultValue="Default Value"
            />
          </div>

          <div>
            <Button type="submit" variant="contained">
              Enviar
            </Button>
          </div>
        </form>
      </Caixa>
    </section>
  );
};

export default Contato;
