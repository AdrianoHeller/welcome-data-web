import 'styled-components';

declare module 'styled-components'{
    export interface DefaultTheme{
        title: string,
        colors: {
            contentBackground: string,
            mainHeader: string,
            aside: string,
            cardOne:string,
            cardTwo:string,
            cardThree:string,
            textClear: string,
            textMedium: string,
            textDark: string,
            alertSuccess: string,
            alertInfo: string,
            alertWarning: string,
        }
    }    
};