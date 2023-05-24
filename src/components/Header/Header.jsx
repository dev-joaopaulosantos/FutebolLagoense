import "./Header.css"
import getYear from '../../utils/getYear'

import { useContext } from "react"
import { ChampionshipContext } from "../../context/ChampionshipContext"


const Header = () => {
  const { selectedChampionship } = useContext(ChampionshipContext)

  return (
    <header className="header">
      {selectedChampionship.image && (
        <img src={selectedChampionship.image} alt={selectedChampionship.name} />
      )}
      {selectedChampionship && (
        <h1>{selectedChampionship.name} {getYear(selectedChampionship.year) || '...'}</h1>
      )}

    </header>
  )
}

export default Header