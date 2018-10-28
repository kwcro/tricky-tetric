/**
 * @author       Digitsensitive <digit.sensitivee@gmail.com>
 * @copyright    2018 Digitsensitive
 * @description  Flappy Bird: Game
 * @license      Digitsensitive
 */

/// <reference path="../../phaser.d.ts"/>

import "phaser";
import { BootScene } from "./scenes/bootScene";
import { MainMenuScene } from "./scenes/mainMenuScene";
import { GameScene } from "./scenes/gameScene";

const config = {
    title: "Tricky Tetric",
    url: "https://github.com/digitsensitive/phaser3-typescript",
    version: "1.0",
    width: 400,
    height: 600,
    type: Phaser.AUTO,
    parent: "game",
    scene: [BootScene, MainMenuScene, GameScene],
    input: {
        keyboard: true,
        mouse: false,
        touch: false,
        gamepad: false
    },
    physics: {
        default: "matter",
        matter: {
            gravity: { y: 0.1 },
            debug: true
        },
        arcade: {
            gravity: { y: 1 },
            debug: true
        }
    },
    backgroundColor: "#57e0f4",
    pixelArt: true,
};

export class Game extends Phaser.Game {
    constructor(config: GameConfig) {
        super(config);
    }
}

window.onload = () => {
    var game = new Game(config);
};
