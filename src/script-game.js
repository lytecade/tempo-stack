import InitScene from "./scenes/scene-init.js";
import ActionScene from "./scenes/scene-action.js";
const game = new Phaser.Game({
    parent: "game",
    type: Phaser.AUTO,
    width: 72,
    height: 120,
    pixelArt: true,
    scene: [InitScene, ActionScene],
    physics: {
        default: "arcade",
        arcade : {
            debug: false
        }
    },
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
    }
});

