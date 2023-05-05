import { createContext, useEffect, useState } from "react";
import api from '../utils/api'


export const ChampionshipContext = createContext()

export const ChampionshipProvider = ({ children }) => {
    const [selectedChampionship, setSelectedChampionship] = useState({})

    useEffect(() => {
       api.get('/api/selectedchampionship').then((Response) => {
            setSelectedChampionship(Response.data.selectedChampionship)
        })

    }, [])


    const handleSelectChampionship = (championship) => {
        setSelectedChampionship(championship)
    }

    return (
        <ChampionshipContext.Provider value={{ selectedChampionship, handleSelectChampionship }}>
            {children}
        </ChampionshipContext.Provider>
    )
}