import {FBMain} from './FBMain';

export interface FormBuilderOptions {
    selector: string;
}

export class FormBuilder {

    private options: {} = {};

    private element: FBMain;

    private payload: {};

    constructor(options: FormBuilderOptions) {

        const parent = document.getElementsByClassName(options.selector).item(0);
        if (!parent) {
            throw Error('Form Builder needs a valid selector to find mount point');
        }

        this.element = new FBMain();
        parent.append(this.element);

        this.payload = options;
    }

    public save(callback: (payload: {}) => void) {
        // do save
        callback(this.payload);
    }
}
