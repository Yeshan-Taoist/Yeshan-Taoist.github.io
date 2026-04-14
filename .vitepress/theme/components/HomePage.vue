<template>
  <div class="custom-home">
    <!-- 背景特效元素 -->
    <div class="noise"></div>
    <video id="leaves-overlay" src="/leaves.mp4" loop muted playsinline preload="none"></video>
    <audio id="forest-audio" src="/forest.mp3" loop preload="none"></audio>
    <div class="sun-glow"></div>
    <div class="light-shaft light-shaft-1"></div>
    <div class="light-shaft light-shaft-2"></div>
    <div class="light-shaft light-shaft-3"></div>

    <!-- 右上角导航栏 -->
    <div class="mode-indicator">
      <a class="subtle-link mode-link" target="_blank" href="https://yeshan-bookself.yeshan-taoist.cn/">笔由随心</a>
      <div class="mode-dot" id="dot-night"></div>
      <div class="mode-dot" id="dot-day"></div>
      <div class="mode-dot" id="dot-sunny"></div>
    </div>

    <main class="page">
      <!-- 标题 -->
      <section class="hero home-hero">
        <div class="logo">
          <button class="logo-letter" @click="cycleTheme">
            野<span class="logo-hint">Ye</span>
          </button>
          <button class="logo-letter" @click="cycleTheme">
            山<span class="logo-hint">Shan</span>
          </button>
          <button class="logo-letter" @click="cycleTheme">
            杂<span class="logo-hint">Za</span>
          </button>
          <button class="logo-letter" @click="cycleTheme">
            货<span class="logo-hint">Huo</span>
          </button>
          <button class="logo-letter" @click="cycleTheme">
            铺<span class="logo-hint">Pu</span>
          </button>
        </div>
        <p class="bio">📖一个用来记录个人思绪的地方。</p>
      </section>

      <div class="divider"></div>

      <!-- 文章列表 -->
      <section class="section home-stream-section">
        <div class="section-head">
          <div></div>
        </div>
        <div class="entries">
          <article v-for="post in paginatedPosts" :key="post.url" class="entry-card visible">
            <a class="entry-link" :href="post.url">
              <h2 class="entry-title">{{ post.title }}</h2>
              <p class="entry-excerpt">{{ post.summary }}</p>
              <div class="entry-meta"><span class="meta-chip" :datetime="post.date">{{ post.date }}</span></div>
            </a>
          </article>
        </div>
        <div v-if="allPosts.length === 0" id="posts-empty" class="empty-state">还没有发布文章。你可以先去后台写第一篇。</div>
      </section>

      <!-- 翻页功能 -->
      <div v-if="totalPages > 1" id="home-posts-pagination" class="home-pagination">
        <button class="button button-ghost home-page-button" type="button" :disabled="currentPage === 1"
          @click="changePage(currentPage - 1)">上一页</button>
        <div class="home-page-indicator">第 {{ currentPage }} / {{ totalPages }} 页</div>
        <button class="button button-ghost home-page-button" type="button" :disabled="currentPage === totalPages"
          @click="changePage(currentPage + 1)">下一页</button>
      </div>

      <div class="divider"></div>

      <!-- Connect -->
      <section class="section connect-section">
        <div class="section-title">Connect</div>
        <div class="links links-connect">
          <a href="https://v.douyin.com/HsoNLClVVMk/" target="_blank" rel="noreferrer">TikTok</a>
          <a href="https://space.bilibili.com/628881884?spm_id_from=333.1007.0.0" target="_blank"
            rel="noreferrer">BiLiBiLi</a>
          <a href="mailto:mypotato90@outlook.com">邮箱</a>
        </div>
      </section>
    </main>

    <div class="shortcuts-hint">
      <kbd>D</kbd> day &nbsp; <kbd>N</kbd> night &nbsp; <kbd>S</kbd> sunny
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { data } from '../../posts.data'

// 从数据加载器中获取所有文章和分类树
const { allPosts, categories } = data

// 分页配置
const pageSize = 8           // 每页显示文章数
const currentPage = ref(1)

// 总页数
const totalPages = computed(() => Math.ceil(allPosts.length / pageSize))

// 当前页显示的文章
const paginatedPosts = computed(() => {
  const start = (currentPage.value - 1) * pageSize
  return allPosts.slice(start, start + pageSize)
})

// 切换页码
function changePage(page) {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

// 主题相关函数
function updateModeDots(mode) {
  const dotNight = document.getElementById('dot-night')
  const dotDay = document.getElementById('dot-day')
  const dotSunny = document.getElementById('dot-sunny')
  dotNight?.classList.remove('active')
  dotDay?.classList.remove('active')
  dotSunny?.classList.remove('active')
  if (mode === 'night') dotNight?.classList.add('active')
  else if (mode === 'day') dotDay?.classList.add('active')
  else if (mode === 'sunny') dotSunny?.classList.add('active')
}

function setTheme(mode) {
  const body = document.body
  body.classList.remove('light', 'sunny')
  if (mode === 'day') body.classList.add('light')
  else if (mode === 'sunny') body.classList.add('light', 'sunny')
  localStorage.setItem('yeshan-display-mode', mode)
  updateModeDots(mode)
}

function getCurrentTheme() {
  const body = document.body
  if (body.classList.contains('light') && body.classList.contains('sunny')) return 'sunny'
  if (body.classList.contains('light')) return 'day'
  return 'night'
}

function cycleTheme() {
  const themeOrder = ['day', 'sunny', 'night']
  const current = getCurrentTheme()
  const nextIndex = (themeOrder.indexOf(current) + 1) % themeOrder.length
  setTheme(themeOrder[nextIndex])
}

function initTheme() {
  const savedMode = localStorage.getItem('yeshan-display-mode')
  if (savedMode === 'day') document.body.classList.add('light')
  else if (savedMode === 'sunny') document.body.classList.add('light', 'sunny')
  else document.body.classList.remove('light', 'sunny')
  updateModeDots(savedMode === 'day' ? 'day' : (savedMode === 'sunny' ? 'sunny' : 'night'))
}

function handleKeydown(e) {
  const key = e.key.toLowerCase()
  if (key === 'd') setTheme('day')
  else if (key === 'n') setTheme('night')
  else if (key === 's') setTheme('sunny')
}

onMounted(() => {
  initTheme()
  window.addEventListener('keydown', handleKeydown)

  const dotNight = document.getElementById('dot-night')
  const dotDay = document.getElementById('dot-day')
  const dotSunny = document.getElementById('dot-sunny')
  if (dotNight) dotNight.addEventListener('click', () => setTheme('night'))
  if (dotDay) dotDay.addEventListener('click', () => setTheme('day'))
  if (dotSunny) dotSunny.addEventListener('click', () => setTheme('sunny'))

  const audio = document.getElementById('forest-audio')
  const video = document.getElementById('leaves-overlay')
  if (audio && video) {
    const playMedia = () => {
      audio.play().catch(e => console.log('Audio play prevented:', e))
      video.play().catch(e => console.log('Video play prevented:', e))
      window.removeEventListener('click', playMedia)
    }
    window.addEventListener('click', playMedia)
  }
})
</script>