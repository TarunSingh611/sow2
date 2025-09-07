import React from 'react';
import Navbar from './components/Navbar.jsx';
import DetailsPage from './pages/DetailsPage.jsx';
import { LanguageProvider } from './contexts/LanguageContext.jsx';
import './styles/global.css';

const App = () => {
    return (
        <LanguageProvider>
            <main>
                <Navbar/>
                <DetailsPage/>
            </main>
        </LanguageProvider>
    )
}

export default App;