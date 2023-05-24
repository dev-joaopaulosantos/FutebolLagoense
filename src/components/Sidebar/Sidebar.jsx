import { useEffect, useState } from 'react'
import api from '../../utils/api'
import getYear from '../../utils/getYear'
import './Sidebar.css'

import { useContext } from 'react'
import { ChampionshipContext } from '../../context/ChampionshipContext'
import Loading from '../Loading/Loading'

const Sidebar = () => {
    const [championships, setChampionships] = useState()
    const { selectedChampionship, handleSelectChampionship } = useContext(ChampionshipContext)

    useEffect(() => {
        api.get('/api/championships').then((Response) => {
            setChampionships(Response.data.championships)
        })

    }, [])

    return (
        <div className='sidebar'>
            <h2>Campeonatos</h2>
            <ul>
                {championships && championships.length > 0 && (
                    championships.map((championship) => (
                        <li
                            key={championship._id}
                            onClick={() => handleSelectChampionship(championship)}
                            className={`${selectedChampionship && selectedChampionship._id === championship._id ? 'selected' : ''}`}
                        >
                            {championship.name} {getYear(championship.year)}
                        </li>
                    ))
                )}
            </ul>
        </div>
    )
}

export default Sidebar