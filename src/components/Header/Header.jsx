import {React} from 'react';
import HomeButton from './HomeButton';
import ReduceButton from './ReduceButton';
import SearchField from './SearchField';

function Header(){
    return ( 
    <header id='top_bar'>
        <div id='top_bar_inner'>
            <div className='left_control'>
                <ReduceButton />
                <HomeButton /> 
                <SearchField />
            </div>
        </div>
    </header>);
}

export default Header;