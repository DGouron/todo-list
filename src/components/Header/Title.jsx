import {React} from 'react';

function Title(){
    const title = "Aujourd'hui ";
    return ( 
    <div className='view_header'>
        <h2>{title}<small>Sam 14 mai</small></h2>
    </div>
    );
}

export default Title;