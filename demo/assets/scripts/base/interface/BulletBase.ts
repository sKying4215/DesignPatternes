import RoleData from "../../data/RoleData";

export default interface BulletBase 
{
    move();
    attackCollider(_self:RoleData,_rival:RoleData);
    atkValue():number;
}
