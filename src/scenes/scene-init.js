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
        const randomNumber = Math.floor(Math.random() * 100);
        console.log(`Run Update: ${randomNumber}`);
    }
}
