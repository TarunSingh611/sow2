import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};

export const LanguageProvider = ({ children }) => {
    // Initialize state from localStorage or default to English
    const [language, setLanguage] = useState(() => {
        return localStorage.getItem('selectedLanguage') || 'en';
    });
    const [flag, setFlag] = useState(() => {
        return localStorage.getItem('selectedFlag') || 'GB.png';
    });

    // Save to localStorage whenever language changes
    useEffect(() => {
        localStorage.setItem('selectedLanguage', language);
        localStorage.setItem('selectedFlag', flag);
    }, [language, flag]);

    const changeLanguage = (newLanguage, newFlag) => {
        setLanguage(newLanguage);
        setFlag(newFlag);
    };

    const value = {
        language,
        flag,
        changeLanguage,
        isEnglish: language === 'en',
        isSwedish: language === 'sv'
    };

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
};
