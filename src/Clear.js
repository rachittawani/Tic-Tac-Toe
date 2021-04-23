import React from 'react';
import styles from './grid.module.css';

function refreshPage() {
    window.location.reload(false);
}
const Clear = () => {
    return (
        <div className = {styles.clear}>
            <button className = {styles.button} onClick={refreshPage}>Reset</button>
        </div>
    )
}

export default Clear;
