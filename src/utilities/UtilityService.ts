
interface WellItem {
    column: number, row: string
}

interface PlateItem {
    barcode: string,
    wellDataList: any | WellItem[]
}

export class UtilityService {

    public static updateList( list: number[] = [] ): number[] {
        const newList: number[] = [];
        list.forEach( item => newList.push( item + 1 ) );
        return newList;
    }

    /**
     * creates a unique uuid
     * Note: might not be completely unique, as it's based on randomization rather than time stamps
     * @returns random UUID
     */
    public static createUUID() {
        // http://www.ietf.org/rfc/rfc4122.txt
        const s: string[] = [];
        const hexDigits: string = '0123456789abcdef';
        for (let i = 0; i < 36; i++) {
            s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
        }
        s[14] = '4';  // bits 12-15 of the time_hi_and_version field to 0010
        s[19] = hexDigits.substr((s[19] && 0x3) || 0x8, 1);  // bits 6-7 of the clock_seq_hi_and_reserved to 01
        s[8] = s[13] = s[18] = s[23] = '-';
        return s.join('');
    }

    public static normalize(val, max, min) {
        if ((max - min) === 0) { // tends to 0
            return 1;
        }
        if (max < min) {
            return 0;
        }
        if ((val - min) === 0) {
            return 0;
        }
        return (val - min) / (max - min);
    }

    // This function allows you to pass a callback that will be executed
    // only once document.readyState meets certain conditions
    public static ready(callback) {
        const myDocument: Document = document as Document;
        if (myDocument.readyState !== 'loading') {
            callback();
        } else if (myDocument.addEventListener) {
            myDocument.addEventListener('DOMContentLoaded', callback);
        } else {
            myDocument.addEventListener('onreadystatechange', () => {
                if (myDocument.readyState !== 'loading') {
                    callback();
                }
            });
        }
    }

    public static parseMeasurementResultsIntoPlates(
        array: any[],
        barcodeIdentifier: string = 'PlateIdentifier',
        attr: string
    ): Array<any | PlateItem> {
        const plates: Array<any | PlateItem> = [];
        array.forEach(item => {
            if (item.PlateIdentifier.value) {

                // new Plate either exists (and is found) or not (and is created)
                const foundPlate: any | PlateItem = plates.find(
                    plate => plate.barcode === item[barcodeIdentifier].value
                );
                let plateItem: any | PlateItem;
                if (foundPlate) {
                    plateItem = foundPlate;
                }  else {
                    plateItem = {
                        barcode: item.PlateIdentifier.value,
                        wellDataList: []
                    };
                    plates.push(plateItem);
                }

                const newItem: any = {
                    row:            item.Row.value,
                    column:         item.Column.value
                };
                newItem[attr] = item[attr].value;

                plateItem.wellDataList.push(newItem);
            }
        });
        return plates;
    }
}
