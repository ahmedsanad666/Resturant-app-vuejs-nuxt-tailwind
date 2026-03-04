<script setup lang="ts">
import { ref, computed } from "vue";

type LocaleOption = { code: string; name?: string };
const fallbackLocales: LocaleOption[] = [
  { code: "en", name: "English" },
  { code: "tr", name: "Türkçe" }
];

declare const useI18n: () => {
  t: (key: string) => string;
  locale: { value: string } | string;
  locales?: { value: LocaleOption[] } | LocaleOption[];
};
declare const useLocalePath: () => (path: string) => unknown;
declare const useSwitchLocalePath: () => (locale: string) => string;
declare const navigateTo: (to: unknown) => unknown;

const { t, locale, locales } = useI18n();
const localePath = useLocalePath();
const switchLocalePath = useSwitchLocalePath();

const currentLocale = computed(() =>
  typeof locale === "string" ? locale : locale.value
);

const links = computed(() => [
  { label: t("footer.home"), href: "/", isLink: true },
  { label: t("hero.cta_secondary"), href: "#ourStory", isLink: false },
  { label: t("footer.menu"), href: "#menu", isLink: false },
  { label: t("footer.gallery"), href: "#gallery", isLink: false },
  { label: t("footer.contact"), href: "#contact", isLink: false }
]);

const routerLinks = computed(() => links.value.filter((link) => link.isLink));
const anchorLinks = computed(() => links.value.filter((link) => !link.isLink));

const isOpen = ref(false);

const availableLocales = computed(() => {
  const list = (locales as unknown as { value?: unknown }).value ?? locales;
  if (Array.isArray(list) && list.length > 0) return list as LocaleOption[];
  return fallbackLocales;
});

function switchLocale(code: string, closeMenu = false) {
  const path = switchLocalePath(code);
  if (path) navigateTo(path);
  if (closeMenu) isOpen.value = false;
}

function onLocaleChange(event: Event, closeMenu = false) {
  const target = event.target as HTMLSelectElement | null;
  const code = target?.value;
  if (!code) return;
  switchLocale(code, closeMenu);
}
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 z-40 border-b border-white/5 bg-brand-dark backdrop-blur"
  >
    <nav
      class="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 lg:px-0"
    >
      <NuxtLink :to="localePath('/')" class="flex items-center gap-3">
        <NuxtImg
          format="webp"
          quality="80"
          src="/images/logo/logo.jpg"
          alt="Restaurant logo"
          class="h-10 w-10 rounded-full object-cover ring-2 ring-amber-400/70"
        />

        <div class="flex flex-col leading-tight">
          <span
            class="text-xs font-semibold uppercase tracking-[0.28em] text-amber-400"
            >{{ t("hero.date") }}</span
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
        <UIcon v-if="!isOpen" class=" h-5 w-5" name="uim:align-left" />
        <UIcon v-else class=" h-5 w-5" name="uim:align-right" />
      </button>

      <div
        class="hidden items-center gap-8 text-sm font-medium text-gray-200 lg:flex"
      >
        <NuxtLink
          v-for="link in routerLinks"
          :key="link.label"
          :to="localePath(link.href)"
          @click="isOpen = false"
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
          @click="isOpen = false"
          class="relative transition hover:text-white"
        >
          {{ link.label }}
          <span
            class="absolute inset-x-0 -bottom-1 h-px scale-x-0 rounded-full bg-amber-400 transition-transform duration-200 group-hover/nav-item:scale-x-100"
          />
        </a>

        <div class="relative">
          <label class="sr-only" for="navbar-locale-desktop">Language</label>
          <select
            id="navbar-locale-desktop"
            class="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-100 outline-none ring-0 transition hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-amber-500 cursor-pointer"
            :value="currentLocale"
            @change="onLocaleChange($event)"
          >
            <option
              v-for="l in availableLocales"
              :key="l.code"
              :value="l.code"
              class="text-neutral-900 cursor-pointer"
            >
              {{ l.name ?? l.code.toUpperCase() }}
            </option>
          </select>
        </div>

        <a
          href="#order"
          @click="isOpen = false"
          class="rounded-full bg-amber-500 px-5 py-2.5 text-sm font-semibold text-neutral-950 shadow-lg shadow-amber-500/30 transition hover:bg-amber-400"
        >
          {{ t("global.orderNow") }}
        </a>
      </div>
    </nav>

    <!-- class="block rounded-lg px-3 py-2 text-sm font-medium text-gray-100 hover:bg-white/5" -->
    <div v-if="isOpen" class="border-t border-white/5 bg-brand-dark lg:hidden">
      <div class="mx-auto max-w-6xl space-y-2 px-4 py-4">
        <NuxtLink
          @click="isOpen = false"
          v-for="link in routerLinks"
          :key="link.label"
          :to="localePath(link.href)"
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
          @click="isOpen = false"
          class="block rounded-lg px-3 py-2 text-sm font-medium text-gray-100 hover:bg-white/5"
        >
          {{ link.label }}
          <span
            class="absolute inset-x-0 -bottom-1 h-px scale-x-0 rounded-full bg-amber-400 transition-transform duration-200 group-hover/nav-item:scale-x-100"
          />
        </a>

        <div class="pt-2">
          <label class="sr-only" for="navbar-locale-mobile">Language</label>
          <select
            id="navbar-locale-mobile"
            class="block w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm font-medium text-gray-100 outline-none transition hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-amber-500"
            :value="currentLocale"
            @change="onLocaleChange($event, true)"
          >
            <option
              v-for="l in availableLocales"
              :key="l.code"
              :value="l.code"
              class="text-neutral-900"
            >
              {{ l.name ?? l.code.toUpperCase() }}
            </option>
          </select>
        </div>

        <a
          href="#order"
          class="mt-2 block rounded-full bg-amber-500 px-5 py-2.5 text-center text-sm font-semibold text-neutral-950 shadow-lg shadow-amber-500/30 hover:bg-amber-400"
          @click="isOpen = false"
        >
          {{ t("global.orderNow") }}
        </a>
      </div>
    </div>
  </header>
</template>
