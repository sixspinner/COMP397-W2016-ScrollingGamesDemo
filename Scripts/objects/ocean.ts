module objects {
    //Ocean Class
    export class Ocean extends createjs.Bitmap {
        //PRIVATE INSTANCE VARIABLES    
        private _speed: number;
        
        
        //CONSTRUCTOR
        constructor() {
            super(assets.getResult("ocean")); //because ocean is a bitmap (refer to game.ts preload)
            
            
            this._speed = 5; //change by 5px per frame; ocean speed
            this._reset();
        }//constructor
        
        
        //PRIVATE FUNCTIONS=============================================
        private _checkBounds():void {
            //check to see if top of ocean has met top of scene
            if(this.y >= 0){
                this._reset();
            }
        }
        
        private _reset():void {
            this.y = -960;
        }//reset
        
        
        
        //PUBLIC FUNTIONS================================================
        public update():void {
            this.y += this._speed;
            this._checkBounds();
        }//update
        
        
    }//Ocean
}