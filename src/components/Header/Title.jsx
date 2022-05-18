import {React} from 'react';
import CurrentDate from './CurrentDate';

function Title(){
    const title = "Aujourd'hui ";
    return ( 
    <div className='view_header'>
        <h2>{title}<CurrentDate /></h2>
    </div>
    );
}

export default Title;