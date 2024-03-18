import LinkBtn from "../layout/LinkBtn"
import Savings from "../../img/savings.svg"
import styles from "./Home.module.css"

function Home(){
    return(
        <section className={styles.mainSection}>
            <h1>Bem-vindo ddd ao <span>Costs</span></h1>
            <p>Comece a gerenciar os seus projetos agora mesmo!</p>
            <LinkBtn text ="Criar Projeto" to="/newproject"/>
            <img src={Savings} alt="Costs"/>
        </section>
    )
}

export default Home