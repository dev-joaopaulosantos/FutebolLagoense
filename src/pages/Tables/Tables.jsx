import React, { useEffect, useState } from 'react'
import api from '../../utils/api'
import { useContext } from "react"
import { ChampionshipContext } from "../../context/ChampionshipContext"
import Table from '../../components/Table/Table'

const Tables = () => {
   const [classifications, setclassifications] = useState([])
   const { selectedChampionship } = useContext(ChampionshipContext)


   useEffect(() => {

      if (selectedChampionship._id) {
         api.get(`/api/classification/${selectedChampionship._id}`).then((response) => {
            setclassifications(response.data.classifications)
         })

         console.log(selectedChampionship)
      }

   }, [selectedChampionship])

   // Agrupando os objetos por grupo
   const groupedClassifications = classifications.reduce((groups, obj) => {
      const group = obj.group;
      if (!groups[group]) {
         groups[group] = [];
      }
      groups[group].push(obj);
      return groups;
   }, {});

   // Obtendo as listas de objetos para cada grupo
   const group1 = groupedClassifications[1] || [];
   const group2 = groupedClassifications[2] || [];
   const group3 = groupedClassifications[3] || [];
   const group4 = groupedClassifications[4] || [];
   const group5 = groupedClassifications[5] || [];
   const group6 = groupedClassifications[6] || [];
   const group7 = groupedClassifications[7] || [];
   const group8 = groupedClassifications[8] || [];


   return (
      <section>
         {selectedChampionship && selectedChampionship.groupStage && (
            <div>
               {group1 && group1.length > 0 && (
                  <div className="table">
                     <h2>Grupo A</h2>
                     <Table data={group1} />
                  </div>
               )}
               {group2 && group2.length > 0 && (
                  <div className="table">
                     <h2>Grupo B</h2>
                     <Table data={group2} />
                  </div>
               )}
               {group3 && group3.length > 0 && (
                  <div className="table">
                     <h2>Grupo C</h2>
                     <Table data={group3} />
                  </div>
               )}
               {group4 && group4.length > 0 && (
                  <div className="table">
                     <h2>Grupo D</h2>
                     <Table data={group4} />
                  </div>
               )}
               {group5 && group5.length > 0 && (
                  <div className="table">
                     <h2>Grupo E</h2>
                     <Table data={group5} />
                  </div>
               )}
               {group6 && group6.length > 0 && (
                  <div className="table">
                     <h2>Grupo F</h2>
                     <Table data={group6} />
                  </div>
               )}
               {group7 && group7.length > 0 && (
                  <div className="table">
                     <h2>Grupo G</h2>
                     <Table data={group7} />
                  </div>
               )}
               {group8 && group8.length > 0 && (
                  <div className="table">
                     <h2>Grupo H</h2>
                     <Table data={group8} />
                  </div>
               )}
            </div>
         )}
         {selectedChampionship && !selectedChampionship.groupStage && (
            <div className='information'>
               <h2>Este campeonato não possui tabala de classificação!</h2>
            </div>
         )}
      </section>
   );
}

export default Tables