import { MyComponent } from './components/MyComponent/my-component';
import { UtilityService } from './utilities/UtilityService';
// Widgets are exported for every import

console.log('Index.ts');

const myEl: MyComponent = new MyComponent();

const mainContainer = document.getElementsByClassName('main-container').item(0);

if (mainContainer) {
    myEl.setName( 'Hello World' );
    myEl.setList( [ 0, 3, 6, 89 ] );
    mainContainer.appendChild( myEl );

    setInterval( () => {

        const newList: number[] = UtilityService.updateList( myEl.list );

        console.log('Set New List: ', newList);

        myEl.setList( newList );

        // myEl.setName( newList.toString() );

    }, 1000);
}
