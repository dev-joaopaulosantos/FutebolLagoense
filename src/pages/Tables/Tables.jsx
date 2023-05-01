import React, { useEffect, useState } from 'react'
import api from '../../utils/api'
import { useContext } from "react"
import { ChampionshipContext } from "../../context/ChampionshipContext"
import Table from '../../components/Table/Table'

const Tables = () => {
   const [classifications, setclassifications] = useState([])
   const { selectedChampionship } = useContext(ChampionshipContext)


   useEffect(() => {

      api.get(`/api/classification/${selectedChampionship._id}`).then((response) => {
         setclassifications(response.data.classifications)
      })

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

   console.log(classifications)

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
      <div>
         {group1 && group1.length > 0 && (
            <div className="table">
               <h2>Grupo 1</h2>
               <Table data={group1} />
            </div>
         )}
         {group2 && group2.length > 0 && (
            <div className="table">
               <h2>Grupo 1</h2>
               <Table data={group2} />
            </div>
         )}
         {group3 && group3.length > 0 && (
            <div className="table">
               <h2>Grupo 1</h2>
               <Table data={group3} />
            </div>
         )}
         {group4 && group4.length > 0 && (
            <div className="table">
               <h2>Grupo 1</h2>
               <Table data={group4} />
            </div>
         )}
         {group5 && group5.length > 0 && (
            <div className="table">
               <h2>Grupo 1</h2>
               <Table data={group5} />
            </div>
         )}
         {group6 && group6.length > 0 && (
            <div className="table">
               <h2>Grupo 1</h2>
               <Table data={group6} />
            </div>
         )}
         {group7 && group7.length > 0 && (
            <div className="table">
               <h2>Grupo 1</h2>
               <Table data={group7} />
            </div>
         )}
         {group8 && group8.length > 0 && (
            <div className="table">
               <h2>Grupo 1</h2>
               <Table data={group8} />
            </div>
         )}
      </div>
   );
}

export default Tables