import ServiceForm from '../service/ServiceForm'

import styles from './NewService.module.css'

function NewService (){
    return (
        <div className={styles.newservice_container}>
            <h1>Novo Serviço</h1>
            <p> Crie um novo serviço</p>
            <ServiceForm btnText="Criar Serviço"/>
        </div>
    )
}

export default NewService