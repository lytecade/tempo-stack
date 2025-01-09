export default class ActionScene extends Phaser.Scene {
    constructor() {
        super({ key: 'ActionScene' });
    }
    preload() {
        console.log("Run Preload Action");
    }
    create() {
        console.log("Run Create Action");
    }
    update() {
        console.log("Run Update Action");
    }
}
