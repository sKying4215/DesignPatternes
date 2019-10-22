import BasePrefabs from "./BasePrefabs";
import PfListItem from "../UI/PfListItem";

const {ccclass, property} = cc._decorator;

@ccclass
export default abstract class BaseView extends BasePrefabs {

    init () {

    }
    protected abstract  onSendRequest(_cmd:string,_data);
    protected abstract  onHandleResponse(_cmd:string,_data);


    public abstract onItemClick(_item:PfListItem);
    public abstract onbuyItemClick(_item:PfListItem);

    public rankSort()
    {
        console.log("this is BaseView");
    }
}
