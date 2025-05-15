const Subject = require('./subject');
const ConcreteObserver = require('./concreteObserver');

// Inisialisasi subject
const subject = new Subject();

// Inisialisasi observers dengan referensi ke subject
const observer1 = new ConcreteObserver('Observer 1', subject);
const observer2 = new ConcreteObserver('Observer 2', subject);

// Menambahkan observer ke subject
subject.attach(observer1);
subject.attach(observer2);

// Notifikasi ke semua observer beberapa kali
subject.notify("Update terbaru: Versi 1.0");
subject.notify("Update terbaru: Versi 1.1");
subject.notify("Update terbaru: Versi 1.2");
subject.notify("Update terbaru: Versi 2.0");
