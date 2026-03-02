<script setup lang="ts">
import { computed } from 'vue'

declare const useI18n: () => { t: (key: string) => string; locale: any }
declare const useLocaleHead: (options: any) => { value: { htmlAttrs?: any; link?: any[]; meta?: any[] } }
declare const useHead: (input: any) => void
declare const useSeoMeta: (input: any) => void

const { t, locale } = useI18n()
const head = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: 'id',
  addSeoAttributes: true
})

const title = computed(() => `${t('hero.title')} | Urfa Kebap 1973`)
const description = computed(() => t('hero.subtitle'))

useHead({
  htmlAttrs: {
    lang: head.value.htmlAttrs?.lang
  },
  link: [
    ...(head.value.link || []),
    { rel: 'icon', href: '/og-image-kebap.jpg' }
  ],
  meta: [
    ...(head.value.meta || []),
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ]
})

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: '/og-image-kebap.jpg',
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <div class="min-h-screen bg-brand-dark text-white">
    <NavBar />

    <main>
      <NuxtPage />
    </main>
  </div>
</template>
