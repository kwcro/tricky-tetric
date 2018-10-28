import CursorKeys = Phaser.Input.Keyboard.CursorKeys;

export class Brick extends Phaser.GameObjects.Sprite {
    private currentScene: Phaser.Scene;
    private cursors: CursorKeys;
    private walkingSpeed: number;
    private sprite: Phaser.Physics.Matter.Image;

    constructor(params) {
        super(params.scene, params.x, params.y, params.key);

        this.initVariables(params);
        this.initImage();
        this.initInput();
        // physics
        // TODO: We should this with matter JS, e.g. scene.matter.add.sprite...
        console.log(params.key);
        this.sprite = params.scene.matter.add.sprite(params.x, params.y, params.key);
        this.sprite.setFriction(3);

        params.scene.add.existing(this);
    }

    private initVariables(params): void {
        this.currentScene = params.scene;
        this.walkingSpeed = 5;
    }

    private initInput() {
        this.cursors = this.currentScene.input.keyboard.createCursorKeys();
    }

    private initImage() {
        // image
        this.setOrigin(0.5, 0.5);
    }

    freeze() {
        this.sprite.setStatic(true);
        console.log("freeze called");
    }

    update(): void {
        this.handleInput();
    }

    private handleInput(): void {
        if (this.cursors.right.isDown) {
            this.x += this.walkingSpeed;
            this.sprite.setVelocityX(0.5);
            this.setFlipX(false);
        } else if (this.cursors.left.isDown) {
            this.x -= this.walkingSpeed;
            this.sprite.setVelocityX(-0.5);
            this.setFlipX(true);
        }
    }

}