export const StackSettings = {
    TileSize: 8,
    TileMaxWidthBounds: 72,
    TileMaxHeightBounds: 552,
    TileBuffer: 3,
};
export const SpeedTypes = {
    Normal: 25,
    SpeedTwo: 40,
    SpeedThree: 55,
    SpeedFour: 70,
    SpeedFive: 85,
    SpeedMax: 100,
};

export class Helpers {
    static isValueEmpty = (resourceValue) => {
        if (resourceValue === 0 || resourceValue === undefined || resourceValue === "") {
            return true;
        }
        return false;
    }
    static getOutOfBoundsCount = (objectList, xValue) => {
        let baseIndexCount = 0;
        for (let i = 0; i < objectList.length; i++) {
            if (objectList[i].sprite.x < xValue) {
                baseIndexCount = baseIndexCount + 1;
            }
        }
        return baseIndexCount;
    }
    static createResources = (scene) => {
        let baseResources = new Map([
            ["sprite-hud", { type: "spritesheets", name: "sprite-hud", ext: "png" }],
            ["sprite-stack", { type: "spritesheets", name: "sprite-stack", ext: "png" }],
            ["tileset-stacks", { type: "tilesets", name: "tileset-stacks", ext: "png" }]
        ]);
        for (const [key, value] of baseResources) {
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
};

