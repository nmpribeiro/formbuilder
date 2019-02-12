import 'skatejs-web-components';
import Element, { h } from '@skatejs/element-preact';
import { props } from '@skatejs/element';

// courtesy: https://hackernoon.com/building-a-custom-tag-input-with-skate-js-fbd4cdf744f

// Styles
import styles from './styles.scss';
import { LiElement } from '../LiComponent/li-component';

export class MyComponent extends Element {

    public static props = {
        name: props.string,
        list: props.array
    };

    public name: string;
    public list: number[] = [];

    public setList( list: number[] ) {
        this.list = list;
    }

    public setName( name: string ) {
        this.name = name;
    }

    public render() {
        console.log('stypes: ', styles.toString());
        return (
            <div>
                <style>{ styles.toString() }</style>
                <h3>{ this.name }</h3>

                <ul class="test">
                    { this.list.map( i => <LiElement num={i} /> ) }
                </ul>

                <pre>{ this.list.toString() }</pre>
            </div>
        );
    }
}

customElements.define('my-component', MyComponent);
