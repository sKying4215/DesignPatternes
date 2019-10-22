import RoleData from "./RoleData";
import ConcrectBullet from "./bullet/ConcrectBullet";
import HPBulletData from "./bullet/HPBulletData";

const {ccclass, property} = cc._decorator;

@ccclass
export default class EnemeyData extends RoleData {
    
    protected m_hurthp:number = 0;
    constructor()
    {
        super();
        this.Hp = 500;
        this.attack = 88;
        this.m_hurthp = 0;
        this.bullet = new HPBulletData(new ConcrectBullet());
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
