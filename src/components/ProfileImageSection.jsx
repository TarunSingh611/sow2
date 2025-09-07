import React from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { UploadIcon } from '../svg/icons';

const ProfileImageSection = () => {
    const { t } = useTranslation();

    return (
        <div className="profile-image-section">
            <div className="profile-title">
                {t('profilePicture')}
            </div>
            
            <div className="profile-image-container">
                <img 
                    src="/assets/profile.png" 
                    alt="Profile" 
                    className="profile-image"
                />
            </div>
            
            <div className="profile-buttons">
                <button className="profile-button edit-original">
                    {t('editOriginal')}
                    <UploadIcon />
                </button>
                <button className="profile-button upload-new">
                    {t('uploadNew')}
                    <UploadIcon />
                </button>
            </div>
        </div>
    )
}

export default ProfileImageSection;