<script setup lang="ts">
import { ref, computed } from "vue";
declare const useI18n: () => { t: (key: string) => string; locale: any }
const { t, locale } = useI18n();
const links = [
  { label: t("footer.home"), href: "/", isLink: true},
  { label: t("hero.cta_secondary"), href: "#ourStory", isLink: false },
  { label: t("footer.menu"), href: "#menu", isLink: false },
  { label: t("footer.gallery"), href: "#gallery", isLink: false },
  { label: t("footer.contact"), href: "#contact", isLink: false },
];

const routerLinks = computed(() => links.filter((link) => link.isLink));
const anchorLinks = computed(() => links.filter((link) => !link.isLink));

const isOpen = ref(false);
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 z-40 border-b border-white/5 bg-brand-dark backdrop-blur"
  >
    <nav
      class="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 lg:px-0"
    >
      <NuxtLink to="/" class="flex items-center gap-3">
        <img
          src="assets/images/logo/logo.jpg"
          alt="Restaurant logo"
          class="h-10 w-10 rounded-full object-cover ring-2 ring-amber-400/70"
        />

        <div class="flex flex-col leading-tight">
          <span
            class="text-xs font-semibold uppercase tracking-[0.28em] text-amber-400"
            >{{ $t("hero.date") }}</span
          >
          <span class="text-xl font-semibold tracking-tight text-white">
            Urfa<span class="text-amber-400">Kebap</span>
          </span>
        </div>
      </NuxtLink>

      <button
        type="button"
        class="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-gray-100 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 lg:hidden"
        @click="isOpen = !isOpen"
      >
        <span class="sr-only">Toggle navigation</span>
        <span v-if="!isOpen" class="i-lucide-menu h-5 w-5" />
        <span v-else class="i-lucide-x h-5 w-5" />
      </button>

      <div
        class="hidden items-center gap-8 text-sm font-medium text-gray-200 lg:flex"
      >
        <NuxtLink
          v-for="link in routerLinks"
          :key="link.label"
          :to="link.href"
          class="relative transition hover:text-white"
        >
          {{ link.label }}
          <span
            class="absolute inset-x-0 -bottom-1 h-px scale-x-0 rounded-full bg-amber-400 transition-transform duration-200 group-hover/nav-item:scale-x-100"
          />
        </NuxtLink>
        <a
          v-for="link in anchorLinks"
          :key="link.label"
          :href="link.href"
          class="relative transition hover:text-white"
        >
          {{ link.label }}
          <span
            class="absolute inset-x-0 -bottom-1 h-px scale-x-0 rounded-full bg-amber-400 transition-transform duration-200 group-hover/nav-item:scale-x-100"
          />
        </a>

        <a
          href="#order"
          class="rounded-full bg-amber-500 px-5 py-2.5 text-sm font-semibold text-neutral-950 shadow-lg shadow-amber-500/30 transition hover:bg-amber-400"
        >
          {{ $t('global.orderNow') }}
        </a>
      </div>
    </nav>

    <!-- class="block rounded-lg px-3 py-2 text-sm font-medium text-gray-100 hover:bg-white/5" -->
    <div v-if="isOpen" class="border-t border-white/5 bg-brand-dark lg:hidden">
      <div class="mx-auto max-w-6xl space-y-2 px-4 py-4">
        <NuxtLink
          v-for="link in routerLinks"
          :key="link.label"
          :to="link.href"
       class="block rounded-lg px-3 py-2 text-sm font-medium text-gray-100 hover:bg-white/5"
        >
          {{ link.label }}
          <span
            class="absolute inset-x-0 -bottom-1 h-px scale-x-0 rounded-full bg-amber-400 transition-transform duration-200 group-hover/nav-item:scale-x-100"
          />
        </NuxtLink>
        <a
          v-for="link in anchorLinks"
          :key="link.label"
          :href="link.href"
       class="block rounded-lg px-3 py-2 text-sm font-medium text-gray-100 hover:bg-white/5"
        >
          {{ link.label }}
          <span
            class="absolute inset-x-0 -bottom-1 h-px scale-x-0 rounded-full bg-amber-400 transition-transform duration-200 group-hover/nav-item:scale-x-100"
          />
        </a>


        <a
          href="#order"
          class="mt-2 block rounded-full bg-amber-500 px-5 py-2.5 text-center text-sm font-semibold text-neutral-950 shadow-lg shadow-amber-500/30 hover:bg-amber-400"
          @click="isOpen = false"
        >
        {{ $t("global.orderNow") }}
        </a>
      </div>
    </div>
  </header>
</template>
