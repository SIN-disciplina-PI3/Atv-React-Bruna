import Header from '../../components/Header'
import Footer from '../../components/Footer'
import styles from './Home.module.css'
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <Header />
      <section className={styles.container}>
        <div className={styles.apresentacao}>
          <p>
            <span>Energia Acessível e Limpa </span> <br />
            Potencializando Vidas com  <br></br>Energia Limpa e Acessível
          </p>
          <Link to="/ods">
            <button className={styles.btn}>
              Explore Agora
            </button>
          </Link>
        </div>
        <figure>
          <img className={styles.img_home} src="./luz.png" alt="Imagem de Home" />
        </figure>
      </section>
      <Footer />

    </>
  );
}

export default Home
