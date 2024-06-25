import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import './Home.css';

const Home: React.FC = () => {
    const { theme } = useTheme();

    return (
        <div className={`home ${theme}`}>
            <div className="content">
                <h1>the</h1>
                <br />
                <h1>Cafe</h1>
            </div>
            <div className="footer">
                <h3>Open from 6 am to 5pm</h3>
                <h3>15 Adr Street, 5015</h3>
            </div>
        </div>
    );
};

export default Home;
