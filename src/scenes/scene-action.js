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
        for (let row = 0; row < tileRows; row++) {
            this.tiles[row] = [];
            for (let column = 0; column < widthInTiles; column++) {
                if (row === (tileRows - 1)) {
                    this.tiles[row][column] = 4;
                } else {
                    if (column == 0) {
                        this.tiles[row][column] = 7;
                    } else if (column == (widthInTiles - 1)) {
                        this.tiles[row][column] = 7;
                    } else if (column == (widthInTiles - 2)) {
                        if (row == (tileRows - 2)) {
                            this.tiles[row][column] = 5;
                        } else {
                            this.tiles[row][column] = 2;
                        }
                    } else if (column == 1) {
                        if (row == (tileRows - 2)) {
                            this.tiles[row][column] = 3;
                        } else {
                            this.tiles[row][column] = 0;
                        }
                    } else {
                        if (row == (tileRows - 2)) {
                            this.tiles[row][column] = 1;
                        } else {
                            this.tiles[row][column] = -1;
                        }
                    }
                }
            }
        }
        const map = this.make.tilemap({
            data: this.tiles,
            tileWidth: StackSettings.TileSize,
            tileHeight: StackSettings.TileSize
        });
        this.groundLayer = map.createLayer(0, map.addTilesetImage("tileset-stacks", "tileset-stacks"), this.x, 0).setCollisionByExclusion([-1, 0, 19]);
    }
    destroy() {
        if (this.groundLayer) {
            this.groundLayer.destroy();
        }
    }

}
