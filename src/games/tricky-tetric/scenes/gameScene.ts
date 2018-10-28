import {Brick} from "../objects/Brick";
import Events = Phaser.Physics.Matter.Matter.Events;
import Bodies = Phaser.Physics.Matter.Matter.Bodies;
import Engine = Phaser.Physics.Matter.Matter.Engine;
import World = Phaser.Physics.Matter.Matter.World;
import Body = Phaser.Physics.Matter.Matter.Body;

export class GameScene extends Phaser.Scene {

    private bg: Phaser.GameObjects.TileSprite;
    private brick: Brick;
    private floor: Phaser.Physics.Matter.Matter.Body;
    private engine: Phaser.Physics.Matter.Matter.Engine;

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
            x: 100,
            y: 0,
            key: "brick"
        });
        this.matter.world.createDebugGraphic();
        this.matter.world.setBounds(0, 0, this.sys.canvas.width, this.sys.canvas.height);
        // variables
    }

    create(): void {
        this.bg = this.add.tileSprite(200, 300, 400, 600, "background");
        this.floor = Bodies.rectangle(200, 575, 200, 50, { isStatic: true, friction: 0 });
        this.matter.world.add(this.floor);
        this.matter.world.on("collisionstart", event => {
            event.pairs.forEach(pair => {
                const { bodyA, bodyB } = pair;

                const gameObjectA = bodyA.gameObject;
                const gameObjectB = bodyB.gameObject;

                const aIsEmoji = gameObjectA instanceof Phaser.Physics.Matter.Sprite;
                const bIsEmoji = gameObjectB instanceof Phaser.Physics.Matter.Sprite;

                console.log(gameObjectA);
                console.log(gameObjectB);
                console.log(aIsEmoji);
                console.log(bIsEmoji);
                if (aIsEmoji && bodyB == this.floor) {
                    this.brick.freeze();
                }
                if (bIsEmoji) {
                    console.log(gameObjectB);
                }
            });
        });
    }

    update(): void {
        this.bg.tilePositionX -= 0.5;
        this.brick.update();
    }
}