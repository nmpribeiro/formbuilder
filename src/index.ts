import { FormBuilder } from './FormBuilder';
import { MyComponent } from './components';
import { UtilityService } from './utilities';
// Widgets are exported for every import

console.log('Index.ts');

// UniteLabs.Components
(window as any).UniteLabs = {
    FormBuilder,
    UtilityService,
    Components: {
        MyComponent
    }
};
