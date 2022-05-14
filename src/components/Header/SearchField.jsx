import {React} from 'react';

function SearchField(){
    return ( <div>
                 <div id="quick_find" data-testid="quick_find_container"style={{width: 161 + 'px'}}>
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" aria-hidden="true" className="search_icon">
                         <path d="M10.5 3a7.5 7.5 0 015.645 12.438l4.709 4.708a.502.502 0 01-.708.708l-4.708-4.709A7.5 7.5 0 1110.5 3zm0 1a6.5 6.5 0 100 13 6.5 6.5 0 000-13z" fill="currentColor">
                             </path>
                    </svg>
                    <input tabIndex="0" id="id-dvfslf" role="combobox" autoComplete="off" aria-controls="id-dvfslf-menu" aria-haspopup="listbox" aria-expanded="false" aria-autocomplete="none" className="quick_find__input" placeholder="Recherche" aria-label="Recherche rapide" aria-keyshortcuts="/" defaultvalue="" onChange={() => {}}>
                    
                    </input>
                </div>
          </div>);
}

export default SearchField;