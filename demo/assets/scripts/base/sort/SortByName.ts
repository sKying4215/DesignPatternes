import SortInterface from "../interface/SortInterface";
import SortDecorator from "./SortDecorator";

const {ccclass, property} = cc._decorator;

@ccclass
export default class SortByName extends SortDecorator {

    constructor(_sort?:SortInterface){
        super(_sort);
    };

    public compare(_left:any,_right:any)
    {
        if (_left.name>_right.name) {
            return 1;
        }else if (_left.name ==_right.name) {
            return 0
        }else{
            return -1;
        }
    }
}
