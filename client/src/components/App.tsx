import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import Home from './Home';
import { useTheme, ThemeProvider } from '../contexts/ThemeContext';
import './App.css';

const App: React.FC = () => {
    return (
        <ThemeProvider>
            <Router>
                <div className="App">
                    <nav>
                        <ul>
                            <ThemeNavLink to="/">HOME</ThemeNavLink>
                            <ThemeNavLink to="/about">ABOUT</ThemeNavLink>
                            <ThemeNavLink to="/menu">MENU</ThemeNavLink>
                            <ThemeNavLink to="/where">WHERE</ThemeNavLink>
                            <li>
                                <ThemeToggle />
                            </li>
                        </ul>
                    </nav>
                    <main>
                        <Routes>
                            <Route path="/" element={<Home />} />
                        </Routes>
                    </main>
                </div>
            </Router>
        </ThemeProvider>
    );
};

const ThemeNavLink: React.FC<{ to: string, children: React.ReactNode }> = ({ to, children }) => {
    const { theme } = useTheme();
    return (
        <li>
            <Link to={to} className={theme === 'dark' ? 'dark' : ''}>{children}</Link>
        </li>
    );
};

const ThemeToggle: React.FC = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button onClick={toggleTheme} className="theme-toggle">
            {theme === 'light' ? <FontAwesomeIcon icon={faMoon} /> : <FontAwesomeIcon icon={faSun} />}
            
        </button>
    );
};

export default App;
