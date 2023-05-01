import { createContext, useState } from "react";

export const ChampionshipContext = createContext()

export const ChampionshipProvider = ({ children }) => {
    const champ = {
        "_id": "64434bb704e218137fd284c2",
        "name": "Torneio Futsal",
        "year": "2023-04-22T00:00:00.000Z",
        "groupStage": true,
        "champion": "A definir",
        "award": "Não Informado",
        "secondPlace": "A definir",
        "thirdPlace": "A definir",
        "goalScorer": "A definir",
        "bestPlayer": "A definir",
        "bestGoalkeeper": "A definir"
    }
    const [selectedChampionship, setSelectedChampionship] = useState(champ || {})

    const handleSelectChampionship = (championship) => {
        setSelectedChampionship(championship)
    }

    return (
        <ChampionshipContext.Provider value={{ selectedChampionship, handleSelectChampionship }}>
            {children}
        </ChampionshipContext.Provider>
    )
}