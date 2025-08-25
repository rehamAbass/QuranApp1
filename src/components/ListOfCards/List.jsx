import './List.css'
import React from 'react'
import Card from '../Card/Card'
import '../../App.css'
const GreenColors = [
    'rgba(130 ,180 ,60,0.7)',
    'rgba(255, 221, 0 ,0.7)',
    'rgba(99, 110, 70, 0.7)',
    'rgba(170, 180 ,20,0.7)',
    'rgba(100, 100, 30, 0.7)',
]

let colors = GreenColors;
const Lists = ({ cards, deleteCard, deleteTaskServer, addTaskServer, toggleTaskServer }) => {
    let rand = Math.floor(Math.random(100));
    return (
        <div className='lists'>
            {cards &&
                cards.map((card, i) => {
                    return (
                        <Card
                            key={i}
                            card={card}
                            deleteCard={deleteCard}
                            deleteTaskServer={deleteTaskServer}
                            toggleTaskServer={toggleTaskServer}
                            addTaskServer={addTaskServer}
                            background={colors[(rand + i) % colors.length]}
                        />
                    )
                })
            }
        </div>
    )
}

export default Lists;