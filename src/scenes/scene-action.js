import Resources from "../utilities/utility-resources.js"
export default class ActionScene extends Phaser.Scene {
    constructor() {
        super({ key: 'ActionScene' });
    }
    preload() {
        Resources.createResources(this);
    }
    create() {
        console.log("Run Create Action");
    }
    update() {
        console.log("Run Update Action");
    }
}
