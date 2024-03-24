// Sobre.js
import styles from './Sobre.module.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

function Avatar({
  nome,
  curso,
  descricao
}) {
  return (
    <div className={styles.perfil}>
      <figure>
        <img className={styles.img_perfil} src="./eu.png" alt="Imagem de Home" />
      </figure>
      <div className={styles.info_perfil}>
        <div>
          <h1>{nome}</h1>
          <p>{curso}</p>
        </div>
        <div className={styles.descricao}>
          <p>{descricao}</p>
        </div>
        <div className={styles.redes}>
          <p>Entre em contato comigo:</p>
          <figure>
            <a href='https://github.com/brunartt' target='_blank'>
              <img className={styles.img_redes} src="./github.png" alt="Logo Github" />
            </a>

            <a href='https://www.linkedin.com/in/bruna-roberta-a46541285/' target='_blank'>
              <img className={styles.img_redes} src="./linkedin.png" alt="Logo LinkedIn" />
            </a>
          </figure>
        </div>
      </div>
    </div>
  );
}

function Sobre() {
  return (
    <>
      <Header />
      <Avatar
        nome="Bruna Roberta"
        curso="Sistemas para Internet - 3° Período"
        descricao="Olá! Me chamo Bruna Roberta, estudante de Sistemas para Internet na UNICAP. Estou no 3º período e estou focada em aprender e crescer no mundo da tecnologia.

Busco constantemente novos desafios para expandir meus conhecimentos e habilidades.

Estou determinada a me tornar uma profissional de destaque na área da tecnologia e estou ansiosa para as oportunidades futuras que me aguardam."
      />
      <Footer />
    </>
  )
}

export default Sobre
