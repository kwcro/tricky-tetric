import {Brick} from "../objects/Brick";

export class GameScene extends Phaser.Scene{

    private bg: Phaser.GameObjects.TileSprite;
    private brick: Brick;

    constructor() {
        super({
            key: "GameScene"
        });
    }

    init(): void {
        // objects
        this.bg = null;


        this.brick = new Brick({
            scene: this,
            x: 50,
            y: 100,
            key: "brick"
        });

        // variables
    }

    create(): void {
        this.bg = this.add.tileSprite(200, 300, 400, 600, "background");
    }

    update(): void {
            this.bg.tilePositionX -= 0.5;
    }
}