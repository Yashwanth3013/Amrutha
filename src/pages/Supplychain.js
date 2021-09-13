import React from 'react'
import Hero from '../components/SupplyChain/Hero'
import Solutions from '../components/SupplyChain/Solutions'
import Usecases from '../components/SupplyChain/Usecases'
import GetStarted from "../components/GetStarted"
import Header from '../components/Header'
import Footer from '../components/Footer'
function Supplychain() {
    return (
        <div>
            <Header />
            <Hero /> 
            <Solutions />
            <Usecases />
            <GetStarted />
            <Footer />
        </div>
    )
}

export default Supplychain
