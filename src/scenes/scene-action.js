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
        this.tileSize = StackSettings.TileSize;
        this.widthMax = StackSettings.TileMaxWidthBounds;
        const widthInTiles = Math.min(Math.floor(this.widthMax / this.tileSize));
    }
    update() {
        console.log("Run Update Action");
    }
}
