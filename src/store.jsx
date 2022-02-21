
import { createStore } from "redux";
import { SearchReducer } from "./seacrhstore/reducer";


 export const store= createStore(SearchReducer);

  console.log(store.getState())