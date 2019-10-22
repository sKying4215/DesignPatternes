import mainUI from "../UI/mainUI";
import CryptoJS =  require('../md5/CryptoJS');
import otherUI from "../UI/otherUI";

const {ccclass, property} = cc._decorator;

@ccclass
export default class UIManager {

    private static m_instance:UIManager = null;  
    public static get Instance() : UIManager {
        if (UIManager.m_instance == null) {
            UIManager.m_instance = new UIManager();
        }
        return UIManager.m_instance;
    }
    protected secretKey = "1123";

    /**
     * setUpdataMianUI 
     * 
     */
    private m_otherUI:otherUI = null;
    public addOtherUI (_class:otherUI) {
        this.m_otherUI = _class;
    }
    public remonveOtherUI()
    {
        this.m_otherUI = null;
    }

    public refreshOtherUI (_str:string) {
        if (this.m_otherUI  == null) {
            return;
        }
        this.m_otherUI.updataBtnLabUI(_str);
    }

    /**
     * 中介者模式
     * 用一个中介对象来封装一系列的对象交互，
     * 中介者使各对象不需要显式地相互引用，从而使其耦合松散，而且可以独立地改变它们之间的交互。
     * 中介者模式又称为调停者模式，它是一种对象行为型模式。
     */
    public refreshMainUI () {
        if (this.m_mainUI  == null) {
            return;
        }
        this.m_mainUI.updataMainUI();
    }

    /**
     * setUpdataMianUI 
     * 
     */
    private m_mainUI:mainUI = null;
    public addMianUI (_class:mainUI) {
        this.m_mainUI = _class;
    }
    public remonveMainUI()
    {
        this.m_mainUI = null;
    }

    public encrypValue(_value:string)
    {
        return CryptoJS.AES.encrypt(_value,this.secretKey,256).toString();
    }
    public decrypValue(_value:string)
    {
        return CryptoJS.AES.decrypt(_value,this.secretKey,256).toString(CryptoJS.enc.Utf8);
    }
    

}
