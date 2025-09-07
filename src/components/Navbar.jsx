import React, { useState } from 'react';
import { BusinessDetailsIcon, SettingsIcon, StandardTextsIcon, GoToInvoicesIcon, HamburgerIcon } from '../svg/icons';
import { useLanguage } from '../contexts/LanguageContext.jsx';
import { useTranslation } from '../hooks/useTranslation.js';


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLanguageOpen, setIsLanguageOpen] = useState(false);
    const { language, flag, changeLanguage } = useLanguage();
    const { t } = useTranslation();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleLanguage = () => {
        setIsLanguageOpen(!isLanguageOpen);
    };

    const selectLanguage = (newLanguage, newFlag) => {
        changeLanguage(newLanguage, newFlag);
        setIsLanguageOpen(false);
    };
    return (
        <nav className="navbar">
            <div className="nav-tabs">
                <button className="nav-tab active">
                    <span className="nav-tab-text">{t('businessDetails')}</span>
                    <BusinessDetailsIcon />
                </button>
                
                <button className="nav-tab">
                    <span className="nav-tab-text">{t('settings')}</span>
                    <SettingsIcon />
                </button>
                
                <button className="nav-tab">
                    <span className="nav-tab-text">{t('standardTexts')}</span>
                    <StandardTextsIcon />
                </button>
                
                <button className="nav-tab">
                    <span className="nav-tab-text">{t('goToInvoices')}</span>
                    <GoToInvoicesIcon />
                </button>

                <button className="hamburger-menu" onClick={toggleMenu}>
                    <HamburgerIcon />
                </button>
            </div>

            <div className={`ham-menu ${isMenuOpen ? 'show' : ''}`}>
                <div className="ham-menu-tab active">
                    <BusinessDetailsIcon />
                    <span className="ham-menu-tab-text">{t('businessDetails')}</span>
                </div>
                <div className="ham-menu-tab">
                    <SettingsIcon />
                    <span className="ham-menu-tab-text">{t('settings')}</span>
                </div>
                <div className="ham-menu-tab">
                    <StandardTextsIcon />
                    <span className="ham-menu-tab-text">{t('standardTexts')}</span>
                </div>
                <div className="ham-menu-tab">
                    <GoToInvoicesIcon />
                    <span className="ham-menu-tab-text">{t('goToInvoices')}</span>
                </div>
            </div>

            
            <div className="language-selector">
                <button className="language-button" onClick={toggleLanguage}>
                    <span className="language-selector-text nav-tab-text">{t(`language${language === 'en' ? 'English' : 'Swedish'}`)}</span>
                    <img 
                        src={`/assets/${flag}`} 
                        alt={language} 
                        className="flag-icon"
                    />
                </button>
                
                <div className={`language-dropdown ${isLanguageOpen ? 'show' : ''}`}>
                    <div className="language-option" onClick={() => selectLanguage('en', 'GB.png')}>
                        <img src="/assets/GB.png" alt="English" className="flag-icon" />
                        <span>{t('languageEnglish')}</span>
                    </div>
                    <div className="language-option" onClick={() => selectLanguage('sv', 'SE.png')}>
                        <img src="/assets/SE.png" alt="Swedish" className="flag-icon" />
                        <span>{t('languageSwedish')}</span>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;