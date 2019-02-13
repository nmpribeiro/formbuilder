import 'skatejs-web-components';
import Element, { h } from '@skatejs/element-preact';
import { props } from '@skatejs/element';

// import { } from 'jquery-ui';
// import { Draggable } from 'draggable';

// DRAGGABLE: http://sortablejs.github.io/Sortable/

// courtesy: https://hackernoon.com/building-a-custom-tag-input-with-skate-js-fbd4cdf744f

// Styles
import styles from './styles.scss';
import classcat from 'classcat';

export enum FBMainState {
    CREATE = 0,
    EDIT = 1
}

export class FBMain extends Element {

    public static props = {
        name: props.string,
        list: props.array,
        selected: props.any
    };

    public selected: FBMainState = FBMainState.CREATE;

    public name: string = 'test';
    public list: number[] = [];

    public setList( list: number[] ) {
        this.list = list;
    }

    public setName( name: string ) {
        this.name = name;
    }

    public setSelected( newState: FBMainState ) {
        this.selected = newState;
    }

    public isCurrentState( checkState: FBMainState ): boolean {
        return this.selected === checkState;
    }

    public render() {
        console.log(styles.toString());
        return (
            <div style="position: absolute; top: 0; bottom: 0; right: 0; left: 0;">
                <style>
                    {styles}
                </style>
                <h1>{name}</h1>
                <div className="fb-background"></div>
                <div className="fb-main">
                    <div className="fb-save-wrapper">
                        <button className="js-save-form fb-button" disabled="disabled">All changes saved</button>
                    </div>
                    <div className="fb-left">
                        <ul className="fb-tabs">
                            <li className={ this.isCurrentState(FBMainState.CREATE) ? 'active' : ''}>
                                <a data-target="#addField"
                                   onClick={ () => this.setSelected(FBMainState.CREATE) }>Add new field</a>
                            </li>
                            <li className={ this.isCurrentState(FBMainState.EDIT) ? 'active' : ''}>
                                <a data-target="#editField"
                                   onClick={ () => this.setSelected(FBMainState.EDIT) }>Edit field</a>
                            </li>
                        </ul>

                        <div className="fb-tab-content">
                            <div className={ classcat([
                                     this.isCurrentState(FBMainState.CREATE) ? 'active' : '',
                                     'fb-tab-pane'
                                 ] ) }
                                 id="addField">
                                <div className="fb-add-field-types">
                                    <div className="section">

                                        <a data-field-type="text" className="fb-button ui-draggable">
                                            <span className="symbol"><span className="fa fa-font"/></span> Text
                                        </a>

                                        <a data-field-type="paragraph" className="fb-button ui-draggable">
                                            <span className="symbol">¶</span> Paragraph
                                        </a>

                                        <a data-field-type="checkboxes" className="fb-button ui-draggable">
                                            <span className="symbol">
                                                <span className="fa fa-square-o"/>
                                            </span> Checkboxes
                                        </a>

                                        <a data-field-type="radio" className="fb-button ui-draggable">
                                            <span className="symbol">
                                                <span className="fa fa-circle-o"/>
                                            </span> Multiple Choice
                                        </a>

                                        <a data-field-type="date" className="fb-button ui-draggable">
                                            <span className="symbol">
                                                <span className="fa fa-calendar"/>
                                            </span> Date
                                        </a>

                                        <a data-field-type="dropdown" className="fb-button ui-draggable">
                                            <span className="symbol">
                                                <span className="fa fa-caret-down"/>
                                            </span> Dropdown
                                        </a>

                                        <a data-field-type="time" className="fb-button ui-draggable">
                                            <span className="symbol">
                                                <span className="fa fa-clock-o"/>
                                            </span> Time
                                        </a>

                                        <a data-field-type="number" className="fb-button ui-draggable">
                                            <span className="symbol">
                                                <span className="fa fa-number">123</span>
                                            </span> Number
                                        </a>

                                        <a data-field-type="website" className="fb-button ui-draggable">
                                            <span className="symbol">
                                                <span className="fa fa-link"/>
                                            </span> Website
                                        </a>

                                        <a data-field-type="email" className="fb-button ui-draggable">
                                            <span className="symbol">
                                                <span className="fa fa-envelope-o"/>
                                            </span> Email
                                        </a>

                                        <a data-field-type="price" className="fb-button ui-draggable">
                                            <span className="symbol">
                                                <span className="fa fa-usd"/>
                                            </span> Price
                                        </a>

                                        <a data-field-type="address" className="fb-button ui-draggable">
                                            <span className="symbol">
                                                <span className="fa fa-home"/>
                                            </span> Address
                                        </a>

                                    </div>

                                    <div className="section">

                                        <a data-field-type="section_break" className="fb-button ui-draggable">
                                            <span className="symbol">
                                                <span className="fa fa-minus"/>
                                            </span> Section Break
                                        </a>

                                    </div>
                                </div>
                            </div>

                            <div className={ classcat([
                                    this.isCurrentState(FBMainState.EDIT) ? 'active' : '',
                                    'fb-tab-pane'
                                 ] ) }
                                 id="editField">
                                <div className="fb-edit-field-wrapper">
                                    <div className="edit-response-field">
                                        <div className="fb-field-label">
                                            <span data-rv-text="model.label">
                                                Do you have a website?
                                            </span>
                                            <code className="field-type" data-rv-text="model.field_type">
                                                website
                                            </code>
                                            <span className="fa fa-arrow-right pull-right"/>
                                        </div>
                                        <div className="fb-edit-section-header">Label</div>

                                        <div className="fb-common-wrapper">
                                            <div className="fb-label-description">
                                                <input type="text" data-rv-input="model.label"/>
                                                <textarea data-rv-input="model.field_options.description"
                                                          placeholder="Add a longer description to this field">
                                                </textarea>
                                            </div>
                                            <div className="fb-common-checkboxes">
                                                <label>
                                                    <input type="checkbox" data-rv-checked="model.required"/>
                                                    Required
                                                </label>
                                            </div>
                                            <div className="fb-clear"/>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="fb-right"/>
                    <div className="fb-clear"/>
                </div>
            </div>
        );
    }

}

customElements.define('form-builder', FBMain);
