import {React} from 'react';

function ReduceButton(){
    return ( <div>
        <button type="button" aria-label="Menu principal" role="switch" aria-checked="true" data-gtm-id="burger-menu-toggle" className="left_menu_toggle top_bar_btn" data-state="tooltip-hidden" data-reach-tooltip-trigger="">

            <svg className="menu_icon" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" d="M4.5 5h15a.5.5 0 1 1 0 1h-15a.5.5 0 0 1 0-1zm0 6h15a.5.5 0 1 1 0 1h-15a.5.5 0 1 1 0-1zm0 6h15a.5.5 0 1 1 0 1h-15a.5.5 0 1 1 0-1z"></path></svg></button>
    </div>);
}

export default ReduceButton;