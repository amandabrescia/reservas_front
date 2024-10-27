import styles from './CancelButton.module.css';

function CancelButton({ text, onClick }) {
    return (
        <div>
            <button className={styles.btn} type="button" onClick={onClick}>
                {text}
            </button>
        </div>
    );
}

export default CancelButton;