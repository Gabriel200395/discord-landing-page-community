export  type FooterProps = {
    handleClickOpenedOptionsCountry: () => void;
    handleClickSelectedCountry: (text: string, url: string) => void;
    openedOptionsCountry: boolean;
    country: {
        url: string;
        text: string
    }
}