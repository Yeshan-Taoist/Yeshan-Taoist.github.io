<template>
  <div class="pagination">
    <button :disabled="currentPage === 1" @click="changePage(currentPage - 1)">
      « 上一页
    </button>
    <span>第 {{ currentPage }} / {{ totalPages }} 页</span>
    <button
      :disabled="currentPage === totalPages"
      @click="changePage(currentPage + 1)"
    >
      下一页 »
    </button>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  totalItems: Number,
  itemsPerPage: { type: Number, default: 10 },
  modelValue: { type: Number, default: 1 },
});
const emit = defineEmits(["update:modelValue"]);

const totalPages = computed(() =>
  Math.ceil(props.totalItems / props.itemsPerPage),
);

function changePage(page) {
  if (page >= 1 && page <= totalPages.value) {
    emit("update:modelValue", page);
  }
}
</script>

<style scoped>
.pagination {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin: 2rem 0;
}
button {
  padding: 0.5rem 1rem;
  border: 1px solid #ddd;
  background: #fff;
  cursor: pointer;
}
button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
