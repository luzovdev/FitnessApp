import React from "react";
import { InfoMainPage } from "../components/infoMainPage";





const wrapperForHomePage = {
   paddingLeft: '75px',

}
export const Home = () => {
   return (
      <main style={wrapperForHomePage}>
         <InfoMainPage />
      </main>
   )
}