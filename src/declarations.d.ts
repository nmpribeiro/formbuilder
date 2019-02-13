/**
 * Declaration file for TS
 *
 *  Sometimes, we need to give TypeScript a bit of help,
 *  and show him how to treat certain entities.
 */
// interface ClassNames will return a string
interface ClassNames {
    [className: string]: string
}

// we accept *.scss (as a module) and allow it to be of ClassNames type.
declare module '*.scss' {
    const classNames: ClassNames;
    export = classNames;
}

declare module "*.html" {
    const content: string;
    export default content;
}
