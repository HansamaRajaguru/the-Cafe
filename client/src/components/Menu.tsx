import React, { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import './Menu.css';
import eatImage from '../images/granola-3440204_1280.jpg';
import drinkImage from '../images/dessert-5582984_1280.jpg';

const Menu: React.FC = () => {
    const [selectedMenu, setSelectedMenu] = useState<'eat' | 'drink' | null>('eat'); // Initialize selectedMenu to 'eat'
    const { theme } = useTheme();

    const handleMenuClick = (menu: 'eat' | 'drink') => {
        setSelectedMenu(menu);
    };
    

    return (
        <div className={`menu-container ${theme}`}>
            <h1>MENU</h1>
            <br/>
            <br/>
            <div className="menu-selection">
                <button
                    className={`menu-button ${selectedMenu === 'eat' ? 'selected' : ''}`}
                    onClick={() => handleMenuClick('eat')}
                >
                    Eat
                </button>
                <button
                    className={`menu-button ${selectedMenu === 'drink' ? 'selected' : ''}`}
                    onClick={() => handleMenuClick('drink')}
                >
                    Drink
                </button>
            </div>
            <div className="scrollable-content">
                {selectedMenu === 'eat' && (
                    <div className="menu-list">
                        <dl>
                            <dt>Bread Basket</dt>
                            <dd>Assortment of fresh baked fruit breads and muffins 5.50</dd>
                            <br/>
                            <dt>Honey Almond Granola with Fruits</dt>
                            <dd>Natural cereal of honey toasted oats, raisins, almonds and dates 7.00</dd>
                            <br/>
                            <dt>Belgian Waffle</dt>
                            <dd>Vanilla flavored batter with malted flour 7.50</dd>
                            <br/>
                            <dt>Scrambled eggs</dt>
                            <dd>Scrambled eggs, roasted red pepper and garlic, with green onions 7.50</dd>
                            <br/>
                            <dt>Blueberry Pancakes</dt>
                            <dd>With syrup, butter and lots of berries 8.50</dd>
                        </dl>
                        <img src={eatImage} alt="Eat Menu" className="menu-image" />
                    </div>
                )}
                {selectedMenu === 'drink' && (
                    <div className="menu-list">
                        <dl>
                            <dt>Coffee</dt>
                            <dd>Regular coffee 2.50</dd>
                            <br/>
                            <dt>Chocolato</dt>
                            <dd>Chocolate espresso with milk 4.50</dd>
                            <br/>
                            <dt>Corretto</dt>
                            <dd>Whiskey and coffee 5.00</dd>
                            <br/>
                            <dt>Iced tea</dt>
                            <dd>Hot tea, except not hot 3.00</dd>
                            <br/>
                            <dt>Soda</dt>
                            <dd>Coke, Sprite, Fanta, etc. 2.50</dd>
                            <br/>
                        </dl>
                        <img src={drinkImage} alt="Drink Menu" className="menu-image" />
                    </div>
                )}
                
            </div>
        </div>
    );
};

export default Menu;
