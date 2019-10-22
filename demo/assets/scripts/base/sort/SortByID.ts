import SortDecorator from "./SortDecorator";
import SortInterface from "../interface/SortInterface";

const {ccclass, property} = cc._decorator;

@ccclass
export default class SortByID extends SortDecorator {

    constructor(_sort?:SortInterface){
        super(_sort);
    };

    public compare(_left:any,_right:any)
    {
        return _left.id - _right.id;
    }
}
