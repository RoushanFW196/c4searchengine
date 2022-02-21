
import React,{ useState,useEffect}  from 'react';
import { useParams } from 'react-router';


export const Searchdetail=()=>{

    const[data,setData]=useState([]);
    console.log(data)
    const {id}=useParams()
    
    useEffect(()=>{
     
      getData();
   },[])


   const getData=()=>{
       fetch("https://fast-reef-22226.herokuapp.com/data").then((d)=>d.json()).then((res)=>setData(res))
   };



    return(
        <>
            {data.filter((e,id)=>{
                if(e.id==id){
                    console.log(id)
                    return(
                        <div id="detailed-result">
                         <div className="title">{e.title}</div>
                             <div className="desc">{e.description}</div>
                             <div className="author">{e.author}</div>
                             <div className="creation-date">{e.creation_date}</div>
                             <div className="explicit">{e.explicit}</div>
                             <div className="quality">{e.quality}</div>
                        </div>
                    )
                }
            })}
        </>
    )
}