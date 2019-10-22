import RoleData from "./RoleData";
import VimpireBulletData from "./bullet/VimpireBulletData";
import ConcrectBullet from "./bullet/ConcrectBullet";

const {ccclass, property} = cc._decorator;

@ccclass
export default class PlayerData extends RoleData {
    
    protected m_hurthp:number = 0;
    constructor()
    {
        super();
        this.Hp = 1000;
        this.attack = 100;
        this.m_hurthp = 0;
        this.bullet = new VimpireBulletData(new ConcrectBullet());
    }

    public get atkValue() : number {
        return this.attack + this.bullet.atkValue();
    }
    public beHurtHp(_value:number)
    {
        this.Hp -= _value;
        this.m_hurthp = _value;
    }
}
