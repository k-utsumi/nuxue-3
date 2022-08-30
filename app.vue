<script setup lang="ts">
//
</script>

<template>
  <Head>
    <Title>aaa</Title>
  </Head>

  <template v-if="1">
    <p>bbb</p>

    <p>ccc</p>
  </template>

  <p>ddd</p>

  <MyComponent :isFoo="true" />
  <FooMyComponent :isFoo="true" />

  <p>eee</p>
</template>
