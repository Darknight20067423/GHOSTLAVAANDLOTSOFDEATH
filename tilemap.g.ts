// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`14001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003050c00000000000000000000000000000000000a060b00000000000000000000000003050400000a060b0000000000000000000000000a060b00000a060b0000000000000003050400000a060b00000a060b000000000000000a060b00000a060b00000a060b000003050400000a060b00000a060b00000a060b00000a060b00000a060b00000a060b00000a060b00000a060b00000a060b00000a060b00000a060b00000a060b02010a060b01020a060b02010a060b01020a060b01020a060b02010a060b01020a060b02010907080201090708010209070802010907080102`, img`
....................
....................
....................
....................
...............22...
...............222..
..........222..222..
..........222..222..
.....222..222..222..
.....222..222..222..
222..222..222..222..
222..222..222..222..
222..222..222..222..
222..222..222..222..
222..222..222..222..
222..222..222..222..
`, [myTiles.transparency16,sprites.dungeon.hazardLava0,sprites.dungeon.hazardLava1,sprites.dungeon.darkGroundNorthWest0,sprites.dungeon.darkGroundNorthEast0,sprites.dungeon.darkGroundNorth,sprites.dungeon.darkGroundCenter,sprites.dungeon.darkGroundSouth,sprites.dungeon.darkGroundSouthEast0,sprites.dungeon.darkGroundSouthWest0,sprites.dungeon.darkGroundWest,sprites.dungeon.darkGroundEast,sprites.dungeon.chestClosed], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
