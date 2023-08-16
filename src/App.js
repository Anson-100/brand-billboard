import Landing from "./scenes/Landing"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import useMediaQuery from "./hooks/useMediaQuery"

function App() {
  return (
    <div className="app border-[.75rem] border-cream">
      <Landing />
    </div>
  )
}

export default App
