export class MainMenuScene extends Phaser.Scene {
    private startKey: Phaser.Input.Keyboard.Key;
    private bitmapTexts: Phaser.GameObjects.BitmapText[] = [];

    constructor() {
        super({
            key: "MainMenuScene"
        });
    }

    init(): void {
        this.startKey = this.input.keyboard.addKey(
            Phaser.Input.Keyboard.KeyCodes.SPACE
        );
        this.startKey.isDown = false;
    }

    create(): void {
        this.bitmapTexts.push(
            this.add.bitmapText(
                this.sys.canvas.width / 2 - 135,
                this.sys.canvas.height / 2 - 80,
                "Pacifico",
                "Tricky Tetric",
                40
            )
        );

        this.bitmapTexts.push(
            this.add.bitmapText(
                this.sys.canvas.width / 2 - 80,
                this.sys.canvas.height / 2 - 10,
                "Pacifico",
                "SPACE: Play",
                30
            )
        );
    }

    update(): void {
        if (this.startKey.isDown) {
            this.scene.start("GameScene");
        }
    }
}