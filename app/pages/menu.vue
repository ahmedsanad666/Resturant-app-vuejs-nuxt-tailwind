<template>
  <div>
    <MenuHeroSection />
    <ShapeDivider :rotate="true" />
    <MenuPageSection
      v-for="(item, index) in menuList"
      :key="index"
      :section-id="`menu-section-${index}`"
      :badge="item.badge"
      :heading="item.heading"
      :left-section="item.leftSection"
      :right-section="item.rightSection"
    />
    <ShapeDivider  />
    <ContactSection />
    <FooterSection />
  </div>
</template>

<script setup lang="ts">
import home1 from "/images/gallery/kebap.jpg";
import home2 from "/images/gallery/pide.jpg";
import yemek from "/images/menu/yemek.webp";
import konfor from "/images/menu/konfor.webp";
// --
import corba from "/images/menu/çorba.jpg";
import doner from "/images/menu/doner.avif";
// --
import icecek from "/images/menu/icecek.jpg";
import salata from "/images/menu/salata.jpg";
// --
import tatlı from "/images/menu/tatlı.jpg";
import künefe from "/images/menu/künefe.jpg";

const menuList = [
  {
    badge: "Breakfast",
    heading: "Breakfast Menu",
    leftSection: {
      label: "Our Delights",
      image: home1,
      title: "KEBAP",
      description:
        "The ordinary, inviting you to explore a world of flavours crafted with passion and precision.",
      items: [
        { title: "Acısız Lokma Kebap", price: "650.00 TL / por" },
        { title: "Adana Dürüm", price: "600.00 TL / por" },
        { title: "Adana Kebap", price: "600.00 TL / por" },
        { title: "Alinazik", price: "650.00 TL / por" },
        { title: "Altı Ezmeli Kebap", price: "650.00 TL / por" },
        { title: "Beyti Kebap", price: "650.00 TL / por" },
        { title: "Böbrek", price: "600.00 TL / por" },
        { title: "Ciğer Kebap", price: "600.00 TL / por" },
        { title: "Domatesli Kebap", price: "600.00 TL / por" },
        { title: "Fıstıklı Kebap", price: "600.00 TL / por" },
        { title: "İncik Izgara", price: "550.00 TL / ad" },
        { title: "Kanat", price: "550.00 TL / por" },
        { title: "Karışık Izgara", price: "850.00 TL / ad" },
        { title: "Kuzu Pirzola", price: "800.00 TL / por" },
        { title: "Kuzu Şiş", price: "650.00 TL / por" },
        { title: "Lokma Kebap", price: "650.00 TL / por" },
        { title: "Patlıcanlı Kebap", price: "700.00 TL / por" },
        { title: "Soğanlı Kebap", price: "600.00 TL / por" },
        {
          title: "Special Izgara Köfte (200-220 gr)",
          price: "500.00 TL / por",
        },
        {
          title: "Special Tavuk Şiş (200-220 gr)",
          price: "550.00 TL / por",
        },
        { title: "Şiş Köfte", price: "600.00 TL / por" },
        { title: "Şiş Köfte Dürüm", price: "600.00 TL / por" },
        { title: "Tavuk İncik", price: "550.00 TL / por" },
        { title: "Tepsi Kaburgalı (kişi başı)", price: "1250.00 TL / por" },
        { title: "Tepsi Kebabı (kişi başı)", price: "1250.00 TL / por" },
        { title: "Tepsi Patlıcanlı (kişi başı)", price: "1250.00 TL / por" },
        { title: "Tepsi Tavuksuz (kişi başı)", price: "1500.00 TL / por" },
        { title: "Yoğurtlu Adana", price: "650.00 TL / por" },
        { title: "Yoğurtlu Köfte", price: "600.00 TL / por" },
        { title: "Yoğurtlu Lokma", price: "650.00 TL / por" },
        { title: "Yoğutlu Urfa", price: "650.00 TL / por" },
      ],
    },
    rightSection: {
      label: "Breakfast Favourites",
      image: home2,
      title: "PİDE",
      description:
        "Array of dishes that evoke warmth, satisfaction, and a touch of culinary nostalgia.",
      items: [
        { title: "EMİRDAĞ PİDESİ", price: "450.00 TL / por" },
        { title: "Fındık Lahmacun", price: "150.00 TL / ad" },
        { title: "Karışık Pide", price: "500.00 TL / por" },
        { title: "Kaşar", price: "100.00 TL / ad" },
        { title: "KAŞAR FARKI", price: "100.00 TL / ad" },
        { title: "Kaşarlı Pide", price: "400.00 TL / por" },
        { title: "Kıymalı Pide", price: "450.00 TL / por" },
        { title: "Kuş Kaş", price: "550.00 TL / por" },
        { title: "Kuşbaşılı Pide", price: "500.00 TL / por" },
        { title: "Lahmacun", price: "200.00 TL / ad" },
        { title: "Özel Lahmacun", price: "250.00 TL / ad" },
        { title: "Pastırmalı Pide", price: "600.00 TL / por" },
        { title: "Pizza", price: "550.00 TL / ad" },
        { title: "Sucuklu Pide", price: "500.00 TL / por" },
        { title: "Tavuklu Pide", price: "450.00 TL / por" },
        { title: "Yumurta Farkı", price: "100.00 TL / ad" },
      ],
    },
  },
  //  ---------------------
  {
    badge: "Breakfast",
    heading: "YEMEK & KONFOR",
    leftSection: {
      label: "Our Delights",
      image: yemek,
      title: "YEMEK",
      description:
        "The ordinary, inviting you to explore a world of flavours crafted with passion and precision.",
      items: [
        { title: "Biber Dolması", price: "400.00 TL / por" },
        { title: "Borani", price: "450.00 TL / por" },
        { title: "Bulgur Pilavı", price: "100.00 TL / por" },
        { title: "Elbasan", price: "650.00 TL / por" },
        { title: "Güveç", price: "600.00 TL / por" },
        { title: "İç Pilav", price: "150.00 TL / por" },
        { title: "K. Budu Köfte", price: "400.00 TL / por" },
        { title: "Karnıyarık", price: "400.00 TL / por" },
        { title: "Kıymalı Yumurta", price: "450.00 TL / por" },
        { title: "Kuru Fasulye", price: "400.00 TL / por" },
        { title: "Kuru Köfte", price: "450.00 TL / por" },
        { title: "Mevsim Kızartma", price: "450.00 TL / por" },
        { title: "Musakka", price: "400.00 TL / por" },
        { title: "Nohut", price: "400.00 TL / por" },
        { title: "Özbek Pilavı", price: "200.00 TL / por" },
        { title: "Patates", price: "300.00 TL / por" },
        { title: "Pirinç Pilavı", price: "100.00 TL / por" },
        { title: "Spesiyel Salçalı Köfte", price: "500.00 TL / por" },
        { title: "Spesyel Aşçı Tabağı", price: "1000.00 TL / por" },
        { title: "Spesyel Ciğer Tava (190-210gr)", price: "500.00 TL / por" },
        { title: "Spesyel Etli Pilav (190-210gr)", price: "650.00 TL / por" },
        { title: "SPESYEL Kavurma (190-210GR)", price: "500.00 TL / por" },
        { title: "Spesyel Kuzu Haşlama", price: "650.00 TL / por" },
        { title: "Spesyel Kuzu Kaburga", price: "650.00 TL / por" },
        {
          title: "SPESYEL Patlıcanlı Kavurma (190-210gr)",
          price: "500.00 TL / por",
        },
        { title: "Spesyel Tas Kebabı (190-210gr)", price: "500.00 TL / por" },
        { title: "Tandır", price: "650.00 TL / por" },
        { title: "Tavuk Haşlama", price: "450.00 TL / por" },
      ],
    },
    rightSection: {
      label: "Breakfast Favourites",
      image: konfor,
      title: "KONFOR",
      description:
        "Array of dishes that evoke warmth, satisfaction, and a touch of culinary nostalgia.",
      items: [
        { title: "Karışık Konfor", price: "700.00 TL / ad" },
        { title: "KAŞAR FARKI", price: "100.00 TL / ad" },
        {
          title: "Kaşarlı Köfte Konfor spesyel",
          price: "650.00 TL / por",
        },
        { title: "Kıyma Konfor", price: "600.00 TL / por" },
        { title: "Köfte Konfor", price: "600.00 TL / por" },
        { title: "Saç Kavurma", price: "700.00 TL / por" },
        { title: "Saç Kavurma Kaşarlı", price: "800.00 TL / por" },
        { title: "Şiş Konfor", price: "650.00 TL / por" },
        { title: "Tavuk Konfor", price: "550.00 TL / por" },
        { title: "Tavuk Saç", price: "550.00 TL / por" },
        { title: "Tavuk Saç Kaşarlı", price: "600.00 TL / por" },
      ],
    },
  },
  //  ---------------------
  {
    badge: "Breakfast",
    heading: "ÇORBA & DÖNER",
    leftSection: {
      label: "Our Delights",
      image: corba,
      title: "ÇORBA",
      description:
        "The ordinary, inviting you to explore a world of flavours crafted with passion and precision.",
      items: [
        { title: "Domates", price: "200.00 TL / por" },
        { title: "Domates Kaşarlı", price: "200.00 TL / por" },
        { title: "Ezo Gelin", price: "200.00 TL / por" },
        { title: "İşkembe", price: "200.00 TL / por" },
        { title: "Karışık Çorba", price: "250.00 TL / por" },
        { title: "Kelle Paça", price: "250.00 TL / por" },
        { title: "Mercimek", price: "200.00 TL / por" },
        { title: "Tavuk Suyu", price: "200.00 TL / por" },
        { title: "Tereyağ", price: "50.00 TL / por" },
        { title: "Yayla", price: "200.00 TL / por" },
      ],
    },
    rightSection: {
      label: "Breakfast Favourites",
      image: doner,
      title: "DÖNER",
      description:
        "Array of dishes that evoke warmth, satisfaction, and a touch of culinary nostalgia.",
      items: [
        { title: "Dürüm Döner", price: "0.00 TL / ad" },
        { title: "Ekmek Arası Döner", price: "0.00 TL / ad" },
        { title: "İskender", price: "0.00 TL / ad" },
        { title: "Lokma Döner", price: "0.00 TL / ad" },
        { title: "Pilav Üstü Döner", price: "0.00 TL / ad" },
        { title: "Sade Döner", price: "0.00 TL / ad" },
        { title: "Yoğurtlu Döner", price: "0.00 TL / ad" },
      ],
    },
  },

  //  ---------------------
  {
    badge: "Breakfast",
    heading: "İÇECEK & SALATA",
    leftSection: {
      label: "Our Delights",
      image: icecek,
      title: "İÇECEK",
      description:
        "The ordinary, inviting you to explore a world of flavours crafted with passion and precision.",
      items: [
        { title: "Ayran", price: "60.00 TL / ad" },
        { title: "Coca Cola", price: "70.00 TL / ad" },
        { title: "Çay", price: "50.00 TL / ad" },
        { title: "Fanta", price: "70.00 TL / ad" },
        { title: "İce Tea", price: "70.00 TL / ad" },
        { title: "K. Meyve Suyu", price: "70.00 TL / ad" },
        { title: "Kahve", price: "100.00 TL / ad" },
        { title: "Kayısı Suyu", price: "70.00 TL / ad" },
        { title: "M. Suyu", price: "70.00 TL / ad" },
        { title: "Nescafe", price: "70.00 TL / ad" },
        { title: "Soda", price: "60.00 TL / ad" },
        { title: "Sprite", price: "70.00 TL / ad" },
        { title: "Su", price: "15.00 TL / ad" },
        { title: "Şalgam", price: "70.00 TL / ad" },
        { title: "Şıra", price: "70.00 TL / ad" },
        { title: "Şişe Kola", price: "70.00 TL / ad" },
        { title: "Türk Kahvesi", price: "100.00 TL / ad" },
      ],
    },
    rightSection: {
      label: "Breakfast Favourites",
      image: salata,
      title: "SALATA",
      description:
        "Array of dishes that evoke warmth, satisfaction, and a touch of culinary nostalgia.",
      items: [
        { title: "CACIK", price: "200.00 TL / ad" },
        { title: "COBAN SALATA", price: "250.00 TL / ad" },
        { title: "ÇİĞ KÖFTE 1 POR", price: "250.00 TL / ad" },
        { title: "ÇİĞ KÖFTE KG", price: "600.00 TL / kg" },
        { title: "EZME", price: "250.00 TL / kg" },
        { title: "İÇLİ KÖFTE", price: "70.00 TL / ad" },
        { title: "MEVSİM SALATA", price: "100.00 TL / ad" },
        { title: "MEZE", price: "150.00 TL / kg" },
        { title: "YOĞURT", price: "150.00 TL / kg" },
      ],
    },
  },
  //  ---------------------
  {
    badge: "Breakfast",
    heading: "TATLI & KÜNEFE",
    leftSection: {
      label: "Our Delights",
      image: tatlı,
      title: "TATLI",
      description:
        "The ordinary, inviting you to explore a world of flavours crafted with passion and precision.",
      items: [
        { title: "1 KG Havuc Dilim", price: "800.00 TL / ad" },
        { title: "1 KG Kadayıf", price: "800.00 TL / ad" },
        { title: "Baklava", price: "300.00 TL / por" },
        { title: "BAKLAVA 1 KİLO", price: "800.00 TL / kg" },
        { title: "Dondurma", price: "200.00 TL / por" },
        { title: "Dondurma Servis", price: "350.00 TL / por" },
        { title: "Ekmek Kadayıf", price: "300.00 TL / por" },
        { title: "FIST. BAKLAVA", price: "350.00 TL / ad" },
        { title: "Fıstık Sarma", price: "350.00 TL / por" },
        { title: "Fıstıklı Baklava", price: "350.00 TL / por" },
        { title: "Fıstıklı Kadayıf", price: "300.00 TL / por" },
        { title: "Havuc Dilim", price: "300.00 TL / por" },
        { title: "İrmik Tatlısı", price: "300.00 TL / por" },
        { title: "Kabak Tatlısı", price: "300.00 TL / por" },
        { title: "Katmer", price: "700.00 TL / por" },
        { title: "Kaymak", price: "200.00 TL / por" },
        { title: "Kemal Paşa", price: "300.00 TL / por" },
        { title: "Sütlaç", price: "250.00 TL / por" },
        { title: "Sütlü Kadayıf", price: "150.00 TL / ad" },
      ],
    },
    rightSection: {
      label: "Breakfast Favourites",
      image: künefe,
      title: "KÜNEFE",
      description:
        "Array of dishes that evoke warmth, satisfaction, and a touch of culinary nostalgia.",
      items: [
        { title: "Dondurmalı Künefe", price: "350.00 TL / ad" },
        { title: "DUBLE KÜNEFE", price: "700.00 TL / ad" },
        { title: "KÜNEFE", price: "350.00 TL / ad" },
      ],
    },
  },
];
</script>
