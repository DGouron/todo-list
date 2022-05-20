import {React} from 'react';
import PropTypes from 'prop-types';

function OpenEditorButton({setIsEditorOpen, isEditorOpen}){
    return (
        <div>
        {
            isEditorOpen ?
            <div></div>
            :
            <button type="button" data-add-task-navigation-element="true" className="plus_add_button" name = {"OpenEditor"} onClick = {() => handleOpenEditorButtonClick(setIsEditorOpen, true)}><span className="icon_add" aria-hidden="true"><svg width="13" height="13"><path d="M6 6V.5a.5.5 0 0 1 1 0V6h5.5a.5.5 0 1 1 0 1H7v5.5a.5.5 0 1 1-1 0V7H.5a.5.5 0 0 1 0-1H6z" fill="currentColor" fillRule="evenodd"></path></svg></span>Ajouter une tâche</button>

        }
        </div>
       )
}

function handleOpenEditorButtonClick(handleFunction, status){
    handleFunction(status);
}

OpenEditorButton.propTypes = {
    setIsEditorOpen: PropTypes.func,
    isEditorOpen: PropTypes.bool,
}
export default OpenEditorButton;