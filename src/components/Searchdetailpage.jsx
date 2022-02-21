
import React,{ useState,useEffect}  from 'react';
import { useParams } from 'react-router';


export const Searchdetail=()=>{

    const[data,setData]=useState([]);
    console.log(data)
    const {id}=useParams()
    console.log(id)
    useEffect(()=>{
     
      getData();
   },[])


   const getData=()=>{
       fetch(`https://fast-reef-22226.herokuapp.com/data`).then((d)=>d.json()).then((res)=>setData(res))
   }



    return(
        {data.filter((e,id)=>{
          if (e.id === id){
              
          }
        })}
    )
}