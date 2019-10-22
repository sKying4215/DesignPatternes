import BulletBase from "./BulletBase";

export default interface RoleBase 
{
    id:number;
    speed:number;
    attack:number;
    bullet:BulletBase;
    move();
    skill(_rival:any);
}
