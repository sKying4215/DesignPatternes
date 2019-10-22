import BulletData from "./BulletData";
import RoleData from "../RoleData";
import BulletBase from "../../base/interface/BulletBase";

const {ccclass, property} = cc._decorator;

@ccclass
export default class HPBulletData extends BulletData{

    private m_hpatk:number = 0;
    constructor(_bullet?:BulletBase)
    {
        super(_bullet);
        this.m_hpatk = 0;
    }
    move()
    {

    }
    attackCollider(_self:RoleData,_rival:RoleData)
    {
        this.m_hpatk = Math.ceil(_self.Hp/10);
        super.attackCollider(_self,_rival);  
    }
    atkValue():number
    {
        return this.atkvalue + this.m_hpatk;
    }
}
