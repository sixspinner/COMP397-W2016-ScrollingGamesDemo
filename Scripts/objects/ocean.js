var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    //Ocean Class
    var Ocean = (function (_super) {
        __extends(Ocean, _super);
        //CONSTRUCTOR
        function Ocean() {
            _super.call(this, assets.getResult("ocean")); //because ocean is a bitmap (refer to game.ts preload)
            this._speed = 5; //change by 5px per frame; ocean speed
            this._reset();
        } //constructor
        //PRIVATE FUNCTIONS=============================================
        Ocean.prototype._checkBounds = function () {
            //check to see if top of ocean has met top of scene
            if (this.y >= 0) {
                this._reset();
            }
        };
        Ocean.prototype._reset = function () {
            this.y = -960;
        }; //reset
        //PUBLIC FUNTIONS================================================
        Ocean.prototype.update = function () {
            this.y += this._speed;
            this._checkBounds();
        }; //update
        return Ocean;
    }(createjs.Bitmap));
    objects.Ocean = Ocean; //Ocean
})(objects || (objects = {}));

//# sourceMappingURL=ocean.js.map
