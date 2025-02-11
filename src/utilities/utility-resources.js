export default class Resources {
    static BaseResources = new Map([
        ["image-background", { type: "images", name: "image-background", ext: "png" }],
        ["sprite-stack", { type: "spritesheets", name: "sprite-stack", ext: "png" }],
        ["tileset-stacks", { type: "tilesets", name: "tileset-stacks", ext: "png" }]
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
                    scene.load.spritesheet(value.name, resourcePath, { frameWidth: 32, frameHeight: 8, margin: 0, spacing: 0 });
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

