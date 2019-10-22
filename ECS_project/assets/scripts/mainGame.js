
var ShaderUtils = require("ShaderUtils");
var async = require("async");
var CryptoJS = require('encrypt/CryptoJS');
cc.Class({
    extends: cc.Component,

    properties: {
        pf_player:
        {
            type:cc.Prefab,
            default:null,
        },
        pf_enemy:
        {
            type:cc.Prefab,
            default:null,
        },

        spr_shaderTest:
        {
            type:cc.Sprite,
            default:null,
        },

        interval : 0,
        duration : 5,
        secretKey : "abcd",
    },
    // get secretKey()
    // {
    //     return "abcdefg";
    // },


    
    encryptValue(_value)
    {    
        return CryptoJS.AES.encrypt(_value,this.secretKey,256).toString();
    },
    decryptValue(_value)
    {
        return CryptoJS.AES.decrypt(_value,this.secretKey,256).toString(CryptoJS.enc.Utf8);
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {


        /**
         * 加密，解密
         */
        let _str = this.encryptValue("100");
        console.log("      encrypt:",_str);
        _str = this.decryptValue(_str);
        console.log("        decrypt:",_str);

        /**
         * ECS模式
         */
        // 启动系统
        // ----------------------------------
        this.systems = [
            ECS.System.decay,
            ECS.System.move,
            ECS.System.skin,
        ];
        var _palyer = cc.instantiate(this.pf_player);  
        _palyer.parent = this.node; 
        for (let i = 0; i < 10; i++) {
           let _enemy = cc.instantiate(this.pf_enemy);   
           _enemy.parent = this.node; 
        }

        /**
         * shader去色
         */
        ShaderUtils.setShader(this.spr_shaderTest,"gray");

        /**
         * 同时最多有多少个任务在执行
         * 第一个参数为执行列表
         * 第二个参数为同时执行的个数
         * 第三个参数为执行方法
         * 目的是为了防止多个数列表事件同时执行带来的效率问题
         * 适用于列表刷新等不需要同步完成，允许分别不同时完成的功能
         */
        async.eachLimit([1,2,3,4,5,6],  5,  (index,cb)  =>  {
 
            console.log("    eachLimit:   index:",index,"    cb:",cb);
        });

        /**
         * 这里面的原理是，当Creator使用DOM的Image对象去加载一个图片资源的时候，
         * 微信底层的引擎会解码图片数据，同时往GPU上传一份纹理，
         * 然后引擎的Sprite在渲染的时候会使用这个DOM Image再生成一份GPU纹理并上传，
         * 导致GPU里面存在双份纹理。使用 Image.scr = '' 
         * 可以释放掉GPU里面多出来的一份纹理，同时也会释放CPU端解码的纹理内存。
         * 所以，基本上对 Image对象调用了 src = '' 这个操作，这个Image对象占用的内存就释放干净了。
         */
        cc.game.once(cc.game.EVENT_RENDERER_INITED,()=>{
            let _oldHandleLoadedTexture = cc.Texture2D.prototype.handleLoadedTexture;
            let optimizedHandleLoadedTexture = function(premultiplied){
                _oldHandleLoadedTexture.call(this,premultiplied);
                this._image,src = "";
            }

            cc.Texture2D.prototype.handleLoadedTexture = optimizedHandleLoadedTexture;
        });
    },

        // 游戏主进程
    // ----------------------------------
    gameLoops (){
        let len = this.systems.length
        for(var i=0; i < len; i++){
            // 启动所有系统
            this.systems[i](ECS.entities);
        }
    },
    update (dt) {
        if (this.interval>=this.duration) {
            this.gameLoops();
            this.interval = 0;
            return;
        }
        this.interval += dt;
    },
});
