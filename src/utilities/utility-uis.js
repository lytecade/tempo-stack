export default class UIs {
    static setButtonInput = (scene, buttonReference, stopKey, startKey) => {
        scene.input.on('pointerdown', function (pointer) {
            if (buttonReference.getBounds().contains(pointer.x, pointer.y)) {
                scene.scene.stop(stopKey);
                scene.scene.start(startKey);
            }
        });
    }
    static setHudCounter = (scene) => {
        scene.hudCounters = [0, 0];
        scene.hudCounterImages = [];
        scene.hudBar = scene.add.image(10, 9, 'sprite-hud', 16).setOrigin(1, 0).setScrollFactor(0);
        scene.hudJumpBarCounter = 0;
        for (let i = 0; i < scene.hudCounters.length; i++) {
            scene.hudCounterImages.push(scene.add.image(16 + (i * 4), 9, 'sprite-hud', 0).setOrigin(1, 0).setScrollFactor(0));
        }
    }
}
