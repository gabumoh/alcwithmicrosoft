import * as _ from "lodash";
class ArrayUtilities {
    reverseArray(array: Array<number>) {
        //return array.slice(0).reverse();
        return _.reverse(array.slice(0));
    } 
    lastItemOfArray(array: Array<number>) {
        //return array.slice(0).pop();
        return _.last(array.slice(0));
    }
    firstItemOfArray(array: Array<number>) {
        //return array.slice(0).shift();
        return _.head(array.slice(0));
    }
    concatenateArray(array1: Array<number>, array2: Array<number>) {
        //return array1.concat(array2);
        return _.concat(array1, array2);
    }
}
export default new ArrayUtilities;