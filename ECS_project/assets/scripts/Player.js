
cc.Class({
    extends: cc.Component,

    properties: {
        m_enity:null,
    },
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        this.m_enity = new ECS.Entity();
        this.m_enity.addComponent(new ECS.Components.Position());
        // this.m_enity.addComponent(new ECS.Components.Appearance());
        this.m_enity.addComponent(new ECS.Components.Health());
        this.m_enity.node = this.node;
        this.m_enity.print();
        ECS.entities[this.m_enity.id] = this.m_enity;
    },

});
