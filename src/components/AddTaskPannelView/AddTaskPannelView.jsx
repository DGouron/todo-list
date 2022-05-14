import {React} from 'react';
function AddTaskPannelView(){
    return (
    <form className='focus-marker-enabled-within'>
            <div className='task_editor__editing_area'>
                <div className='task_editor__input_fields'>   
                <input type={"text"} placeholder={"ex. : Déjeuner en famille dimanche à 12h #Personnel"} className='task_editor__content_field' />
                <textarea placeholder='Description'></textarea>
            </div> 
            <div className='addTaskButtonsRow'>
                <input type={"button"} defaultValue={"Ajouter une tâche"} />
                <input type={"button"} defaultValue={"Annuler"} />
            </div>
        </div>   
    </form>);
}

export default AddTaskPannelView;