import { Link } from "react-router-dom";
import styles from './LinkBtn.module.css';

function linkBtn({text, to}){
    return(
        <Link className={styles.btn} to={to}>
            {text}
        </Link>
    )
}

export default linkBtn;