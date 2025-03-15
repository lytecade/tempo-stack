import Resources from "../utilities/utility-resources.js"
import Stack from "../objects/object-stack.js";
import { StackSettings, Helpers } from "../utilities/utility-helpers.js";
export default class ActionScene extends Phaser.Scene {
    constructor() {
        super({ key: 'ActionScene' });
    }
    preload() {
        Resources.createResources(this);
    }
    create() {
        Resources.createBackgrounds(this, "image-background");
        this.tiles = [];
        this.tileSwitch = [];
        this.mainStacks = [];
        this.generateMap();
    }
    update() {
        if (this.mainStacks.length > 0) {
            this.mainStacks[this.mainStacks.length - 1].update();
            if (this.mainStacks[this.mainStacks.length - 1].movementState === false) {
                let currentSize = this.mainStacks[this.mainStacks.length - 1].currentSize;
                let currentFrame = this.mainStacks[this.mainStacks.length - 1].currentFrame;
                let currentX = this.mainStacks[this.mainStacks.length - 1].sprite.x;
                let currentY = this.mainStacks[this.mainStacks.length - 1].sprite.y;
                if (this.mainStacks.length > 1) {
                    let stackRecent = Math.round(this.mainStacks[this.mainStacks.length - 1].sprite.x);
                    let stackPrevious = Math.round(this.mainStacks[this.mainStacks.length - 2].sprite.x);
                    let stackAbs = (stackRecent - stackPrevious);
                    if (stackAbs <= 0) {
                        currentSize = currentSize - Math.abs(stackAbs); 
                    } else {
                        currentSize = currentSize - stackAbs;
                    }
                    currentFrame = 32 - currentSize;
                }
	        if (currentFrame >= 32) {
	            console.log("Game Over");
	        } else {
	            this.mainStacks.push(new Stack(this, currentX, currentY - 8, currentFrame, currentSize));
	        }
            }
        }
    }
    generateMap() {
        const tileRows = Math.min(Math.floor(StackSettings.TileMaxHeightBounds / StackSettings.TileSize));
        const widthInTiles = Math.min(Math.floor(StackSettings.TileMaxWidthBounds / StackSettings.TileSize));
        for (let row = 0; row < tileRows; row++) {
            this.tiles[row] = [];
            for (let column = 0; column < widthInTiles; column++) {
                if (row === (tileRows - 1)) {
                    if (column == 0) {
                        this.tiles[row][column] = 3;
                    } else if (column == (widthInTiles - 1)) {
                        this.tiles[row][column] = 5;
                    } else {
                        this.tiles[row][column] = 4;
                    }
                } else {
                    if (column == 0) {
                        this.tiles[row][column] = 1;
                    } else if (column == (widthInTiles - 1)) {
                        this.tiles[row][column] = 2;
                    } else {
                        this.tiles[row][column] = 0;
                    }
                }
            }
        }
        const map = this.make.tilemap({
            data: this.tiles,
            tileWidth: StackSettings.TileSize,
            tileHeight: StackSettings.TileSize
        });
        this.groundLayer = map.createLayer(0, map.addTilesetImage("tileset-stacks", "tileset-stacks"), this.x, 0).setCollisionByExclusion([-1, 0]);
        if (this.mainStacks.length === 0) {
            this.mainStacks.push(new Stack(this, 32, 60, 0, 32));
        }
    }
    destroy() {
        if (this.groundLayer) {
            this.groundLayer.destroy();
        }
    }

}
