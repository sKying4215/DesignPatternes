window.ECS = window.ECS||{};
window.ECS.Components = window.ECS.Components|| {};
window.ECS.System = window.ECS.System|| {};

// 外观组件
// --------------------------------------
ECS.Components.Appearance = function ComponentAppearance ( params ){
    // 外观组件主要包含颜色和大小的数据信息
    params = params || {};

    this.colors = params.colors;
    if(!this.colors){
        this.colors = {
            r: Math.floor(Math.random()*255),
            g: Math.floor(Math.random()*255),
            b: Math.floor(Math.random()*255),
        };
    }

    this.size = params.size || (0.5 + (Math.random() | 0));

    return this;
};
ECS.Components.Appearance.prototype.name = 'appearance';

// 生命值组件
// --------------------------------------
ECS.Components.Health = function ComponentHealth ( value ){
    value = value || 20;
    this.value = value;

    return this;
};
ECS.Components.Health.prototype.name = 'health';

// 坐标组件
// --------------------------------------
ECS.Components.Position = function ComponentPosition ( params ){
    params = params || {};

    // 随机生成坐标数值，

    this.x = params.x || Math.floor(Math.random()*300);
    this.y = params.y || Math.floor(Math.random()*200);

    return this;
};
ECS.Components.Position.prototype.name = 'position';

