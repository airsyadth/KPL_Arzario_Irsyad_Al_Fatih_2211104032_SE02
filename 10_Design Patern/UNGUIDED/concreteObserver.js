const Observer = require('./observer');

class ConcreteObserver extends Observer {
    constructor(name, subject) {
        super();
        this.name = name;
        this.subject = subject; // simpan referensi ke subject
        this.notificationCount = 0;
    }

    update(data) {
        this.notificationCount++;
        console.log(`${this.name} menerima data: ${data} (Notifikasi ke-${this.notificationCount})`);

        // Jika sudah menerima 3 notifikasi, unsubscribe dari subject
        if (this.notificationCount >= 3) {
            console.log(`${this.name} berhenti berlangganan setelah 3 notifikasi.`);
            this.subject.detach(this);
        }
    }
}

module.exports = ConcreteObserver;
