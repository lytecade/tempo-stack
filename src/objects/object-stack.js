import { SpeedTypes } from "../utilities/utility-helpers.js";
export default class Stack {
    constructor(scene, x, y, currentFrame, currentSize, currentCount) {
        this.x = x;
        this.y = y;
        this.scene = scene;
        this.currentFrame = currentFrame;
        this.currentSize = currentSize;
        this.currentCount = currentCount;
        this.currentSpeed = SpeedTypes.Normal;
        this.sprite = scene.physics.add.sprite(x, y, "sprite-stack", currentFrame).setMaxVelocity(60, 60).setSize(currentSize, 8).setOrigin(0.5, 0.5).setOffset(0, 0);
        this.spriteCollider = scene.physics.world.addCollider(this.sprite, scene.groundLayer);
        this.movementState = true;
        this.movementRight = true;
        this.pointerDownFlag = false;
        const { ENTER, SPACE } = Phaser.Input.Keyboard.KeyCodes; 
        this.keys = scene.input.keyboard.addKeys({ enter: ENTER, space: SPACE });
    }
    update() {
        const { keys, sprite } = this; 
        if (sprite.body) {
            this.scene.input.on('pointerdown', () => {
                this.pointerDownFlag = true;
            });
            if (this.sprite.body.blocked.left) {
                this.movementRight = true;
            } else if (this.sprite.body.blocked.right) { 
                this.movementRight = false;
            }
            if (this.movementState === true) {
                if (Phaser.Input.Keyboard.JustDown(keys.space) || Phaser.Input.Keyboard.JustDown(keys.enter) || this.pointerDownFlag === true) {
                    this.movementState = false;
                    this.pointerDownFlag = false;
                }
            }
            this.currentSpeed = this.getSpeed(this.currentCount, this.currentSpeed);
            sprite.body.setVelocityX(this.movementState ? (this.movementRight === true ? this.currentSpeed : -this.currentSpeed) : 0);
        }
    }
    getSpeed(currentCount, currentSpeed) {
        let speedFactor = Math.abs(currentCount - (currentCount % 4));
        let returnSpeed;
        switch (speedFactor) {
            case 16:
                returnSpeed = SpeedTypes.SpeedFive; 
                break;
            case 12:
                returnSpeed = SpeedTypes.SpeedFour; 
                break;
            case 8:
                returnSpeed = SpeedTypes.SpeedThree; 
                break;
            case 4:
                returnSpeed = SpeedTypes.SpeedTwo; 
                break;
            default:
                returnSpeed = (speedFactor >= 16) ? SpeedTypes.SpeedMax : currentSpeed; 
                break;
        }   
        return returnSpeed;
    }
}
