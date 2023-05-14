import { useEffect, useState } from "react"
import api from '../../utils/api'
import "./Games.css"

import { MdLocationOn } from 'react-icons/md'
import { MdCalendarMonth } from 'react-icons/md'

import { useContext } from "react"
import { ChampionshipContext } from "../../context/ChampionshipContext"

const Games = () => {
   const [games, setGames] = useState([])
   const { selectedChampionship } = useContext(ChampionshipContext)

   useEffect(() => {

      if (selectedChampionship._id) {
         api.get(`/api/games/${selectedChampionship._id}`).then((response) => {
            setGames(response.data.games)
         })
      }

   }, [selectedChampionship])

   return (
      <section className="game-container">
         <h1>Jogos</h1>
         {games && games.length > 0 && (
            games.map((game) => (
               <div key={game._id}>
                  <div className="game-infos">
                     <p className="game-local"> <MdLocationOn /> {game.local}</p>
                     <p className="game-info">{game.gameInfo}</p>
                     <p className="game-date">{new Date(game.date).toISOString().substring(10, 0)} <MdCalendarMonth /></p>
                  </div>
                  <div className='game'>
                     <div className='left-infos'>
                        <div className='team'>
                           <img src={game.homeTeam.shield} alt={`Escudo ${game.homeTeam.name}`} />
                           <p>{game.homeTeam.name}</p>
                        </div>
                     </div>
                     <div className='center-infos'>
                        <p id='matchStatus'>{game.matchStatus}</p>
                        <div>
                           <span>{game.homeGoals}</span>
                           <span className='penalty-goals'>{game.penaltyGoalsHome}</span>
                           <span>x</span>
                           <span className='penalty-goals'>{game.awayPenaltyGoals}</span>
                           <span>{game.awayGoals}</span>
                        </div>
                        {/* <p id='penaltyStatus'>{game.penaltyStatus ? 'PENALTI' : ''}</p> */}
                     </div>
                     <div className="right-infos">
                        <div className='team'>
                           <img src={game.awayTeam.shield} alt={`Escudo ${game.awayTeam.name}`} />
                           <p>{game.awayTeam.name}</p>
                        </div>
                     </div>
                  </div>
               </div>
            ))
         )}
         {games && games.length === 0 && (
            <div className="information">
               <h2>Ainda não há jogos cadastrados no campeonato selecionado!</h2>
            </div>
         )}
      </section>
   )
}

export default Games