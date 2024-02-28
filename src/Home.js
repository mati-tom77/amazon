import React from 'react'
import './home.css'
import Product from "./Product"
// import Heder from './Heder';
function Home() {
  return (
  <div className="home">
    <div className="home__container">
        <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428584220_.jpg" alt=""/>
          <div className="home__row">
                <Product
                    id="234321"
                    title="Lean-Startup-Entrepreneurs-Continuous-Innovation"
                    price={1999.99}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/61BFOf9Ap-L._AC_UF1000,1000_QL80_.jpg"/>
                <Product
                    id="234322"
                    title="UX for Lean Startups: Faster, Smarter User Experience Research and Design"
                    price={14.99}
                    rating={3}
                    image="https://m.media-amazon.com/images/I/71v2YgvynnL._AC_UF1000,1000_QL80_.jpg"/>
          </div>
          <div className="home__row">
                <Product
                    id="234323"
                    title="SAMSUNG Galaxy Buds FE True Wireless Bluetooth Earbuds"
                    price={72.76}
                    rating={4}
                    image="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/613cPuOz5OL._AC_UF894,1000_QL80_.jpg"/>
                <Product
                    id="234324"
                    title="CARLOCA Compatible with Samsung Galaxy Z Flip 3 5G Case,Gold Angel Wings Samsung Galaxy Z Flip 3 5G Cases,Fashion Graphic Design Shockproof Anti-Scratch Drop Samsung Z Flip 3 5G"
                    price={21.99}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/71PXpibXaZL._AC_UF894,1000_QL80_.jpg"/>
                <Product
                    id="234325"
                    title="G-Shock X-Large Combi GA110 Black/Rose Gold"
                    price={192}
                    rating={4}
                    image="https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61EKoFgo1NL._AC_UL320_.jpg"/>
          </div>
          <div className="home__row">
                <Product
                    id="234326"
                    title="Amazon Fire TV 43" 
                    price={399}
                    rating={5}
                    image="https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/41gWOZJlAjL.jpg"/>
          </div>
    </div>
  </div>
  );
}
export default Home