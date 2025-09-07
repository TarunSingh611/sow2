import { useLanguage } from '../contexts/LanguageContext';
import { en } from '../translations/en';
import { sv } from '../translations/sv';

const translations = {
    en,
    sv
};

export const useTranslation = () => {
    const { language } = useLanguage();
    
    const t = (key) => {
        return translations[language]?.[key] || key;
    };
    
    return { t, language };
};
