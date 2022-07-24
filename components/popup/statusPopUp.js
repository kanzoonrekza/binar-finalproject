import React from "react";
import MainModalLayout from "../../layout/mainModalLayout";
import CategoryCard from "../categoryCard";

export default function StatusPopUp() {
  return (
    <MainModalLayout title={`Perbarui status penjualan produkmu`}>
      <div className="d-flex align-items-start">
        <input type="radio" id="accepted" name="fav_language" value="accepted" />
        <div className="d-flex flex-column">
          <b for="html">Berhasil terjual</b>
          <p for="html">Kamu telah sepakat menjual produk ini kepada pembeli</p>
        </div>
      </div>
      <div className="d-flex align-items-start">
        <input type="radio" id="accepted" name="fav_language" value="accepted" />
        <div className="d-flex flex-column">
          <b for="html">Batalkan transaksi</b>
          <p for="html">Kamu membatalkan transaksi produk ini dengan pembeli</p>
        </div>
      </div>
      <CategoryCard className={"py-2"} text={"Kirim"} rad={"8"} />
    </MainModalLayout>
  );
}