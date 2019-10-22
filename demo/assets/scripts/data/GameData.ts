import PlayerData from "./PlayerData";

const {ccclass, property} = cc._decorator;

@ccclass
export default class GameData {

    protected m_instance:GameData = null;
    public get Instance():GameData
    {
        if (this.m_instance == null) {
            this.m_instance = new GameData();
        }
        return this.m_instance;
    }
    public get playerdata():PlayerData
    {
        return null;
    }
}
