import Stack from "../objects/object-stack.js";
import { StackSettings, Helpers } from "../utilities/utility-helpers.js";
import UIs from "../utilities/utility-uis.js"
export default class ActionScene extends Phaser.Scene {
    constructor() {
        super({ key: 'ActionScene' });
    }
    preload() {
        Helpers.createResources(this);
    }
    create() {
        this.textures.generate('textureBackground', {
            data: ['DD'],
            pixelWidth: 1,
            pixelHeight: 1
        });
        this.add.image(0, 0, 'textureBackground').setOrigin(0, 0).setScrollFactor(0).setDisplaySize(120, 120);
        this.game.scale.fullScreenTarget = document.documentElement; 
        this.tiles = [];
        this.tileSwitch = [];
        this.mainStacks = [];
        this.generateMap();
        UIs.initHudCounter(this);
        UIs.setAudioStatus(this, this.game.registry);
        UIs.setAudioBar(this, this.audioBar, this.game);
        UIs.setScreenStatus(this, this.game);
        UIs.setScreenBar(this, this.screenBar, this.game);
    }
    update() {
        UIs.setAudioUpdate(this);
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
                    if (stackRecent < stackPrevious) {
                        currentSize = currentSize - (stackPrevious - stackRecent)
                    } else {
                        let previousTotal = this.mainStacks[this.mainStacks.length - 2].currentSize + stackPrevious;
                        let currentTotal = currentSize + stackRecent;
                        let deductionValue = (currentTotal - previousTotal);
                        currentSize = deductionValue < 0 ? currentSize : (currentSize - deductionValue);
                    }
                    currentFrame = 32 - currentSize;
                }
	        if (currentFrame >= 32) {
                    this.physics.pause();
                    this.time.delayedCall(3000, () => {
                      this.scene.restart();
                    }, [], this);
	        } else {
                    UIs.updateHudCounter(this);
	            this.mainStacks.push(new Stack(this, currentX, currentY - 8, currentFrame, currentSize, this.mainStacks.length));
                    if (currentY < (StackSettings.TileMaxHeightBounds - 64)) {
                        this.setCamera((this.mainStacks.length * 8) - 56);
                    }
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
            this.mainStacks.push(new Stack(this, 32, Math.min(StackSettings.TileMaxHeightBounds - 12), 0, 32, this.mainStacks.length));
            this.setCamera(0);
        }
    }
    setCamera(offsetY) {
        this.cameras.main.setBounds(0, Math.min((StackSettings.TileMaxHeightBounds - this.sys.game.config.height) - offsetY), this.sys.game.config.width, this.sys.game.config.height);
    }
    destroy() {
        if (this.groundLayer) {
            this.groundLayer.destroy();
        }
    }

}
