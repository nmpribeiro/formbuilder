import 'skatejs-web-components';
import Element, { h } from '@skatejs/element-preact';
import { props } from '@skatejs/element';


export class LiComponent extends Element {

    public static props = {
        num: props.any
    };

    public num: number = 1;

    constructor(num: number) {
        super();
        this.num = num;
    }

    public render() {
        return <div>
            <style>
                { '.test { border: red 2px solid; }' }
            </style>
            <li class="test">{this.num ? this.num : 'none'}</li>
        </div>;
    }
}

customElements.define('li-element', LiComponent);
