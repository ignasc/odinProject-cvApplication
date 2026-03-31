export default function FormLegendWrapper({
    editModeActive,
    // formID,
    children,
}) {
    return editModeActive ? (
        <h1 className="form-fieldset-legend">{children}</h1>
    ) : (
        <h1 className="form-fieldset-legend">{children}</h1>
    );
}
