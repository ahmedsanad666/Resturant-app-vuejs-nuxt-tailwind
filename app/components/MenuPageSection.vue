<template>
  <section
    :id="sectionId"
    class="bg-brand-light pb-16 md:pt-24 pt-10 text-brand-dark "
  >
    <div class="mx-auto max-w-6xl px-4">
      <div class="flex flex-col justify-end items-end">
        <p
          v-if="badge"
          class="text-xs font-semibold uppercase tracking-[0.3em] text-brand-primary text-start w-1/2"
        >
          {{ badge }}
        </p>

        <h1 class="mt-2 text-2xl font-semibold sm:text-5xl text-start w-1/2">
          {{ heading }}
        </h1>
      </div>

      <div
        class="relative mt-10 rounded-[40px] bg-brand-dark px-6 py-10 text-white sm:px-10 lg:px-14 lg:py-18"
      >
        <div class="grid gap-10 lg:grid-cols-2">
          <!-- Left column -->
          <div>
            <!-- Top-left image -->
            <div
              class=" md:mt-[-210px] mb-10 md:h-[380px] md:w-[380px] h-50 w-50 overflow-hidden rounded-full border-4 border-brand-light bg-brand-light shadow-[0_20px_60px_rgba(0,0,0,0.45)] sm:block"
            >
              <NuxtImg
                :src="leftSection.image"
                :alt="leftSection.title"
                format="webp"
                quality="80"
                class="h-full w-full object-cover"
              />
            </div>

            <p class="text-xs font-semibold uppercase text-brand-primary">
              {{ leftSection.label }}
            </p>
            <h1 class="mt-2 text-2xl font-semibold">
              {{ leftSection.title }}
            </h1>
            <p class="mt-3 text-sm text-gray-200">
              {{ leftSection.description }}
            </p>

            <ul class="mt-6 space-y-3 text-sm">
              <li
                v-for="item in leftSection.items"
                :key="item.title"
                class="flex items-baseline justify-between gap-4 border-b border-white/10 pb-2"
              >
                <span>{{ item.title }}</span>
                <span class="text-sm font-semibold text-amber-400">
                  {{ item.price }}
                </span>
              </li>
            </ul>
          </div>

          <!-- Right column -->
          <div class="relative">
            <p class="text-xs font-semibold uppercase text-brand-primary">
              {{ rightSection.label }}
            </p>
            <h1 class="mt-2 text-2xl font-semibold">
              {{ rightSection.title }}
            </h1>
            <p class="mt-3 text-sm text-gray-200">
              {{ rightSection.description }}
            </p>

            <ul class="mt-6 space-y-3 text-sm  mb-10">
              <li
                v-for="item in rightSection.items"
                :key="item.title"
                class="flex items-baseline justify-between gap-4 border-b border-white/10 pb-2"
              >
                <span>{{ item.title }}</span>
                <span class="text-sm font-semibold text-amber-400">
                  {{ item.price }}
                </span>
              </li>
            </ul>
            <!-- Bottom-right image -->
            <div
              class="  mx-auto md:h-[380px]  h-50 md:w-[380px]  w-50 overflow-hidden rounded-full border-4 border-brand-light bg-brand-light shadow-[0_20px_60px_rgba(0,0,0,0.45)] sm:block"
            >
              <NuxtImg
                :src="rightSection.image"
                :alt="rightSection.title"
                format="webp"
                quality="80"
                class="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="md:h-32 max-sm-hidden  bg-brand-light"></div>
  </section>
  
</template>

<script setup lang="ts">
interface MenuItem {
  title: string;
  price: string;
}

interface MenuColumn {
  label?: string;
  image: string;
  title: string;
  description: string;
  items: MenuItem[];
}

defineProps<{
  heading: string;
  badge?: string;
  leftSection: MenuColumn;
  rightSection: MenuColumn;
  sectionId?: string;
}>();
</script>
