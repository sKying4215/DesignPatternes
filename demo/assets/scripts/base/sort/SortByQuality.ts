import SortInterface from "../interface/SortInterface";
import SortDecorator from "./SortDecorator";

const {ccclass, property} = cc._decorator;

@ccclass
export default class SortByQuality extends SortDecorator {

    constructor(_sort?:SortInterface){
        super(_sort);
    };

    public compare(_left:any,_right:any)
    {
        return _left.quality - _right.quality;
    }
}
