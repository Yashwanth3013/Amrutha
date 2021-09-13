import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Hero from '../components/about/Hero'
import About from '../components/about/About'
import Client from '../components/about/Client'
import Vision from '../components/about/Vision'
import Ourteam from '../components/about/Ourteam'
import Ouraward from '../components/about/Ouraward'
import News from '../components/about/News'
import GetStarted from '../components/GetStarted'

const Aboutpage = () => {
    return (
        <div>
          <Header />  
<Hero/>
<About/>
<Client/>
<Vision/>
<Ourteam/>
<Ouraward/>
<News/>
<GetStarted />
<Footer />

        </div>
    )
}

export default Aboutpage
