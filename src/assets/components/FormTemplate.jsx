/*
Helper template
https://github.com/ignasc/projectodin-bookLibrary/blob/main/index.js

Usefull to check:
https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/How_to_structure_a_web_form
*/

import initialCVdata from "./cvDB.jsx";
import { useState } from "react";
import ButtonFormControl from "./ButtonFormControl.jsx";
import ButtonToggleTheme from "./ButtonToggleTheme.jsx";
import FormWrapper from "./FormWrapper.jsx";
import FormFieldInput from "./FormFieldInput.jsx";
import FormFieldList from "./FormFieldList.jsx";
import FormFieldsetWrapper from "./FormFieldsetWrapper.jsx";
import FormLegendWrapper from "./FormLegendWrapper.jsx";
import globalLabels from "./globalVars.jsx";

const formID = "new-form";

/*                      */
/*  MAIN FORM TEMPLATE  */
/*                      */

export default function FormTemplate({ setThemeClass }) {
    const [editModeActive, toggleEdit] = useState(false);
    const [cvData, saveCV] = useState(initialCVdata);
    const [cvDraft, saveDraft] = useState(initialCVdata);

    function updateDraft(dataObject) {
        saveDraft({ ...cvDraft, ...dataObject });
    }

    function cancelDraft() {
        saveDraft({ ...cvData });
    }
    function updateCvData() {
        saveCV({ ...cvDraft });
    }

    // const actions = {
    //     updateDraft: updateDraft,
    //     cancelDraft: cancelDraft,
    //     updateCvData: updateCvData,
    // };

    function handleToggleCancelEdit() {
        cancelDraft();
    }

    return (
        <>
            <FormWrapper editModeActive={editModeActive} formID={formID}>
                <div className="form-buttons">
                    <ButtonToggleTheme setThemeClass={setThemeClass} />
                    <ButtonFormControl
                        toggleEdit={toggleEdit}
                        editModeActive={editModeActive}
                        onClickAction={handleToggleCancelEdit}
                        nameDefault={"Edit Form"}
                        nameInEdit={"Cancel edits"}
                    />

                    {editModeActive && (
                        <ButtonFormControl
                            toggleEdit={toggleEdit}
                            editModeActive={editModeActive}
                            onClickAction={updateCvData}
                            nameDefault={"Save"}
                            nameInEdit={"Save edits"}
                        />
                    )}
                </div>

                <FormFieldsetWrapper editModeActive={editModeActive}>
                    <FormLegendWrapper editModeActive={editModeActive}>
                        Main details
                    </FormLegendWrapper>
                    <div>
                        <FormFieldInput
                            label={"First Name"}
                            editModeActive={editModeActive}
                            name={globalLabels.firstNameLabel}
                            value={cvData.firstName}
                            updateDraft={updateDraft}
                        />
                        <FormFieldInput
                            label={"Last Name"}
                            editModeActive={editModeActive}
                            name={globalLabels.lastNameLabel}
                            value={cvData.lastName}
                            updateDraft={updateDraft}
                        />
                        <FormFieldInput
                            label={"Date of birth"}
                            type="date"
                            editModeActive={editModeActive}
                            name={globalLabels.birthDateLabel}
                            value={cvData.birthDate}
                            updateDraft={updateDraft}
                        />
                        <FormFieldInput
                            label={"Address"}
                            editModeActive={editModeActive}
                            name={globalLabels.addressLabel}
                            value={cvData.address}
                            updateDraft={updateDraft}
                        />
                    </div>
                </FormFieldsetWrapper>

                <FormFieldsetWrapper editModeActive={editModeActive}>
                    <FormLegendWrapper editModeActive={editModeActive}>
                        Education
                    </FormLegendWrapper>
                    <FormFieldList
                        valueArray={cvData.education}
                        name="education"
                        editModeActive={editModeActive}
                        updateDraft={updateDraft}
                    />
                </FormFieldsetWrapper>

                <FormFieldsetWrapper editModeActive={editModeActive}>
                    <FormLegendWrapper editModeActive={editModeActive}>
                        Work Experience
                    </FormLegendWrapper>
                    <FormFieldList
                        valueArray={cvData.work}
                        name="work"
                        editModeActive={editModeActive}
                        updateDraft={updateDraft}
                    />
                </FormFieldsetWrapper>
            </FormWrapper>
        </>
    );
}
