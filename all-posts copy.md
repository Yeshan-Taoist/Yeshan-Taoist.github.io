---
layout: page
---

<script setup>
import { ref, computed } from 'vue'
import { postsData } from './posts.js'
console.log(postsData)

// 分页配置
const pageSize = 10
const currentPage = ref(1)

// 所有文章（已按分类 order 和文章 order 排序）
const allPosts = postsData.allPosts

// 当前页的文章
const paginatedPosts = computed(() => {
  const start = (currentPage.value - 1) * pageSize
  return allPosts.slice(start, start + pageSize)
})

// 总页数
const totalPages = computed(() => Math.ceil(allPosts.length / pageSize))

// 切换页码
function goToPage(page) {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

// 获取分类的友好名称（用于显示）
function getCategoryLabel(post) {
  const cat = postsData.categories.find(c => c.posts.some(p => p.url === post.url))
  return cat ? cat.label : post.category
}
</script>

<template>
  <h1>全部文章</h1>

  <ul>
    <li v-for="post in paginatedPosts" :key="post.url">
      <a :href="post.url">{{ post.title }}</a>
      <span v-if="post.date" class="date"> - {{ post.date }}</span>
      <span class="category"> [{{ getCategoryLabel(post) }}]</span>
    </li>
  </ul>

  <div class="pagination">
    <button :disabled="currentPage === 1" @click="goToPage(currentPage - 1)">« 上一页</button>
    <span>第 {{ currentPage }} / {{ totalPages }} 页</span>
    <button :disabled="currentPage === totalPages" @click="goToPage(currentPage + 1)">下一页 »</button>
  </div>
</template>

<style scoped>
.date {
  color: #888;
  font-size: 0.9em;
  margin-left: 0.5em;
}
.category {
  color: #42b883;
  font-size: 0.8em;
  margin-left: 0.5em;
  background: #eef4ff;
  padding: 0.2em 0.5em;
  border-radius: 12px;
}
.pagination {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
}
button {
  padding: 0.5rem 1rem;
  border: 1px solid #ddd;
  background: #fff;
  cursor: pointer;
  border-radius: 4px;
}
button:hover:not(:disabled) {
  background-color: #f0f0f0;
}
button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
