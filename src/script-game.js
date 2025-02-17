import InitScene from "./scenes/scene-init.js";
import ActionScene from "./scenes/scene-action.js";
const game = new Phaser.Game({
    parent: "game",
    type: Phaser.AUTO,
    width: 120,
    height: 72,
    pixelArt: true,
    scene: [InitScene, ActionScene],
    physics: {
        default: "arcade"
    },
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
    }
});

