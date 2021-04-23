import React from 'react';
import styles from './grid.module.css';
import Circle from './svgs/Circle';
import Cross from './svgs/Cross';

const renderSVG = svg => {
    if(svg === 'Cross') {
        return <Cross size = {60} />
    }
    else if(svg === 'Circle') {
        return <Circle size = {60} />
    }
    else{
        return null
    }

}
export default function Grid(props) {
    const divisions= props.positions.map((value,index) => {
        const isWinningIndex = props.winningIndexes.includes(index)
        return (
            <div
            className = {isWinningIndex ? styles.winner : null}
                key = {index}
                onClick = {()=> {
                    props.setPositions(index)
                }}
            >
                {renderSVG(value)}
            </div>
        )
    })
    return(
        <div className= {styles.container}>
            {divisions}
        </div>
    )
}



