const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

// Data awal mahasiswa
let mahasiswa = [
  { nama: "Arzario Irsyad", nim: "2211104032" },
  { nama: "Satria Ariq", nim: "2211104033" },
  { nama: "Adam Darmawan", nim: "2211104034" },
];

// GET semua mahasiswa
app.get("/api/mahasiswa", (req, res) => {
  res.json(mahasiswa);
});

// GET mahasiswa berdasarkan index
app.get("/api/mahasiswa/:index", (req, res) => {
  const index = parseInt(req.params.index);
  if (index >= 0 && index < mahasiswa.length) {
    res.json(mahasiswa[index]);
  } else {
    res.status(404).json({ message: "Data tidak ditemukan" });
  }
});

// POST mahasiswa baru
app.post("/api/mahasiswa", (req, res) => {
  const { nama, nim } = req.body;
  mahasiswa.push({ nama, nim });
  res.status(201).json({ message: "Data berhasil ditambahkan" });
});

// DELETE mahasiswa berdasarkan index
app.delete("/api/mahasiswa/:index", (req, res) => {
  const index = parseInt(req.params.index);
  if (index >= 0 && index < mahasiswa.length) {
    mahasiswa.splice(index, 1);
    res.json({ message: "Data berhasil dihapus" });
  } else {
    res.status(404).json({ message: "Data tidak ditemukan" });
  }
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});