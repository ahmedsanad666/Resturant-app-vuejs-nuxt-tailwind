<template>
  <section
    id="menu-hero"
    class="relative overflow-hidden bg-brand-dark pt-28 text-white"
  >
    <div
      class="mx-auto flex min-h-[calc(100vh-7rem)] max-w-6xl flex-col items-center gap-10 px-4 lg:flex-row lg:items-center lg:px-0"
    >
      <!-- Text content -->
      <div class="relative z-10 w-full max-w-xl space-y-5">
        <p
          class="text-sm font-semibold uppercase tracking-[0.28em] text-brand-primary"
        >
          {{ $t("menuHero.badge") }}
        </p>

        <h1 class="text-4xl font-semibold sm:text-8xl">
          {{ $t("menuHero.title") }}
        </h1>

        <p class="max-w-md text-sm text-gray-300 sm:text-base">
          {{ $t("menuHero.subtitle") }}
        </p>

        <NuxtLink
          to="#menu"
          class="inline-flex items-center justify-center rounded-full border border-white px-7 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-brand-dark"
        >
          {{ $t("menuHero.cta") }}
        </NuxtLink>
      </div>

      <!-- Image -->
      <div class="relative w-full lg:flex-1">
        <div class="relative h-64 w-full lg:h-80">
          <img
            src="assets/images/menu/home1.png"
            alt="Featured dish"
            class="heroImg absolute lg:h-[984px] lg:right-[-52%] lg:bottom-[-152%] w-auto max-w-none rounded-[999px] object-cover"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.heroImg {
  transform: rotate(132deg);
}
</style>
>

<!-- bottom: -152%;
    transform: rotate(131deg);
    height: 984px;
    right: -52%; -->
