import Cartao from "../components/Cartao";
import styles from '../styles/Formulario.module.css'
import Link from 'next/link'
import EntradaNumerica from "../components/EntradaNumerica";
import { useState } from "react";

export default function Formulário() {

  const [qtdePortas, setQtdePortas] = useState(4)
  const [comPresente, setCompresente] = useState(3)

  return (
    <div className={styles.formulario}>

        <div>
        <Cartao bgcolor="#c0392c">
          <h1>Monty Hall</h1>
        </Cartao>
        <Cartao>
          <EntradaNumerica text="Qtde Portas?" value={qtdePortas} onChange={novaQtde => setQtdePortas(novaQtde)} />
        </Cartao>
        </div>
        
        <div>
          <Cartao>
          <EntradaNumerica text="Porta com presente?" value={comPresente} onChange={novaQtde => setCompresente(novaQtde)} />
          </Cartao>
          <Cartao bgcolor="#28a085">
            <Link href={`/jogo/${qtdePortas}/${comPresente}`}>
              <h2 
              className={styles.link}
              style={{
              flex: "1",
              margin: "0",
              cursor: "pointer"
              }}>Iniciar</h2>
            </Link>
          </Cartao>
        </div>
    </div>
  )
}
