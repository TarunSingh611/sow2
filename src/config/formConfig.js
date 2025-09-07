export const formConfig = {
    title: 'formTitle',
    fields: [
        {
            id: 'name',
            type: 'text',
            label: 'name',
            placeholder: 'enterName',
            required: true,
            defaultValue: '',
            validation: {
                minLength: 2,
                maxLength: 100
            }
        },
        {
            id: 'address',
            type: 'text',
            label: 'address',
            placeholder: 'enterAddress',
            required: true,
            defaultValue: '',
            validation: {
                minLength: 5,
                maxLength: 200
            }
        },
        {
            id: 'address2',
            type: 'text',
            label: 'address2',
            placeholder: 'enterAddress2',
            required: false,
            defaultValue: '',
            validation: {
                maxLength: 200
            }
        },
        {
            id: 'postcode',
            type: 'text',
            label: 'postcode',
            placeholder: 'enterPostcode',
            required: true,
            defaultValue: '',
            layout: 'row', // This field will be in a row with city
            validation: {
                pattern: '^[0-9\\s-]+$',
                minLength: 3,
                maxLength: 10
            }
        },
        {
            id: 'city',
            type: 'text',
            label: 'city',
            placeholder: 'enterCity',
            required: true,
            defaultValue: '',
            layout: 'row', // This field will be in a row with postcode
            validation: {
                minLength: 2,
                maxLength: 50
            }
        },
        {
            id: 'ourReference',
            type: 'text',
            label: 'ourReference',
            placeholder: 'enterReference',
            required: false,
            defaultValue: '',
            validation: {
                maxLength: 50
            }
        },
        {
            id: 'phone',
            type: 'tel',
            label: 'phone',
            placeholder: 'enterPhone',
            required: true,
            defaultValue: '',
            validation: {
                pattern: '^[0-9\\s\\-\\+\\(\\)]+$',
                minLength: 8,
                maxLength: 20
            }
        },
        {
            id: 'email',
            type: 'email',
            label: 'email',
            placeholder: 'enterEmail',
            required: true,
            defaultValue: '',
            validation: {
                pattern: '^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$',
                maxLength: 100
            }
        },
        {
            id: 'accountNo',
            type: 'text',
            label: 'accountNo',
            placeholder: 'enterAccountNumber',
            required: false,
            defaultValue: '',
            validation: {
                pattern: '^[0-9\\-\\s]+$',
                maxLength: 30
            }
        },
        {
            id: 'orgNumber',
            type: 'text',
            label: 'orgNumber',
            placeholder: 'enterOrgNumber',
            required: false,
            defaultValue: '',
            validation: {
                pattern: '^[0-9\\-\\s]+$',
                maxLength: 20
            }
        },
        {
            id: 'homepage',
            type: 'url',
            label: 'homepage',
            placeholder: 'homepagePlaceholder',
            required: false,
            defaultValue: '',
            validation: {
                pattern: '^https?:\\/\\/.+',
                maxLength: 200
            }
        }
    ],
    footer: {
        instruction: 'settingsInstruction'
    }
};

// Helper function to group fields by layout
export const groupFieldsByLayout = (fields) => {
    const grouped = [];
    let i = 0;
    
    while (i < fields.length) {
        const currentField = fields[i];
        
        if (currentField.layout === 'row' && i + 1 < fields.length) {
            const nextField = fields[i + 1];
            if (nextField.layout === 'row') {
                // Group these two fields together
                grouped.push({
                    type: 'row',
                    fields: [currentField, nextField]
                });
                i += 2; // Skip the next field since we've grouped it
            } else {
                grouped.push({
                    type: 'single',
                    field: currentField
                });
                i++;
            }
        } else {
            grouped.push({
                type: 'single',
                field: currentField
            });
            i++;
        }
    }
    
    return grouped;
};

// Helper function to create initial form data from config
export const createInitialFormData = (fields) => {
    const initialData = {};
    fields.forEach(field => {
        initialData[field.id] = field.defaultValue;
    });
    return initialData;
};
