<template>
  <section  class="bg-brand-light py-16 text-brand-dark">
    <div class="mx-auto max-w-6xl px-4 text-center">
      <p
        class="text-xs font-semibold uppercase tracking-[0.3em] text-brand-primary"
      >
        {{ $t("menuSection.badge") || "Our Menu" }}
      </p>
      <h2 class="mt-3 text-2xl font-semibold sm:text-3xl">
        {{
          $t("menuSection.title") || "Focusing on Flavor, Quality & Creativity"
        }}
      </h2>
      <p class="mt-2 text-sm text-slate-600 sm:text-base">
        {{
          $t("menuSection.subtitle") ||
          "Discover the plates that made Urfa Kebap 26 a classic."
        }}
      </p>

      <div class="mt-10 grid gap-10 md:grid-cols-3">
        <!-- Card 1 -->
        <div class="flex flex-col items-center text-left md:text-center">
          <div
            class="relative mx-auto h-50 w-50 overflow-hidden rounded-full bg-[#e7e7e7] shadow-[0_20px_60px_rgba(15,23,42,0.18)]"
          >
            <NuxtImg
              format="webp"
              quality="80"
              src="/images/menu/home1.png"
              alt="Kebap plate"
              class="h-full w-full object-cover"
            />
          </div>
          <h3
            class="mt-5 text-base font-semibold text-brand-primary sm:text-lg"
          >
            {{
              $t("menuSection.items.quality.title") ||
              "Focusing on Quality and Local Sourcing"
            }}
          </h3>
          <p class="mt-2 text-sm leading-relaxed text-slate-600">
            {{
              $t("menuSection.items.quality.description") ||
              "Only the freshest, locally sourced ingredients – charcoal-grilled to perfection for a taste you can trust in every bite."
            }}
          </p>
        </div>

        <!-- Card 2 -->
        <div class="flex flex-col items-center text-left md:text-center">
          <h3
            class="mt-5 text-base font-semibold text-brand-primary sm:text-lg"
          >
            {{
              $t("menuSection.items.authenticity.title") ||
              "Focusing on Authenticity"
            }}
          </h3>
          <p class="mt-2 text-sm leading-relaxed text-slate-600">
            {{
              $t("menuSection.items.authenticity.description") ||
              "From hand-kneaded köfte to zırh kebap, each plate follows traditional Urfa recipes passed down through generations."
            }}
          </p>
          <div
            class="relative mx-auto h-50 w-50 overflow-hidden rounded-full bg-[#e7e7e7] shadow-[0_20px_60px_rgba(15,23,42,0.18)]"
          >
            <NuxtImg
              format="webp"
              quality="80"
              src="/images/menu/home2.png"
              alt="Authentic Urfa flavors"
              class="h-full w-full object-cover"
            />
          </div>
        </div>

        <!-- Card 3 -->
        <div class="flex flex-col items-center text-left md:text-center">
          <div
            class="relative mx-auto h-50 w-50 overflow-hidden rounded-full bg-brand-light shadow-[0_20px_60px_rgba(15,23,42,0.18)]"
          >
            <NuxtImg
              format="webp"
              quality="80"
              src="/images/menu/home3.png"
              alt="Creative specials"
              class="h-full w-full object-cover"
            />
          </div>
          <h3
            class="mt-5 text-base font-semibold text-brand-primary sm:text-lg"
          >
            {{
              $t("menuSection.items.creativity.title") ||
              "Focusing on Creativity and Variety"
            }}
          </h3>
          <p class="mt-2 text-sm leading-relaxed text-slate-600">
            {{
              $t("menuSection.items.creativity.description") ||
              "Seasonal specials and rich meze selections bring new flavors to the table while honoring our Urfa roots."
            }}
          </p>
        </div>
      </div>

      <div class="mt-18">
        <NuxtLink
          to="/menu"
          class="inline-flex items-center justify-center rounded-full bg-brand-primary px-8 py-3 text-sm font-semibold text-white shadow-[0_12px_40px_rgba(248,113,22,0.55)] transition hover:bg-orange-500"
        >
          {{ $t("menuSection.cta") || "Menu" }}
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
