import { useState } from "react";

export default function FormFieldInput({
    type = "text",
    label,
    name,
    value,
    editModeActive,
    updateDraft,
    dataId,
    required = false,
}) {
    const [currentInputValue, updateInputdisplayValue] = useState(value);

    function handleInputChange(event) {
        const itemID = event.target.getAttribute("data-id");
        const newDataObject = {
            id: itemID,
            [name]: event.target.value,
        };

        updateInputdisplayValue(event.target.value);

        updateDraft(newDataObject);
    }

    return (
        <>
            {editModeActive ? (
                <div className="form-field-main-details-entry">
                    <label
                        htmlFor={`form-${name}`}
                        className="form-input-label"
                    >
                        {label}
                        {required && <span className="required">*</span>}
                        {`: `}
                    </label>
                    <input
                        type={type}
                        placeholder={label}
                        id={`form-${name}`}
                        data-id={dataId}
                        name={name}
                        value={currentInputValue}
                        onChange={handleInputChange}
                        required
                        className="form-input-field"
                    />
                </div>
            ) : (
                <div className="form-field-main-details-entry">
                    <p className="form-input-label">{label + `: `}</p>
                    <p className="form-input-field">{value}</p>
                </div>
            )}
        </>
    );
}
