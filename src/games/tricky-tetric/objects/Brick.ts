export class Brick extends Phaser.GameObjects.Sprite {
    private currentScene: Phaser.Scene;
    private cursors: CursorKeys;
    private walkingSpeed: number;

    constructor(params) {
        super(params.scene, params.x, params.y, params.key, params.frame);

        // physics
        params.scene.physics.world.enable(this);

        this.initVariables(params);
        this.initImage();
        this.initInput();

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
        this.setScale(2);
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