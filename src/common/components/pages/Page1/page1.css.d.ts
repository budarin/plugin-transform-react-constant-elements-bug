declare namespace Page1CssNamespace {
    export interface IPage1Css {
        page1: string;
    }
}

declare const Page1CssModule: Page1CssNamespace.IPage1Css;

export = Page1CssModule;
