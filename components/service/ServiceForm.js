import Input from '../form/Input';
import Select from '../form/Select';
import SubmitButton from '../form/SubmitButton';
import CancelButton from '../form/CancelButton';
import styles from './ServiceForm.module.css';

function ServiceForm({ btnText, onCancel }) {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Criar Serviço</h1>
            <form className={styles.form}>
                <Input 
                    type="number"
                    text="Valor do Serviço"
                    name="preco"
                    placeholder="Insira o valor do Serviço" 
                />
                <Input 
                    type="text"
                    text="Nome do Serviço"
                    name="name"
                    placeholder="Insira o nome do Serviço" 
                />
                <Select name="category_id" text="Selecione a categoria" />

                <div className={styles.buttonGroup}>
                    <CancelButton text="Cancelar" onClick={onCancel} />
                    <SubmitButton text={btnText} />
                </div>
               
            </form>
        </div>
    );
}

export default ServiceForm;