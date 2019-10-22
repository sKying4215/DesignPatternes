import BasePanel from "../base/BasePanel";
import PfListItem from "./PfListItem";
import UIManager from "../base/UIManager";


const {ccclass, property} = cc._decorator;

@ccclass
export default class otherUI extends BasePanel {

    @property(cc.Label)
    lab_btn: cc.Label = null;

    start () {
        UIManager.Instance.addOtherUI(this);
    }
    public onOKBtnClick()
    {
        UIManager.Instance.refreshMainUI();
    }
    public onItemClick(_item:PfListItem)
    {

    }
    updataBtnLabUI(_str:string)
    {
        this.lab_btn.string = _str;
    }

    // update (dt) {}
}
