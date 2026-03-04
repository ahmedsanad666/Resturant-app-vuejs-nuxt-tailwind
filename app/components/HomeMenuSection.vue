<template>
  <section id="menu" class="bg-brand-dark py-16 md:py-24 text-white">
    <div class="mx-auto max-w-6xl px-4">
      <div class="text-center">
        <p
          class="text-xs font-semibold uppercase tracking-[0.3em] text-brand-primary"
        >
          {{ $t("homeMenu.badge") }}
        </p>
        <h2 class="mt-3 text-3xl font-semibold sm:text-4xl">
          {{ $t("homeMenu.title") }}
        </h2>
        <p class="mt-4 text-sm text-gray-300 max-w-2xl mx-auto">
          {{ $t("homeMenu.subtitle") }}
        </p>
      </div>

      <div
        class="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3"
      >
        <NuxtLink
          v-for="category in categories"
          :key="category.id"
          :to="{ path: '/menu', hash: `#${category.id}` }"
          class="group block overflow-hidden rounded-[32px] bg-white shadow-[0_20px_60px_rgba(15,23,42,0.16)] transition-transform hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
        >
          <div class="relative h-56 w-full overflow-hidden">
            <NuxtImg
              format="webp"
              quality="80"
              :src="category.image"
              :alt="category.title"
              class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          <div class="p-6">
            <div class="flex items-baseline justify-between gap-4">
              <div>
                <p
                  class="text-[11px] font-semibold uppercase tracking-[0.25em] text-brand-primary"
                >
                  {{ $t(`homeMenu.categories.${category.key}.badge`) }}
                </p>
                <h3 class="mt-2 text-lg font-semibold text-brand-dark">
                  {{ $t(`homeMenu.categories.${category.key}.title`) }}
                </h3>
                <p class="mt-1 text-xs text-gray-400">
                  {{ $t(`homeMenu.categories.${category.key}.subtitle`) }}
                </p>
              </div>
            </div>

            <p class="mt-4 text-sm text-gray-300 line-clamp-3">
              {{ $t(`homeMenu.categories.${category.key}.description`) }}
            </p>

            <button
              type="button"
              class="mt-6 inline-flex items-center rounded-full bg-brand-dark px-5 py-2 text-sm font-semibold text-white transition-colors group-hover:bg-brand-primary"
            >
              {{ $t("global.viewCategory") }}
            </button>
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import kebap from "/images/gallery/kebap.jpg";
import yemek from "/images/menu/yemek.webp";
import corba from "/images/menu/çorba.jpg";
import salata from "/images/menu/salata.jpg";
import tatlı from "/images/menu/tatlı.jpg";

interface HomeMenuCategory {
  id: string;
  key: string;
  image: string;
}

const categories: HomeMenuCategory[] = [
  {
    id: "menu-section-0",
    key: "kebapPide",
    image: kebap,
  },
  {
    id: "menu-section-1",
    key: "yemekKonfor",
    image: yemek,
  },
  {
    id: "menu-section-2",
    key: "corbaDoner",
    image: corba,
  },
  {
    id: "menu-section-3",
    key: "icecekSalata",
    image: salata,
  },
  {
    id: "menu-section-4",
    key: "tatliKunefe",
    image: tatlı,
  },
];
</script>
