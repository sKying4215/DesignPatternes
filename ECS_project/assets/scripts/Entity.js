window.ECS = window.ECS||{};
window.ECS.Components = window.ECS.Components|| {};
window.ECS.System = window.ECS.System|| {};
ECS.entities = ECS.entities ||[];

ECS.Entity = function ()
{
    //实体的唯一ID
    this.id = (new Date()).toString(16)+ECS.Entity.prototype.count;
    //实体数量
    ECS.Entity.prototype.count++;
    //实体的组件列表
    this.components = {};
    this.node = null;
    return this;
},
//实体数量初始化
ECS.Entity.prototype.count = 0,
ECS.Entity.prototype.addComponent = function addComponent(_component){
    //添加组件到实体之中
    this.components[_component.name] = _component;
    return this;
},
ECS.Entity.prototype.removeComponent = function removeComponent(_componentName)
{
    //通过引用移除组件
    //允许组件名称为一个方法或者字符串
    var _name = _componentName;
    if (typeof _componentName === "function") {
        _name = _componentName.prototype.name;
    }
    delete this.components[_name];
    return this;
},
ECS.Entity.prototype.print = function print()
{
    //输出实体信息
    console.log(JSON.stringify(this.components,null,4),"\nid:"+this.id);
}
