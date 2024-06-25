import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import './About.css';
import coffeehouseImage from '../images/coffeehouse-2600877_1280.jpg';

const About: React.FC = () => {
    const { theme } = useTheme();

    return (
        <div className={`about ${theme}`}>
            <h1>ABOUT THE CAFE</h1>
            <br/>
            <div>
                <p>
                    The Cafe was founded in blabla by Mr. Smith in lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <br/>
                <p>
                    In addition to our full espresso and brew bar menu, we serve fresh made-to-order breakfast and lunch sandwiches, as well as a selection of sides and salads and other good stuff.
                </p>
                <div className='highlight'>
                    <p>
                        "Use products from nature for what it's worth - but never too early, nor too late." Fresh is the new sweet.
                    </p>
                    <p>
                        Chef, Coffeeist and Owner: Liam Brown
                    </p>
                </div>
                <div>
                    <img src={coffeehouseImage} alt="Coffeehouse" />
                </div>
                <br/>
                <div>
                    <p>
                        Opening hours: <span className='normal'>everyday from 6am to 5pm.</span>
                    </p>
                    <br/>
                    <p>
                        Address: <span className='normal'>15 Adr street, 5015, NY</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
