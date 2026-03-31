export default function ButtonFormControl({
    toggleEdit,
    editModeActive,
    // cancelEdit,
    onClickAction = null,
    nameDefault = "Undefined BTN-default",
    nameInEdit = "Undefined BTN-edit",
}) {
    function handleClick() {
        // if (editModeActive) {
        //   cancelEdit();
        // }
        toggleEdit(!editModeActive);
        if (onClickAction) {
            onClickAction();
        }
    }

    return (
        <button onClick={handleClick} className="btn-generic">
            {editModeActive ? nameInEdit : nameDefault}
        </button>
    );
}
