import { SpeedTypes } from "../utilities/utility-helpers.js";
export default class Stack {
    constructor(scene, x, y, currentFrame) {
        this.x = x;
        this.y = y;
        this.scene = scene;
        this.currentFrame = currentFrame;
        this.sprite = scene.physics.add.sprite(x, y, "sprite-stack", currentFrame).setMaxVelocity(60, 60).setSize(32, 8);
        this.spriteCollider = scene.physics.world.addCollider(this.sprite, scene.groundLayer);
        this.movementState = true;
        this.movementRight = true;
        const { ENTER, SPACE } = Phaser.Input.Keyboard.KeyCodes; 
        this.keys = scene.input.keyboard.addKeys({ enter: ENTER, space: SPACE });
    }
    update() {
        const { keys, sprite } = this; 
        if (sprite.body) {
            if (this.sprite.body.blocked.left) {
                this.movementRight = true;
            } else if (this.sprite.body.blocked.right) { 
                this.movementRight = false;
            }
            if (this.movementState === true) {
                if (Phaser.Input.Keyboard.JustDown(keys.space) || Phaser.Input.Keyboard.JustDown(keys.enter)) {
                    this.movementState = false;
                }
            }
            sprite.body.setVelocityX(this.movementState ? (this.movementRight === true ? SpeedTypes.Normal : -SpeedTypes.Normal) : 0);
        }
    }
}
