import BasePrefabs from "../base/BasePrefabs";
import BaseView from "../base/BaseView";

const {ccclass, property} = cc._decorator;

@ccclass
export default class PfListItem extends BasePrefabs  {

    @property(cc.Label)
    lab_id: cc.Label = null;
    @property(cc.Label)
    lab_name: cc.Label = null;
    @property(cc.Label)
    lab_quality: cc.Label = null;

    private m_layer: BaseView = null;
    private m_index:number = -1;
    public data:any = null;

    create(_index:number,_data:any,_layer:BaseView)
    {
        this.m_index = _index;
        this.data = _data;
        this.m_layer = _layer;
        this.refreshUI();
    }
    private refreshUI()
    {
        this.lab_id.string = this.data.id;
        this.lab_name.string = this.data.name;
        this.lab_quality.string = this.data.quality;
    }
    private onItemBtnClick()
    {

        if (this.m_layer) {
            this.m_layer.onItemClick(this);
        }
    }    
    private onbuyItemBtnClick()
    {
        if (this.m_layer) {
            this.m_layer.onbuyItemClick(this);
        }
    }

}
