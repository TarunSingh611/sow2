import React from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { UploadIcon, PreviewIcon } from '../svg/icons';

const LogoImageSection = () => {
    const { t } = useTranslation();

    const handlePreview = () => {
        // Preview functionality would be implemented here
        console.log('Preview logo');
    };

    return (
        <div className="logo-image-section">
            <div className="logo-section-header">
                <h2 className="logo-title">{t('ourLogo')}</h2>
            </div>
            
            <div className="logo-view-container">
                    <img 
                        src={'/assets/logo.png'} 
                        alt="Logo preview" 
                        className="logo-preview-image"
                    />
            </div>

            <div className="logo-controls">
                <div className="logo-control-field">
                    <label className="logo-control-label">{t('useLogo')}</label>
                    <div className="logo-toggle-buttons">
                        <div className={`yes-button`} > {t('yes')} </div>
                        <div className={`no-button`} > {t('no')} </div>
                    </div>
                </div>

                <div className="logo-control-field">
                    <label className="logo-control-label">{t('chooseLogo')}</label>
                    <div className="logo-upload-container">
                            {t('uploadNew')}
                            <UploadIcon />
                    </div>
                </div>

                <div className="logo-control-field">
                    <label className="logo-control-label">{t('previewLogo')}</label>
                    <div className="logo-preview-container">
                        {t('preview')}
                        <PreviewIcon />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogoImageSection;