import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import './Home.css'

const Home = () => {
    return (
        <div>
            <Navbar/>

            <div className='main-container-top'>

                {/* part-1 */}
                <div className='sec-container'>
                    <div className='inner-container  column1'>
                        <div className='text-aera muxture '>
                            <h1 className="h1-text">Find a gift for your wife or girlfriend</h1>
                            <p className=" text-new">Struggling to find a gift or girlfriend? No problem!</p>
                            <a className="btn-1">Find Gift Now</a>
                        </div>
                    </div>
                    <div class="inner-container   column1">
                        <img src="https://giftstore.netlify.app/assets/images/Background.png" className="h100 w-100" />
                    </div>
                </div>


                {/* part-2 */}
                <div className='sec-container1' style={{display:"flex" }}>
                    <div className="inner-container column1">
                        <img src="https://giftstore.netlify.app/assets/images/Media.png" className="h-100 w-100" />
                    </div>
                    <div className='inner-container column1'>
                        <div className='text-aera muxture1  '>
                            <h1 className="h1-text">How we work</h1>
                            <p className="text-new1">We’ve actually already asked hundreds of women what they want, and made a database with results. All you have to do is take our short survey that only takes seconds, and our proprietary algorithm will match you with a few perfect gift options.</p>
                            <a className="btn-1">Learn More</a>
                        </div>
                    </div>
                </div>

            </div>

            {/* part-3 */}

            {/* <div className='part-3-main-gigt'>
            <div className='pt-20 align-center'>
          <h1 className='text-3xl font-bold'>Gift for all Occasions</h1>
          <p className='pt-4 text-1xl'>"By our web app to free the best gift for all occasions."</p>
        </div>
            </div> */}














            <Footer />
        </div>
    )
}

export default Home
