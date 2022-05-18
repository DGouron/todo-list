import {React} from 'react';

function CurrentDate(){
    const currentDate = new Date();
    const displayDate = `${translateDayName(currentDate.getDay())} ${currentDate.getDate()} ${translateMonthName(currentDate.getMonth())}`
    
    translateDayName('');
    return <small>{displayDate}</small>
}

function translateDayName(dayName){
    switch(dayName){
        case 1 : return "Lun";
        case 2 : return "Mar";
        case 3 : return "Mer";
        case 4 : return "Jeu";
        case 5 : return "Ven";
        case 6 : return "Sam";
        case 7 : return "Dim";
        default : return "";
    }
}

function translateMonthName(monthName){
    switch(monthName + 1){
        case 1 : return "janvier";
        case 2 : return "février";
        case 3 : return "mars";
        case 4 : return "avril";
        case 5 : return "mai";
        case 6 : return "juin";
        case 7 : return "juillet";
        case 8 : return "août";
        case 9 : return "septembre";
        case 10 : return "octobre";
        case 11 : return "novembre";
        case 12 : return "décembre";
        default : return "";
    }
}


export default CurrentDate;