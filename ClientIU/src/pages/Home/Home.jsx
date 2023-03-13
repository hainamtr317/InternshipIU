import Header from "../../components/header/Header";
import React  from 'react';
import Leftsidecard from "../../components/sidecard/leftsidecard";
import './home.scss'
const Home =()=>{


    return (
        <body>
            <Header/>
            <div className='main'>
                
            <h1>hello</h1>

            <Leftsidecard/>
            </div>
            
        </body>
    )
}
export default Home