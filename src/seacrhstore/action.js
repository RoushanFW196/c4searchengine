import {store} from 'store.jsx'


export const SEARCHRESULT=()=>{
 fetch("https://fast-reef-22226.herokuapp.com/data").then((d)=>d.json()).then((res)=>store(res))

}