export type FooterProps = {
    handleClickOpenedOptionsLang: () => void;
    handleClickSelectedLang: (text: string, url: string, language: string) => void;
    openedOptionsLang: boolean;
    lang: {
        url: string;
        text: string
    }
}