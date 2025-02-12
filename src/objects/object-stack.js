export default class Stack {
    constructor(scene, x, y) {
        this.x = x;
        this.y = y;
        this.scene = scene;
        this.sprite = scene.physics.add.sprite(x, y, "sprite-stack", 0).setMaxVelocity(60, 60).setSize(32, 8);
        this.spriteCollider = scene.physics.world.addCollider(this.sprite, scene.groundLayer);
    }
    update() {
        console.log("X: " + this.sprite.x);
        console.log("Y: " + this.sprite.y);
    }
}
