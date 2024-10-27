import styles from './Home.module.css'
import reservation from '../../img/reservation.svg'

import LinkButton from '../layout/LinkButton'

function Home (){
    return (
    <section className = {styles.home_container}>
        <h1>Bem vindo ao <span> Reservas e Agendamentos</span></h1>
        <p>Comece a gerenciar sua agenda agora mesmo!</p>
        <LinkButton to="/newservice" text="Criar Novo Serviço" />
        <img src={reservation} alt="reservas" />
        </section>
    )
}

export default Home