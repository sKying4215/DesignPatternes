import SortInterface from "../interface/SortInterface";

const {ccclass, property} = cc._decorator;

@ccclass
export default abstract class SortDecorator implements SortInterface {
    private m_sort:SortInterface = null;
    constructor(_sort?:SortInterface)
    {
        this.m_sort = _sort;
    }
    public sortList(_list:any[]|Array<any>)
    {
        if (this.m_sort) {
            this.m_sort.sortList(_list);
        }
        _list.sort(this.compare);
    };
    abstract compare(left:any,_right:any):any;
}
