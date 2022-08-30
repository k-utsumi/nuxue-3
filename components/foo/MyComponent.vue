<script setup lang="ts">
const CONSTANT = "これは定数です";

const counter = ref(1);
// const counter = useState("counter", () => 1);
const increment = () => counter.value++;

type Props = {
  message?: string;
  labels?: () => string[];
};
const props = withDefaults(defineProps<Props>(), {
  message: "hello",
  labels: () => ["one", "two"],
  isFoo: true,
  isBar: true,
});
</script>

<template>
  <div class="aa">
    <p>変数の動作テスト > {{ counter }}</p>
    <button @click="increment">+</button>
    <p>{{ CONSTANT }}</p>

    <p>{{ message }}</p>
  </div>
</template>

<style scoped>
div {
  padding: 1em;
  /* background: rgb(255, 238, 238); */
  color: rgb(170, 170, 220);
}
</style>
