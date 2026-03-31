import { useState } from "react";

export default function FormFieldList({
    editModeActive,
    label,
    name,
    valueArray = [],
    updateDraft,
    required = false,
}) {
    const [fieldListData, storeFieldListData] = useState([...valueArray]);

    function handleInputChange(event) {
        const dataId = event.target.getAttribute("data-id");
        const inputName = event.target.getAttribute("name");
        const value = event.target.value;
        const newObjectArray = fieldListData.map((entryObject) => {
            if (entryObject.id === dataId) {
                return {
                    ...entryObject,
                    [inputName]: value,
                };
            } else {
                return entryObject;
            }
        });

        storeFieldListData(newObjectArray);
        updateDraft({ [name]: newObjectArray });
    }

    function addNewFieldEntry(event) {
        event.preventDefault();
        const entryCategory = event.target.getAttribute("category");
        const newObjectArray = [...fieldListData];
        const newEntry = {
            id: crypto.randomUUID(),
            location: "",
            start: "",
            finish: "",
            description: "",
        };
        newObjectArray.push(newEntry);
        storeFieldListData(newObjectArray);
        updateDraft({ [entryCategory]: newObjectArray });
    }
    function deleteFieldEntry(event) {
        event.preventDefault();
        const dataId = event.target.getAttribute("data-id");
        const newObjectArray = fieldListData.filter((entryObject) => {
            return entryObject.id != dataId;
        });

        storeFieldListData(newObjectArray);
        updateDraft({ [name]: newObjectArray });
    }

    return (
        <>
            <ul className="form-field-list">
                {fieldListData.map((entry, index) => {
                    return (
                        <li
                            key={name + index}
                            data-id={`${entry.id}`}
                            className="form-field-list-entry"
                        >
                            {editModeActive ? (
                                <>
                                    <div className="form-field-list-header">
                                        <div className="form-field-list-header-location">
                                            <label
                                                htmlFor={`${name}-location-${index}`}
                                                className="form-input-label"
                                            >
                                                {`Location`}
                                                {required && (
                                                    <span className="required">
                                                        *
                                                    </span>
                                                )}
                                                {`: `}
                                            </label>
                                            <input
                                                type="text"
                                                placeholder={label}
                                                id={`${name}-location-${index}`}
                                                data-id={`${entry.id}`}
                                                name="location"
                                                value={entry.location}
                                                onChange={handleInputChange}
                                                required
                                                className="form-input-field"
                                            />
                                        </div>
                                        <button
                                            onClick={deleteFieldEntry}
                                            data-id={`${entry.id}`}
                                            className="form-field-list-entry-btn-delete btn-generic"
                                            title="Delete entry"
                                        >
                                            X
                                        </button>
                                    </div>

                                    <div className="form-field-list-dates">
                                        <div className="form-field-list-date-entry">
                                            <label
                                                htmlFor={`${name}-startDate-${index}`}
                                                className="form-input-label"
                                            >
                                                {`Start date`}
                                                {required && (
                                                    <span className="required">
                                                        *
                                                    </span>
                                                )}
                                                {`: `}
                                            </label>
                                            <input
                                                type="date"
                                                placeholder={label}
                                                id={`${name}-startDate-${index}`}
                                                data-id={`${entry.id}`}
                                                name="start"
                                                value={entry.start}
                                                onChange={handleInputChange}
                                                required
                                                className="form-input-field"
                                            />
                                        </div>

                                        <div className="form-field-list-date-entry">
                                            <label
                                                htmlFor={`${name}-finishDate-${index}`}
                                                className="form-input-label"
                                            >
                                                {`Finish date`}
                                                {required && (
                                                    <span className="required">
                                                        *
                                                    </span>
                                                )}
                                                {`: `}
                                            </label>
                                            <input
                                                type="date"
                                                placeholder={label}
                                                id={`${name}-finishDate-${index}`}
                                                data-id={`${entry.id}`}
                                                name="finish"
                                                value={entry.finish}
                                                onChange={handleInputChange}
                                                className="form-input-field"
                                            />
                                        </div>
                                    </div>

                                    <div className="form-field-list-description">
                                        <label
                                            htmlFor={`${name}-description-${index}`}
                                            className="form-input-label"
                                        >
                                            {`Description`}
                                            {required && (
                                                <span className="required">
                                                    *
                                                </span>
                                            )}
                                            {`: `}
                                        </label>
                                        <textarea
                                            rows={5}
                                            cols={42}
                                            wrap="hard"
                                            placeholder={label}
                                            id={`${name}-description-${index}`}
                                            data-id={`${entry.id}`}
                                            name="description"
                                            value={entry.description}
                                            onChange={handleInputChange}
                                            className="form-input-field input-text-area"
                                        />
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="form-field-list-header-location">
                                        <p className="form-input-label">
                                            Location:
                                        </p>
                                        <p className="form-input-field">{`${entry.location} `}</p>
                                    </div>
                                    <div className="form-field-list-dates">
                                        <div className="form-field-list-date-entry">
                                            <p className="form-input-label">{`Start date: `}</p>
                                            <p className="form-input-field">
                                                {entry.start}
                                            </p>
                                        </div>
                                        <div className="form-field-list-date-entry">
                                            <p className="form-input-label">{`Finish date: `}</p>
                                            <p className="form-input-field">
                                                {entry.finish}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="form-field-list-description">
                                        <p className="form-input-label">{`Description: `}</p>
                                        <p className="form-input-field input-text-area">
                                            {entry.description}
                                        </p>
                                    </div>
                                </>
                            )}
                        </li>
                    );
                })}
            </ul>
            {editModeActive && (
                <button
                    onClick={addNewFieldEntry}
                    category={name}
                    className="form-field-list-entry-btn-add-new btn-generic"
                    title="Add a new blank entry set to fill in"
                >
                    Add new entry
                </button>
            )}
        </>
    );
}
