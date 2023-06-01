declare module '*.module.css' {
    interface IClassNames {
        [className: string]: string;
    }
    const classNames: IClassNames;
    export = classNames;
}

declare module '*.svg' {
    import { FunctionComponent, SVGAttributes } from 'react';
    const svg: FunctionComponent<SVGAttributes<SVGAElement>>;
    export default svg;
}

declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'

declare const __IS_DEV__: boolean;