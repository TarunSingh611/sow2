import React from 'react';
import LogoImageSection from './LogoImageSection.jsx';
import ProfileImageSection from './ProfileImageSection.jsx';

const ImageSection = () => {
    return (
        <div className="image-section">
            <LogoImageSection/>
            <ProfileImageSection/>
        </div>
    )
}

export default ImageSection;