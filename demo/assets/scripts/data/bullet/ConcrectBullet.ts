import BulletBase from "../../base/interface/BulletBase";
import RoleData from "../RoleData";

const {ccclass, property} = cc._decorator;

@ccclass
export default class ConcrectBullet implements BulletBase {
    move()
    {

    };
    attackCollider(_self:RoleData,_rival:RoleData)
    {
        _rival.beHurtHp(_self.atkValue);
    };
    atkValue():number
    {
        return 20;
    }
}
