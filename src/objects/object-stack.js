import { SpeedTypes } from "../utilities/utility-helpers.js";
export default class Stack {
    constructor(scene, x, y) {
        this.x = x;
        this.y = y;
        this.scene = scene;
        this.sprite = scene.physics.add.sprite(x, y, "sprite-stack", 0).setMaxVelocity(60, 60).setSize(32, 8);
        this.spriteCollider = scene.physics.world.addCollider(this.sprite, scene.groundLayer);
        this.movementState = true;
        this.movementRight = true;
    }
    update() {
        const { sprite } = this;
        if (sprite.body) {
            if (this.sprite.body.blocked.left) {
                this.movementRight = true;
            } else if (this.sprite.body.blocked.right) { 
                this.movementRight = false;
            }
            sprite.body.setVelocityX(this.movementState ? (this.movementRight === true ? SpeedTypes.Normal : -SpeedTypes.Normal) : 0);
        }
    }
}
