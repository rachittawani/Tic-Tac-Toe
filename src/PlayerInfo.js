import React from 'react';
import styles from './grid.module.css'; 

export default function PlayerInfo(props) {
    const element = props.winner ? <h1 className = {styles.win}>Winner: {props.winner}</h1> : <h2 className = {styles.player}>Turn: {props.turn}</h2>
    return element
}