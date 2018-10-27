export class Brick extends Phaser.GameObjects.Sprite {
    private currentScene: Phaser.Scene;
    private cursors: CursorKeys;
    private walkingSpeed: number;

    constructor(params) {
        super(params.scene, params.x, params.y, params.key);

        // physics
        params.scene.physics.world.enable(this);
        this.body.setGravityY(1000);
        this.body.setSize(17, 12);

        this.initVariables(params);
        this.initImage();
        this.initInput();

        this.currentScene.add.existing(this);
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
        this.setScale(3);
        this.setOrigin(0, 0);
    }

    update(): void {
        this.handleInput();
    }

    private handleInput(): void {
        if (this.cursors.right.isDown) {
            this.x += this.walkingSpeed;
            this.setFlipX(false);
        } else if (this.cursors.left.isDown) {
            this.x -= this.walkingSpeed;
            this.setFlipX(true);
        }
    }

}