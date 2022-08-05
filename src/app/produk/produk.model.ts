export class ProdukModel {
  id!: number;
  nama!: string;
  jenis!: string;
  berat!: string;
  harga!: number;
  produsen!: Produsen;
}

export class Produsen {
  id!: number;
  nama!: string;
}
