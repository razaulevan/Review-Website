import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import OurServices from '../OurServices/OurServices';
import Common from '../Common/Common';



const Home = () => {
    return (
        <div>
            <Header></Header>
            <Common></Common>
            <OurServices></OurServices>
            <Footer></Footer>
        </div>
    );
};

export default Home;