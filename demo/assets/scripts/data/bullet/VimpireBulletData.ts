import BulletData from "./BulletData";
import RoleData from "../RoleData";
import BulletBase from "../../base/interface/BulletBase";

const {ccclass, property} = cc._decorator;

@ccclass
export default class VimpireBulletData extends BulletData{

    private m_vimRate:number = 0;
    constructor(_bullet?:BulletBase)
    {
        super(_bullet);
        this.m_vimRate = 10;
    }
    
    move()
    {

    }
    attackCollider(_self:RoleData,_rival:RoleData)
    {
        super.attackCollider(_self,_rival);
        _self.Hp += _rival.hurtHP/this.m_vimRate;
    }
}
