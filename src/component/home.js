import React from 'react';
import Header from './Header'
import Footer from './footer'

const Home = () =>{
    return(
        <React.Fragment>
            <Header Trademark = 'R'/>
            
            <Footer year="2021" />
        </React.Fragment>
    )
}
export default Home;