export default class Resources {
    static BaseResources = new Map([
        // Items go here
    ]);
    static createResources = (scene) => {
        for (const [key, value] of this.BaseResources) {
            let resourcePath = `assets/${value.type}/${value.name}.${value.ext}`;
            switch (value.type) {
                case "sounds":
                    scene.load.audio(value.name, resourcePath);
                    break;
                case "images":
                case "tilesets":
                    scene.load.image(value.name, resourcePath);
                    break;
                case "spritesheets":
                    scene.load.spritesheet(value.name, resourcePath, { frameWidth: 8, frameHeight: 8, margin: 0, spacing: 0 });
                    break;
                default:
                    break;
            }
        }
    }
    static createBackgrounds = (sceneReference, texture) => {
        sceneReference.add.image(0, 0, texture).setOrigin(0, 0).setScrollFactor(0);
    }
}

