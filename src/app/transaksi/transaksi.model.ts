export class TransaksiModel {
  id!: number;
  produk!: Produk;
  harga!: Produk;
  kuantitas!: number;
  totalHarga!: number;
}

export class Produk {
  id!: number;
  nama!: number;
  harga!: number;
}
