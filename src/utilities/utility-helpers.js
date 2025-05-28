export const StackSettings = {
    TileSize: 8,
    TileMaxWidthBounds: 120,
    TileMaxHeightBounds: 576,
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
};

