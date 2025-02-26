import { StackSettings } from "../utilities/utility-helpers.js";
export default class Chunk {
    constructor(scene, x, y, chunkSize) {
        this.scene = scene;
        this.x = x;
        this.y = y;
        this.chunkSize = chunkSize;
        this.tileSize = StackSettings.TileSize;
        this.tiles = [];
        this.generate();
    }
}
