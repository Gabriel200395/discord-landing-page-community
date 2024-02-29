export type LangType = {
    [key: string]: {
      menus: string[];
      information: {
        title: string;
        text: string;
        buttons: string[];
      },
      createInvite: {
        title: string;
        text: string;
        url: string
      },
      voiceConnected: {
        title: string;
        text: string;
        url: string
      },
      fromToFandom: {
        title: string;
        text: string;
        url: string
      },
      reliableTech: {
        title: string;
        text: string;
        url: string,
        journey: {
          title: string;
          text: string;
        }
      }, 
      footer: {
        menus: {id: number, title: string, list: string[]}[]; 
        buttonText: string;
      }
    }
  }
  