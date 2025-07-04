export default class UIs {
    static setButtonInput = (scene, buttonReference, stopKey, startKey) => {
        scene.input.on('pointerdown', function (pointer) {
            if (buttonReference.getBounds().contains(pointer.x, pointer.y)) {
                scene.scene.stop(stopKey);
                scene.scene.start(startKey);
            }
        });
    }
    static initHudCounter = (scene) => {
        scene.hudCounters = [0, 0];
        scene.hudCounterImages = [];
        for (let i = 0; i < scene.hudCounters.length; i++) {
            scene.hudCounterImages.push(scene.add.image(18 + (i * 4), 6, 'sprite-hud', 0).setOrigin(1, 0).setScrollFactor(0));
        }
    }
    static updateHudCounter = (scene) => {
        scene.hudCounters[scene.hudCounters.length - 1]++;
        for (let i = scene.hudCounters.length - 1; i >= 0; i--) {
            if (scene.hudCounters[i] > 9) {
                scene.hudCounters[i] = 0;
                if (i > 0) {
            	scene.hudCounters[i - 1]++;
                }
            }
        }
        for (let i = 0; i < scene.hudCounters.length; i++) {
            scene.hudCounterImages[i].setFrame(scene.hudCounters[i]);
        }
    }
    static setScreenStatus = (scene, screenGame) => {
        if (screenGame.scale.isFullscreen) {
            scene.screenBar = scene.add.image(110, 6, 'sprite-hud', 12).setOrigin(1, 0).setScrollFactor(0).setDepth(100);
        } else {
            scene.screenBar = scene.add.image(110, 6, 'sprite-hud', 13).setOrigin(1, 0).setScrollFactor(0).setDepth(100);
        }
    }
    static setScreenBar = (scene, screenBarReference, screenGame) => {
        scene.input.on('pointerdown', function (pointer) {
            if (screenBarReference.getBounds().contains(pointer.x, pointer.y)) {
                if (!screenGame.scale.isFullscreen) {
                    screenBarReference.setFrame(12);
                    screenGame.scale.startFullscreen();
                } else {
                    screenBarReference.setFrame(13);
                    screenGame.scale.stopFullscreen();
                }
            } 
        });
    }
    static setAudioStatus = (scene, settings) => {
        if (settings.get('settingAudioActive') === undefined) {
            settings.set('settingAudioActive', true);
            scene.audioBar = scene.add.image(100, 6, 'sprite-hud', 10).setOrigin(1, 0).setScrollFactor(0).setDepth(100);
            scene.sound.volume = 1;
        } else if (settings.get('settingAudioActive') === false) {
            scene.audioBar = scene.add.image(100, 6, 'sprite-hud', 11).setOrigin(1, 0).setScrollFactor(0).setDepth(100);
            scene.sound.volume = 0;
        } else {
            scene.audioBar = scene.add.image(100, 6, 'sprite-hud', 10).setOrigin(1, 0).setScrollFactor(0).setDepth(100);
            scene.sound.volume = 1;
        }
    }
    static setAudioUpdate = (scene) => {
        if (scene.audioBar.frame.name == 11) {
            scene.sound.volume = 0;
        } else if (scene.audioBar.frame.name == 10) {
            scene.sound.volume = 1;
        }
    }
    static setAudioBar = (scene, audioBarReference, audioBarPressedReference) => {
        scene.input.on('pointerdown', function (pointer) {
            if (audioBarReference.getBounds().contains(pointer.x, pointer.y)) {
                if (audioBarPressedReference.registry.get('settingAudioActive') === true) {
                    audioBarReference.setFrame(11);
                    audioBarPressedReference.registry.set('settingAudioActive', false);
                } else {
                    audioBarReference.setFrame(10);
                    audioBarPressedReference.registry.set('settingAudioActive', true);
                }
            } 
        });
    }
}
