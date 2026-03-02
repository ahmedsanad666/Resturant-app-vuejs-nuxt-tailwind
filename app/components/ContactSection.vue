<template>
  <section id="contact" class="bg-brand-dark/50 py-12 md:py-16 text-white">
    <div
      class="mx-auto max-w-6xl px-4 grid gap-10 md:grid-cols-3 text-center md:text-left"
    >
      <div class="text-center">
        <h3
          class="md:text-lg text-md font-semibold uppercase tracking-[0.2em] mb-3"
        >
          {{ $t("contact.address.title") }}
        </h3>
        <p class="md:text-md text-sm text-gray-300">
          Deliklitaş mahallesi Yunusemre caddesi
        </p>
        <p class="mt-1 md:text-md text-sm text-gray-300">
          no : 99, Eskisehir, Turkey
        </p>
      </div>

      <div class="text-center">
        <h3
          class="md:text-lg text-md font-semibold uppercase tracking-[0.2em] mb-3"
        >
          {{ $t("contact.hours.title") }}
        </h3>
        <p class="md:text-md text-sm text-gray-300">
          {{ $t("contact.hours.weekday") }}
        </p>
        <p class="mt-1 md:text-md text-sm text-gray-300">
          {{ $t("contact.hours.weekend") }}
        </p>
      </div>

      <div class="text-center">
        <h3
          class="md:text-lg text-md font-semibold uppercase tracking-[0.2em] mb-3"
        >
          {{ $t("contact.info.title") }}
        </h3>
        <!-- <p class="md:text-md text-sm text-gray-300">
          {{ $t("contact.info.email") }}
        </p> -->
        <a
          href="https://wa.me/902222335171"
          target="_blank"
          class="inline-flex items-center justify-center gap-2 mt-1 md:text-md text-sm text-gray-300 hover:text-green-400 transition-colors duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path
              d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
            />
          </svg>
          <span>+90 222 233 51 71</span>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
p,
h3 {
  font-family: "Arima Madurai", sans-serif !important;
}
</style>
