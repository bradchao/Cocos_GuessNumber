var MainLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        this._super();


        return true;
    }
});

var MainScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new MainLayer();
        this.addChild(layer);
    }
});

