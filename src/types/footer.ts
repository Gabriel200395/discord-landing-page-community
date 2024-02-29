export  type FooterProps = {
    handleClickOpenedOptionsLang: () => void;
    handleClickSelectedLang: (text: string, url: string) => void;
    openedOptionsCountry: boolean;
    lang: {
        url: string;
        text: string
    }
}