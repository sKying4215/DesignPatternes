import BulletBase from "../../base/interface/BulletBase";
import RoleData from "../RoleData";

const {ccclass, property} = cc._decorator;

@ccclass
export default abstract class BulletData implements BulletBase{

    id:number = -1;
    speed:number = 0;
    protected readonly atkvalue:number = 0;
    private m_bullet:BulletBase ;
    constructor(_bullet?:BulletBase)
    {
        this.m_bullet = _bullet;
        this.atkvalue = 100;
    }

    attackCollider(_self:RoleData,_rival:RoleData)
    {
        this.m_bullet.attackCollider(_self,_rival);
    }
    move()
    {

    }
    atkValue():number
    {
        return this.atkvalue;
    }
}
