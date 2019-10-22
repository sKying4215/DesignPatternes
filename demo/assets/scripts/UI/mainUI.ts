import BasePanel from "../base/BasePanel";
import UIManager from "../base/UIManager";
import SortByID from "../base/sort/sortByID";
import SortByName from "../base/sort/SortByName";
import SortByQuality from "../base/sort/SortByQuality";
import PlayerData from "../data/PlayerData";
import EnemeyData from "../data/EnemeyData";
import PfListItem from "./PfListItem";



const {ccclass, property} = cc._decorator;

@ccclass
export default class mainUI extends BasePanel {

    @property(cc.Label)
    lab_money: cc.Label = null;
    @property(cc.Label)
    lab_energy: cc.Label = null;
    @property(cc.Node)
    node_layout: cc.Node = null;
    @property(cc.Prefab)
    pf_listItem: cc.Prefab = null;

    private m_items = [
        {id:1,name:"aaaa",quality:5},
        {id:4,name:"as",quality:2},
        {id:5,name:"ab",quality:3},
        {id:2,name:"ff",quality:5},
        {id:3,name:"sss",quality:4},
        {id:7,name:"rrr",quality:1},
        {id:8,name:"aab",quality:2},
        {id:6,name:"qqq",quality:5},
        {id:9,name:"ase",quality:4},
        {id:10,name:"asd",quality:5},
        {id:11,name:"aaaa",quality:3},
    ];

    public m_len = 0;
    start () {
        UIManager.Instance.addMianUI(this);

        // let _sort = new SortByID(new SortByQuality(new SortByName()));
        // _sort.sortList(this.m_items);
        // console.log(this.m_items);
        let _sort1 = new SortByQuality(new SortByName(new SortByID()));
        _sort1.sortList(this.m_items);
        console.log(this.m_items);
        this.m_len = this.m_items.length-1; 
        for (let i = 0; i < this.m_items.length; i++) {
            let _node = cc.instantiate(this.pf_listItem);
            let _script = _node.getComponent(PfListItem);
            _script.create(i,this.m_items[i],this);
            this.node_layout.addChild(_node);
        }

        let _player = new PlayerData();
        let _rival = new EnemeyData();
        _player.bullet.attackCollider(_player,_rival);
        console.log("    playerData",_player,"\n  RivalData: ",_rival);
        _rival.bullet.attackCollider(_rival,_player);

    }
    private m_curListItem:PfListItem = null;
    public onItemClick(_item:PfListItem,)
    {
        this.m_curListItem = _item;
        console.log("curClick item    id:",this.m_curListItem.data.id,
                                "    name: ",this.m_curListItem.data.name,
                                "    quality: ",this.m_curListItem.data.quality);
    }
    public onbuyItemClick(_item:PfListItem)
    {
        this.m_curListItem = _item;
        console.log("curClick item    id:",this.m_curListItem.data.id,
                                "    name: ",this.m_curListItem.data.name,
                                "    quality: ",this.m_curListItem.data.quality);
    }


    public updataMainUI() {
        this.lab_money.string = (Math.floor(Math.random()*1000)).toString();
        this.lab_energy.string = (Math.floor(Math.random()*100)).toString();
        UIManager.Instance.refreshOtherUI(this.lab_money.string);

    }

    // update (dt) {}
}
