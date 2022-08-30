<script setup lang="ts">
const CONSTANT = "これは定数です";

// let counter = ref(1);
const counter = useState("counter", () => 1);

const increment = () => counter.value++;

type BaseProps = {
  message?: string;
  labels?: () => string[];
};
// NOTE: 型定義の利用は Interface しか利用できなさそう
type Props = {
  message?: string;
  labels?: () => string[];
};

interface MyComponentIsFooProps extends BaseProps {
  isFoo: true;
  foo: string;
}
interface MyComponentIsNotFooProps extends BaseProps {
  isFoo: false;
}

interface MyComponentProps extends BaseProps {
  Args: {
    Props:
      | {
          isFoo: true;
          foo: string;
        }
      | {
          isFoo: false;
        };
  };
}

const props = withDefaults(defineProps<Props>(), {
  message: "hello",
  labels: () => ["one", "two"],
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
