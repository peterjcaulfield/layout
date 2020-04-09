export interface Theme {
    spacings: {
        defaultGridGap: string;
    }
    breakpoints: {
        small: string;
    }
    header: {
        background: string;
    }
    widget: {
        primary: {
            background: string;
        }
        secondary: {
            background: string;
        }
    }
    main: {
        background: string;
    }
    sidebar: {
        background: string;
    }
    footer: {
        background: string;
    }
    button: {
        color: string;
        background: string;
        typography: {
            fontFamily: string;
            fontWeight: string;
        }
    }
}

export const theme: Theme = {
    spacings: {
        defaultGridGap: '0.5rem',
    },
    breakpoints: {
        small: '40em',
    },
    header: {
        background: 'rgb(79, 89, 42)',
    },
    widget: {
        primary: {
            background: 'rgb(105, 146, 64)',
        },
        secondary: {
            background: 'rgb(148, 139, 119)',
        }
    },
    main: {
        background: 'rgb(251, 223, 170)',
    },
    sidebar: {
        background: 'rgb(244, 210, 114)',
    },
    footer: {
        background: 'rgb(214, 199, 116)',
    },
    button: {
        color: 'rgb(0,0,0)',
        background: 'linear-gradient(90deg, rgba(238,184,46,1) 0%, rgba(250,216,76,1) 100%)',
        typography: {
            fontFamily: 'Arial',
            fontWeight: 'bold'
        }
    }
};
