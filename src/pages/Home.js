import React from 'react'
import Hero from '../components/Home/Hero'
import Benifits from '../components/Home/Benifits'
import Oxai from '../components/Home/Oxai'
import UseCases from '../components/Home/UseCases'
import Process from '../components/Home/Process'
import Ouraward from '../components/about/Ouraward'
import Header from '../components/Header'
import GetStarted from '../components/GetStarted'
import Footer from '../components/Footer'


const Home = () => {
    return (
        <div>
            
<Header />

<Hero/>
<Process/>
<Benifits/>
<Oxai/>
<UseCases/>
<Ouraward/>

<GetStarted />
<Footer />


        </div>
    )
}

export default Home
