window.ECS = window.ECS||{};
window.ECS.Components = window.ECS.Components|| {};
window.ECS.System = window.ECS.System|| {};

ECS.System.decay = function systemDecay ( entities ) {
    //处理实体信息
    for (const _id in entities) {
        var _curEntity = entities[_id];
        if (_curEntity.components.health) {
            _curEntity.components.health.value +=  10;
            _curEntity.print();
        }
        
    }
}
ECS.System.move = function systemMove ( entities ) {
    //处理实体信息
    for (const _id in entities) {
        var _curEntity = entities[_id];
        if (_curEntity.components.position) {
            _curEntity.components.position = cc.v2(Math.floor(Math.random()*1200-600),Math.floor(Math.random()*600-300));
            _curEntity.node.position = _curEntity.components.position;
            _curEntity.print();
        }
        
    }
}
ECS.System.skin = function systemSkin ( entities ) {
    //处理实体信息
    for (const _id in entities) {
        var _curEntity = entities[_id];
        if (_curEntity.components.appearance) {
            _curEntity.components.appearance.size = Math.floor(5+Math.random()*10)/10;
            _curEntity.node.scale = _curEntity.components.appearance.size;
            _curEntity.components.appearance.colors = cc.color(Math.floor(Math.random()*255),Math.floor(Math.random()*255),Math.floor(Math.random()*255));
            _curEntity.node.color = _curEntity.components.appearance.colors;
            _curEntity.print();
        }
        
    }
}