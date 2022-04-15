declare namespace SchemeSwitcherCssNamespace {
    export interface ISchemeSwitcherCss {
        legend: string;
        radio: string;
        'radio-dark': string;
        'radio-default': string;
        'radio-light': string;
        status: string;
        switcher: string;
    }
}

declare const SchemeSwitcherCssModule: SchemeSwitcherCssNamespace.ISchemeSwitcherCss;

export = SchemeSwitcherCssModule;
