export class BootScene extends Phaser.Scene {
    constructor() {
        super({
            key: "BootScene"
        });
    }


    preload(): void {
        // set the background and create loading bar
        this.cameras.main.setBackgroundColor(0x57e0f4);

        // load out package
        this.load.pack(
            "preload",
            "./src/games/tricky-tetric/assets/pack.json",
            "preload"
        );
    }

    update(): void {
        this.scene.start("MainMenuScene");
    }
}