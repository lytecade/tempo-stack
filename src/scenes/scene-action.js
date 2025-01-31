import Resources from "../utilities/utility-resources.js"
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
        this.generateMap();
    }
    update() {
        console.log("Run Update Action");
    }
    generateMap() {
        const tileRows = Math.min(Math.floor(StackSettings.TileMaxHeightBounds / StackSettings.TileSize));
        const widthInTiles = Math.min(Math.floor(StackSettings.TileMaxWidthBounds / StackSettings.TileSize));
        for (let row = 0; row < widthInTiles; row++) {
            this.tiles[row] = [];
            for (let column = 0; column < tileRows; column++) {
                this.tiles[row][column] = 0;
            }
        }
        console.log(JSON.stringify(this.tiles));
    }
}
