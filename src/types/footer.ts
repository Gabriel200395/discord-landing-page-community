export type FooterProps = {
    handleClickOpenedOptionsLang: () => void;
    handleClickSelectedLang: (text: string, url: string, language: 'pt' | 'en') => void;
    openedOptionsLang: boolean;
    lang: {
        url: string;
        text: string
    }
}