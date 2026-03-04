<template>
  <section id="gallery" class="bg-brand-light py-16 md:py-24">
    <div class="mx-auto max-w-6xl px-4">
      <div
        class="grid gap-3 md:gap-4 grid-cols-2 md:grid-cols-4 auto-rows-[120px] md:auto-rows-[170px]"
      >
        <div
          v-for="(image, index) in images"
          :key="image.src"
          :class="['relative overflow-hidden', image.gridClass]"
        >
          <button
            type="button"
            class="group block h-full w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
            @click="openLightbox(index)"
          >
            <NuxtImg
              format="webp"
              quality="80"
              :src="image.src"
              :alt="image.alt"
              class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </button>
        </div>
      </div>
    </div>

    <Transition name="fade">
      <div
        v-if="isOpen"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4"
      >
        <button
          type="button"
          class="absolute top-6 right-6 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
          @click="closeLightbox"
        >
          ✕
        </button>

        <button
          type="button"
          class="absolute left-4 md:left-8 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
          @click="prevImage"
        >
          ‹
        </button>

        <button
          type="button"
          class="absolute right-4 md:right-8 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
          @click="nextImage"
        >
          ›
        </button>

        <div class="max-w-4xl w-full">
          <NuxtImg
            format="webp"
            quality="80"
            :src="currentImage.src"
            :alt="currentImage.alt"
            class="mx-auto max-h-[80vh] w-full rounded-2xl object-contain shadow-2xl"
          />
        </div>
      </div>
    </Transition>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";

import home1 from "/images/menu/home1.png";
import home2 from "/images/menu/home3.png";
import yemek from "/images/menu/yemek.webp";
import konfor from "/images/menu/konfor.webp";
import corba from "/images/menu/çorba.jpg";
import doner from "/images/menu/doner.avif";
import icecek from "/images/menu/icecek.jpg";
import salata from "/images/menu/salata.jpg";
import tatlı from "/images/menu/tatlı.jpg";
import künefe from "/images/menu/künefe.jpg";
import kebap from "/images/gallery/kebap.jpg";
import pide from "/images/gallery/pide.jpg";
import tavuksac from "/images/gallery/tavukSac.jpg";

interface GalleryImage {
  src: string;
  alt: string;
  gridClass?: string;
}

const images: GalleryImage[] = [
  {
    src: kebap,
    alt: "Kebap plate",
    gridClass: "md:col-span-2 md:row-span-2",
  },
  {
    src: pide,
    alt: "Pide and kebap selection",
  },
  {
    src: tavuksac,
    alt: "Home-style yemek dishes",
  },
  {
    src: yemek,
    alt: "Home-style yemek dishes",
  },
  {
    src: konfor,
    alt: "Konfor plates on the table",
  },
  {
    src: corba,
    alt: "Soup varieties",
    gridClass: "md:col-span-2",
  },
  {
    src: doner,
    alt: "Doner being served",
  },
  {
    src: icecek,
    alt: "Refreshing drinks",
  },
  {
    src: salata,
    alt: "Fresh salads",
  },
  {
    src: tatlı,
    alt: "Assorted desserts",
    gridClass: "md:col-span-2",
  },
  {
    src: künefe,
    alt: "Künefe dessert",
  },
];

const isOpen = ref(false);
const currentIndex = ref(0);

const currentImage = computed(() => images[currentIndex.value]);

const openLightbox = (index: number) => {
  currentIndex.value = index;
  isOpen.value = true;
};

const closeLightbox = () => {
  isOpen.value = false;
};

const nextImage = () => {
  currentIndex.value = (currentIndex.value + 1) % images.length;
};

const prevImage = () => {
  currentIndex.value =
    (currentIndex.value - 1 + images.length) % images.length;
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

