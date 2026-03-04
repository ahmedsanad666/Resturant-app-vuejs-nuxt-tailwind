<template>
  <section
    id="hero"
    class="relative overflow-hidden bg-brand-dark pt-28 text-white"
  >
    <div class="absolute bottom-[-100px] left-[-100px] z-0">
      <NuxtImg
        format="webp"
        quality="80"
        src="/images/heroImages/bgImg.png"
        alt="banner"
        class="w-100 h-100 object-cover"
      />
    </div>
    <div
      class="mx-auto flex max-w-6xl flex-col items-center gap-12 px-4 pb-16 pt-6 lg:flex-row lg:items-start lg:px-0 lg:pb-24 z-10"
    >
      <div class="w-full space-y-6 lg:w-1/2 z-10">
        <p
          class="text-sm font-semibold uppercase tracking-[0.28em] text-amber-400"
        >
          {{ $t("hero.badge") }}
        </p>

        <h1
          class="text-balance text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl"
        >
          {{ $t("hero.title") }}
        </h1>

        <p class="max-w-xl text-base text-gray-300 sm:text-lg z-10">
          {{ $t("hero.subtitle_text") }}
        </p>

        <div class="flex flex-wrap items-center gap-4">
          <a
            href="#menu"
            class="inline-flex items-center justify-center rounded-full bg-amber-500 px-7 py-3 text-sm font-semibold text-neutral-950 shadow-lg shadow-amber-500/30 transition hover:bg-amber-400 z-10"
          >
            {{ $t("hero.cta_primary") }}
          </a>

          <a
            href="#ourStory"
            class="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10 z-10"
          >
            <span
              class="i-lucide-play-filled h-4 w-4 rounded-full bg-amber-500 text-neutral-950"
            />
            {{ $t("hero.cta_secondary") }}
          </a>
        </div>

        <!-- <div class="mt-6 flex flex-wrap items-center gap-6 text-sm text-gray-300">
          <div class="flex -space-x-3">
            <span class="inline-flex h-8 w-8 items-center justify-center rounded-full bg-amber-500/90 text-xs font-semibold text-neutral-950">
              4.8
            </span>
          </div>
          <p>
            Trusted by
            <span class="font-semibold text-white">+2k happy customers</span>
          </p>
        </div> -->
      </div>

      <div class="relative w-full lg:w-1/2 flex gap-4 max-sm:flex-col max-sm:w-full">
        <!-- Left image card -->
        <div
          class="relative md:w-1/2 max-sm:h-[250px] h-full overflow-hidden rounded-[32px] max-sm:rounded-xl bg-neutral-900 shadow-[0_30px_80px_rgba(0,0,0,0.7)]"
        >
          <NuxtImg
            format="webp"
            quality="80"
            src="/images/heroImages/hero_1.jpg"
            alt="Signature dish"
            class="h-full w-full object-cover"
          />
        </div>

        <!-- Right image card -->
        <div
          class="relative lg:absolute max-sm:h-[250px] lg:right-[-10%] lg:top-[-50%] h-full md:w-1/2 overflow-hidden rounded-[32px] max-sm:rounded-xl bg-neutral-900 shadow-[0_30px_80px_rgba(0,0,0,0.7)]"
        >
          <NuxtImg
            format="webp"
            quality="80"
            src="/images/heroImages/hero_2.jpg"
            alt="Grilled kebab plate"
            class="h-full w-full object-cover"
          />
        </div>

        <!-- Circular badge -->
      </div>
    </div>

    <div
      class="pointer-events-none absolute -left-32 top-10 h-64 w-64 rounded-full bg-amber-500/5 blur-3xl"
    />
    <div
      class="pointer-events-none absolute -right-10 bottom-0 h-72 w-72 rounded-full bg-red-500/5 blur-3xl"
    />
  </section>
</template>

<style scoped lang="scss">
.banner {
  background-image: url("/images/heroImages/bgImg.png");
}
</style>
