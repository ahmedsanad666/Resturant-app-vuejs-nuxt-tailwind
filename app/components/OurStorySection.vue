<template>
  <section id="ourStory" class="bg-brand-light py-16 text-brand-dark relative">
    <div
      class="mx-auto flex max-w-6xl flex-col items-center gap-10 px-4 lg:flex-row lg:items-center lg:px-0"
    >
      <!-- Image with framed effect -->
      <div class="w-full max-w-md lg:w-1/2">
        <div class="relative">
          <!-- Colored frame behind -->
          <div
            class="absolute -bottom-6 -left-6 h-full w-full rounded-3xl bg-brand-primary/80"
          />

          <!-- Main image card -->
          <div
            class="relative overflow-hidden rounded-3xl bg-white p-3 shadow-[0_20px_70px_rgba(15,23,42,0.20)]"
          >
            <div class="overflow-hidden rounded-2xl">
              <NuxtImg
                format="webp"
                quality="80"
                src="/images/about/about.jpg"
                alt="Urfa Kebap 26 restaurant front"
                class="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Text content -->
      <div class="w-full space-y-4 lg:w-1/2">
        <h2 class="text-2xl font-semibold text-brand-dark sm:text-3xl">
          {{ $t("about.title") }}
        </h2>

        <p class="text-sm leading-relaxed text-slate-700 sm:text-base">
          {{ $t("about.description") }}
        </p>

        <div class="mt-4 space-y-1 text-sm">
          <p class="font-semibold text-brand-dark">Ayten Usta</p>
          <p class="text-slate-500">Eskişehir, Odunpazarı</p>
        </div>
      </div>
    </div>
  </section>
</template>
