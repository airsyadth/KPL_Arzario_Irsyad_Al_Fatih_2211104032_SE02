class GameFSM {
    constructor() {
        this.state = "START";
    }

    transition(action) {
        switch (this.state) {
            case "START":
                if (action === "PLAY") {
                    this.state = "PLAYING";
                } else {
                    console.log("Aksi tidak valid.");
                }
                break;
            case "PLAYING":
                if (action === "LOSE") {
                    this.state = "GAME OVER";
                } else {
                    console.log("Aksi tidak valid.");
                }
                break;
            case "GAME OVER":
                if (action === "RESTART") {
                    this.state = "START";
                } else {
                    console.log("Aksi tidak valid.");
                }
                break;
        }

        if (action === "EXIT") {
            console.log("Keluar dari permainan.");
            return false; // Menghentikan permainan
        }

        return true; // Lanjutkan permainan
    }

    async run() {
        console.log("Game dimulai. Ketik PLAY, LOSE, RESTART, atau EXIT.");

        while (true) {
            console.log("State saat ini:", this.state);
            const action = await this.getInput("Masukkan aksi: ");
            if (!this.transition(action.toUpperCase())) break;
        }
    }

    getInput(promptText) {
        return new Promise((resolve) => {
            const readline = require("readline").createInterface({
                input: process.stdin,
                output: process.stdout,
            });
            readline.question(promptText, (input) => {
                readline.close();
                resolve(input);
            });
        });
    }
}

// Jalankan game
const game = new GameFSM();
game.run();
