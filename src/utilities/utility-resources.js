export default class Resources {
    static BaseResources = new Map([
        ["sprite-hud", { type: "spritesheets", name: "sprite-hud", ext: "png" }],
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
                    let frameWidthValue = (value.name.includes("stack")) ? 32 : 8;
                    scene.load.spritesheet(value.name, resourcePath, { frameWidth: frameWidthValue, frameHeight: 8, margin: 0, spacing: 0 });
                    break;
                default:
                    break;
            }
        }
    }
    static createBackgrounds = (sceneReference) => {
        sceneReference.textures.generate('textureBackground', {
            data: ['DD'],
            pixelWidth: 1,
            pixelHeight: 1
        });
        sceneReference.add.image(0, 0, 'textureBackground').setOrigin(0, 0).setScrollFactor(0).setDisplaySize(120, 120);
    }
}

