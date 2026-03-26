export default function FormWrapper({ editModeActive, formID, children }) {
    return editModeActive ? (
        <form action="#" id={formID} className="form-wrapper">
            {children}
        </form>
    ) : (
        <div id={formID} className="form-wrapper">
            {children}
        </div>
    );
}
