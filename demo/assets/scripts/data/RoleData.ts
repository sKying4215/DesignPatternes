import RoleBase from "../base/interface/RoleBase";
import BulletBase from "../base/interface/BulletBase";
import UIManager from "../base/UIManager";

const {ccclass, property} = cc._decorator;

@ccclass
export default abstract class RoleData implements RoleBase {
    id:number = -1;
    speed:number = 0;
    private hp:string = "";
    attack:number = 0;
    bullet:BulletBase = null;
    protected abstract m_hurthp:number;

    
    public get Hp() : number {
        return Number(UIManager.Instance.decrypValue(this.hp)); 
    }
    
    public set Hp(v : number) {
        this.hp = UIManager.Instance.encrypValue(v.toString());
    }
    
    
    move()
    {

    }
    skill(_rival:any)
    {

    }
    
    public get atkValue() : number {
        return this.attack;
    }

    
    public get hurtHP() : number {
        return this.m_hurthp;
    }

    public abstract beHurtHp(_value:number);
    
    
    
}
