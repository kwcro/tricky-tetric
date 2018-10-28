import {Brick} from "../objects/Brick";
import Events = Phaser.Physics.Matter.Matter.Events;
import Bodies = Phaser.Physics.Matter.Matter.Bodies;
import Engine = Phaser.Physics.Matter.Matter.Engine;
import World = Phaser.Physics.Matter.Matter.World;

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
        this.engine = Engine.create();
        this.floor = Bodies.rectangle(-10, 100, 600, 10, { isStatic: true, friction: 0 });
        World.add(this.engine.world, [
            this.floor
        ]);
        Events.on(this.engine, "collisionStart", event => {
            event.pairs.forEach(pair => {
                const {bodyA, bodyB} = pair;
                if (bodyA === this.floor || bodyB === this.floor) {
                    console.log("Something hit the floor!");
                }
            });
        });
    }

    update(): void {
        this.bg.tilePositionX -= 0.5;
        this.brick.update();
    }
}