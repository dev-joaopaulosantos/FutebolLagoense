import { useEffect, useState } from "react"
import api from '../../utils/api'
import "./Games.css"

import {MdLocationOn} from 'react-icons/md'
import {MdCalendarMonth} from 'react-icons/md'

import { useContext } from "react"
import { ChampionshipContext } from "../../context/ChampionshipContext"

const Games = () => {
   const [games, setGames] = useState([])
   const { selectedChampionship } = useContext(ChampionshipContext)
   const linkImage = "https://previews.dropbox.com/p/thumb/AB5JF_Boi7pu1dEy62VnS5hKymFxiUBsvcYM0x4MeHkafcGDD5EEm4JPhdORlvMFCurkGdx0p_jamACFZyjvfW6sBHWQ1kaUxFWZ8dHEvL1Yjyev2mwTukdrHebxEn_fuIqVXzewTfOfTY45FCGRVlCTaJXixHsld1iOUPTCduGAcVRrYjnpIRjnGcQLPLOZs7HuOv1f4sMaEydvg80Ep5l9mMqyNV61l3klXBXAsDahnFfqdeqD7R59X2DgR3H8_j8l3YXjZRtAOZZ8IT5zmDiDFjbCse9o1RrUgMVknL6keq0BV_MbQFBIm0lsNdEdeOOmeR4hQaizzTOSl5ZCW9tSrwZ6wNrC3Bxi9y2HHIKQ6pk8KnYcT7UhuL3r0Zob1eM/p.png"

   useEffect(() => {

      api.get(`/api/games/${selectedChampionship._id}`).then((response) => {
         setGames(response.data.games)
      })

   }, [selectedChampionship])

   return (
      <section className="game-container">
         <h1>Games</h1>
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
                           <img src={linkImage} alt={`Escudo ${game.homeTeam.name}`} />
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
                        <p id='penaltyStatus'>{game.penaltyStatus ? 'PENALTI' : ''}</p>
                     </div>
                     <div className="right-infos">
                        <div className='team'>
                           <img src={linkImage} alt={`Escudo ${game.awayTeam.name}`} />
                           <p>{game.awayTeam.name}</p>
                        </div>
                     </div>
                  </div>
               </div>
            ))
         )}
         {games && games.length === 0 && (
            <h1>Ainda não há jogos cadastrados no campeonato selecionado!</h1>
         )}
      </section>
   )
}

export default Games