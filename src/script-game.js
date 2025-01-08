import InitScene from "./scenes/scene-init.js";
const game = new Phaser.Game({
    parent: "game",
    type: Phaser.AUTO,
    width: 120,
    height: 72,
    pixelArt: true,
    scene: [InitScene],
    physics: {
        default: "arcade",
        arcade: {
            gravity: {
                y: 1000
            },
        },
    },
    scale: {
        mode: Phaser.Scale.ENVELOP,
        autoCenter: Phaser.Scale.CENTER_BOTH,
    }
});

