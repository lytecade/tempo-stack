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
        for (let i = 0; i < scene.hudCounters.length; i++) {
            scene.hudCounterImages.push(scene.add.image(18 + (i * 4), 6, 'sprite-hud', 0).setOrigin(1, 0).setScrollFactor(0));
        }
    }
}
