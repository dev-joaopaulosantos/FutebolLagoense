import './Infos.css'

import { useContext } from "react"
import { ChampionshipContext } from "../../context/ChampionshipContext"

const Infos = () => {
   const { selectedChampionship } = useContext(ChampionshipContext)

   console.log(selectedChampionship)
   return (
      <section>
         <h1>Informações</h1>
         {selectedChampionship && (
            <div className='container-infos'>
               <div>
                  <p>Campeão:</p>
                  <p>{selectedChampionship.champion}</p>
               </div>
               <div>
                  <p>Segundo Colocado:</p>
                  <p>{selectedChampionship.secondPlace}</p>
               </div>
               <div>
                  <p>Terceiro Colocado:</p>
                  <p>{selectedChampionship.thirdPlace}</p>
               </div>
               <div>
                  <p>Artilheiro:</p>
                  <p>{selectedChampionship.goalScorer}</p>
               </div>
               <div>
                  <p>Melhor Jogador:</p>
                  <p>{selectedChampionship.bestPlayer}</p>
               </div>
               <div>
                  <p>Melhor Goleiro:</p>
                  <p>{selectedChampionship.bestGoalkeeper}</p>
               </div>
               <div>
                  <p>Prêmio:</p>
                  <p>{selectedChampionship.award}</p>
               </div>
            </div>
         )}
      </section>
   )
}

export default Infos