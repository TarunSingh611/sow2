import React, { useState } from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { formConfig, groupFieldsByLayout, createInitialFormData } from '../config/formConfig';

const FormSection = () => {
    const { t } = useTranslation();
    
    // Create form state from config
    const [formData, setFormData] = useState(() => 
        createInitialFormData(formConfig.fields)
    );

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // Group fields by layout for rendering
    const groupedFields = groupFieldsByLayout(formConfig.fields);

    // Render a single form field
    const renderFormField = (field) => {
        const inputProps = {
            type: field.type,
            name: field.id,
            value: formData[field.id],
            onChange: handleInputChange,
            placeholder: t(field.placeholder),
            className: "form-input",
            required: field.required
        };

        // Add validation attributes if they exist
        if (field.validation) {
            if (field.validation.minLength) {
                inputProps.minLength = field.validation.minLength;
            }
            if (field.validation.maxLength) {
                inputProps.maxLength = field.validation.maxLength;
            }
            if (field.validation.pattern) {
                inputProps.pattern = field.validation.pattern;
            }
        }

        return (
            <div className="form-field" id={field.id} key={field.id}>
                <label className="form-label">{t(field.label)}</label>
                <input {...inputProps} />
            </div>
        );
    };

    // Render a row of form fields
    const renderFormFieldRow = (fields) => (
        <div className="form-field-row" key={`row-${fields[0].id}-${fields[1].id}`}>
            {fields.map(field => renderFormField(field))}
        </div>
    );

    return (
        <div className="form-section">
            <div className="form-header">
                <h2 className="form-title">{t(formConfig.title)}</h2>
            </div>
            
            <div className="form-content">
                {groupedFields.map((group, index) => {
                    if (group.type === 'row') {
                        return renderFormFieldRow(group.fields);
                    } else {
                        return renderFormField(group.field);
                    }
                })}
            </div>

            <div className="form-footer">
                <p className="settings-instruction">{t(formConfig.footer.instruction)}</p>
            </div>
        </div>
    );
};

export default FormSection;