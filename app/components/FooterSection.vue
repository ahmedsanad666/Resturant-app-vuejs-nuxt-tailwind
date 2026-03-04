<template>
  <footer class="bg-brand-dark text-white pt-16 pb-10 min-h-screen">
    <div class="mx-auto max-w-6xl px-4 flex flex-col gap-12">
      <!-- Follow us image row -->
      <div>
        <h3
          class="mb-6 text-center text-xl font-semibold tracking-wide text-white"
        >
          {{ t("footer.followUs") }}
        </h3>
        <div
          class="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5 md:gap-4"
        >
          <div class="overflow-hidden rounded-2xl bg-neutral-900">
            <NuxtImg
              src="/images/menu/home1.png"
              format="webp"
              quality="80"
              alt="Kebap plate"
              class="h-32 w-full object-cover sm:h-36 md:h-40"
            />
          </div>
          <div class="overflow-hidden rounded-2xl bg-neutral-900">
            <NuxtImg
              src="/images/menu/home3.png"
              format="webp"
              quality="80"
              alt="Pide selection"
              class="h-32 w-full object-cover sm:h-36 md:h-40"
            />
          </div>
          <div class="overflow-hidden rounded-2xl bg-neutral-900">
            <NuxtImg
              src="/images/menu/yemek.webp"
              format="webp"
              quality="80"
              alt="Yemek dishes"
              class="h-32 w-full object-cover sm:h-36 md:h-40"
            />
          </div>
          <div class="overflow-hidden rounded-2xl bg-neutral-900">
            <NuxtImg
              src="/images/menu/konfor.webp"
              format="webp"
              quality="80"
              alt="Konfor dishes"
              class="h-32 w-full object-cover sm:h-36 md:h-40"
            />
          </div>
          <div class="overflow-hidden rounded-2xl bg-neutral-900 sm:hidden md:block">
            <NuxtImg
              src="/images/menu/tatlı.jpg"
              format="webp"
              quality="80"
              alt="Dessert selection"
              class="h-32 w-full object-cover sm:h-36 md:h-40 max-sm:hidden"
            />
          </div>
        </div>
      </div>

      <!-- Main footer content -->
      <div
        class="mt-4 grid gap-10 border-t border-white/10 pt-10 text-sm md:grid-cols-2"
      >
        <!-- Pages -->
        <div class="space-y-3 text-center md:text-left">
          <h3 class="md:text-3xl text-xl text-white">
            {{ t("footer.pages") }}
          </h3>
          <nav class="flex flex-col gap-1 text-gray-300">
            <a href="#hero" class="hover:text-white transition-colors">
              {{ t("footer.home") }}
            </a>
            <a href="#ourStory" class="hover:text-white transition-colors"
              >{{ t("hero.cta_secondary") }}</a
            >
            <a href="#menu" class="hover:text-white transition-colors">
              {{ t("footer.menu") }}
            </a>
            <a href="#gallery" class="hover:text-white transition-colors"
              >{{ t("footer.gallery") }}</a
            >
            <a href="#contact" class="hover:text-white transition-colors"
              >{{ t("footer.contact") }}</a
            >
          </nav>
        </div>

        <!-- Logo, description, socials -->
        <div class="space-y-4 text-center">
          <NuxtLink to="/" class="flex items-center justify-center gap-3 mx-auto">
            <NuxtImg
              src="/images/logo/logo.jpg"
              format="webp"
              quality="80"
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
          <p class="text-xs text-gray-300 max-w-md mx-auto">
            {{ t("footer.description") }}
          </p>

          <div class="mt-4 flex justify-center gap-4">
            <button
              type="button"
              class="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white hover:bg-white/10 cursor-pointer"
            >
              
              <UIcon name="entypo-social:facebook" class="hover:text-brand-primary  h-6 w-6" />
            </button>
            <a 
              type="button"
              target="_blank"
              href="https://www.instagram.com/urfakebap26"
              class="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white hover:bg-white/10 cursor-pointer"
            >
            <UIcon name="entypo-social:instagram" class="hover:text-brand-primary  h-6 w-6" />
            </a>
            <button
              type="button"
              class="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white hover:bg-white/10 cursor-pointer"
            >
              
              <UIcon  name="entypo-social:twitter"  class="hover:text-brand-primary  h-6 w-6" />
            </button>
          </div>
        </div>

        <!-- Utility pages -->
        <!-- <div class="space-y-3 text-center md:text-right">
          <h4 class="text-base font-semibold text-white">Utility Pages</h4>
          <nav class="flex flex-col gap-1 text-gray-300 md:items-end">
            <a href="#" class="hover:text-white transition-colors"
              >Style Guide</a
            >
            <a href="#" class="hover:text-white transition-colors">Protected</a>
            <a href="#" class="hover:text-white transition-colors">Not Found</a>
            <a href="#" class="hover:text-white transition-colors">Licenses</a>
            <a href="#" class="hover:text-white transition-colors">Changelog</a>
          </nav>
        </div> -->
      </div>

      <!-- Bottom copyright -->
      <div
        class="mt-auto border-t border-white/10 pt-4 text-center text-xs text-gray-500"
      >
        © {{ new Date().getFullYear() }} Urfa Kebap 26. All rights reserved.
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
declare const useI18n: () => { t: (key: string) => string };
const { t } = useI18n();
</script>

<style lang="scss" scoped>
h3 {
  font-family: "Playfair Display, sans-serif" !important;
}
</style>
