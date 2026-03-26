export default function FormFieldsetWrapper({
    editModeActive,
    formID,
    children,
}) {
    return editModeActive ? (
        <fieldset className="form-field-section">{children}</fieldset>
    ) : (
        <section className="form-field-section">{children}</section>
    );
}
