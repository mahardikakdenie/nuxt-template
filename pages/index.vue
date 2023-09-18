<template>
  <div>
    <HerroBanner />
    <CategorySection />
    <SectionCollection />
    <SectionFeatureContent />
  </div>
</template>
<script setup>
const description = ref('My amazing site.')

useSeoMeta({
  title: 'Mahardika Store',
  ogTitle: 'My Amazing Site',
  description,
  ogDescription: 'This is my amazing site, let me tell you all about it.',
  ogImage: 'https://unsplash.com/random',
  twitterCard: 'summary_large_image',
})
</script>
