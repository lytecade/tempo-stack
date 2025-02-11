export default class Stack {
    constructor(scene, x, y) {
        this.scene = scene;
        this.sprite = scene.physics.add.sprite(x, y, "sprite-stack", 0).setMaxVelocity(60, 60).setSize(32, 8);
    }
}
