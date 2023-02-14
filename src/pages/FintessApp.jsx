import React from "react";

import { Sidebar } from "../components/Sidebar";
import { MainBlock } from "../components/MainBlock";

// Придумать что-то получше...
const container = {
   width: '100%',
   height: '100vh',
   display: 'flex'
}

export const FitnessApp = () => {
   return (
      <main style={container}>
         <Sidebar />
         <MainBlock />
      </main>

   )
}