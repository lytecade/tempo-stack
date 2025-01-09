export default class InitScene extends Phaser.Scene {
    constructor() {
        super({ key: 'InitScene' });
    }
    preload() {
        console.log("Run Preload");
    }
    create() {
        console.log("Run Create");
    }
    update() {
        this.scene.stop('InitScene');
        this.scene.start('ActionScene');
    }
}
