import React from "react";
import { MainBlock } from "../components/MainBlock";





const wrapperForPage = {
   paddingLeft: '75px',

}
export const Home = () => {
   return (
      <main style={wrapperForPage}>
         <MainBlock />
      </main>
   )
}