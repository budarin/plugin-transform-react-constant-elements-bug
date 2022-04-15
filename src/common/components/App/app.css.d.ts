declare namespace AppCssNamespace {
    export interface IAppCss {
        'color-theme-in-transition': string;
    }
}

declare const AppCssModule: AppCssNamespace.IAppCss;

export = AppCssModule;
