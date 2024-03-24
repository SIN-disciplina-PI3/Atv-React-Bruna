import Header from '../../components/Header';
import Footer from '../../components/Footer';
import styles from './ODS.module.css'

function ODS() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.ods}>
          <div>
            <p>Objetivo de Desenvolvimento Sustentável</p>
            <div className='titulo'>
              
              <h1 className={styles.texto_titulo}>
              <span>8</span><br/>
              Energia Acessível <br />
                e Limpa
              </h1>
            </div>
            <p>Garantir acesso à energia barata, confiável, <br />
             sustentável e renovável para todos</p>
          </div>
          <div>
            <img className={styles.img_ods} src="./energiasolar.png" alt="Imagem" /> 
          </div>
        </div>

        <div className={styles.objetivo}>
          <h2>Objetivo 7. Assegurar o acesso confiável, sustentável, moderno e a preço acessível à energia para todas e todos</h2>
          <ol>
            <li>
            Até 2030, assegurar o acesso universal, confiável, moderno e a preços acessíveis a serviços de energia
            </li>
            <li>
            Até 2030, aumentar substancialmente a participação de energias renováveis na matriz energética global
            </li>
            <li>
            Até 2030, dobrar a taxa global de melhoria da eficiência energética
            </li>
            <li>Até 2030, expandir a infraestrutura e modernizar a tecnologia para o fornecimento de serviços de energia modernos e sustentáveis para todos nos países em desenvolvimento, particularmente nos países menos desenvolvidos, nos pequenos Estados insulares em desenvolvimento e nos países em desenvolvimento sem litoral, de acordo com seus respectivos programas de apoio
            </li>
            <li>
              Até 2030, alcançar o emprego pleno e produtivo e trabalho decente para todas as mulheres e homens,
              inclusive para os jovens e as pessoas com deficiência, e remuneração igual para trabalho de igual valor
            </li>
          </ol>

          <img className={styles.banner_ods} src="../../../public/banner-default.png" alt="banner" />

        </div>




      </div>
      <Footer />
    </>
  );
}

export default ODS;
