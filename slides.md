---
# You can also start simply with 'default'
theme: seriph
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: https://cover.sli.dev
# some information about your slides (markdown enabled)
title: 👋 AzLang
favicon: 'https://azlang.pages.dev/favicon.png'
info: |
  ## Bu təqdimat Azlang haqqında olacaq.
# apply unocss classes to the current slide
class: text-center
# https://sli.dev/features/drawing
drawings:
  persist: false
# slide transition: https://sli.dev/guide/animations.html#slide-transitions
transition: slide-left
# enable MDC Syntax: https://sli.dev/features/mdc
mdc: true
# open graph
# seoMeta:
#  ogImage: https://cover.sli.dev
seoMeta:
  ogTitle: Programing Language
---

# 👋 Salam!

Bu təqdimat Azlang haqqında olacaq

Proqramlaşdırma sadə ola bilər.
Sürətli ola bilər.
Və insanlar üçün dizayn edilə bilər.

<div @click="$slidev.nav.next" class="mt-12 py-1" hover:bg="white op-10">
  Digər səhifəyə keçid et <carbon:arrow-right />
</div>

<div class="abs-br m-6 text-xl">
  <button @click="$slidev.nav.openInEditor()" title="Open in Editor" class="slidev-icon-btn">
    <carbon:edit />
  </button>
  <a href="https://github.com/slidevjs/slidev" target="_blank" class="slidev-icon-btn">
    <carbon:logo-github />
  </a>
</div>

<!--
The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. [Read more in the docs](https://sli.dev/guide/syntax.html#notes)
-->

---
transition: fade-out
---

# Azlang nədir?

Azlang — sürət və sadəliyi birləşdirən, insanların rahat öyrənməsi üçün hazırlanmış yeni nəsil proqramlaşdırma dilidir.

- 🧠 **Simple Syntax** -  Python sadəliyində sintaksis ilə kod yazmaq asan və oxunaqlıdır
- ⚡ **High Performance** - C/C++ səviyyəsində sürət, aşağı səviyyəli optimizasiyalar
- 🧑‍🏫 **Beginner Friendly** -  Əzbərə ehtiyac yoxdur, intuisiyaya əsaslanan dizayn
- 🔒 **Safe & Modern** - Yaddaş təhlükəsizliyi və səhvlərin qarşısını alan strukturlar
- 🔧 **Modular Structure** -  Sadə modul sistemi və genişlənə bilən arxitektura
- 📤 **Cross-platform** - Windows, Linux, və macOS dəstəyi
- 🌱 **Open Sourcee** -  İstənilən kəs tərəfindən istifadə və inkişaf etdirilə bilər
<br>
<br>

Daha Çox Məlumat üçün [Azlang](https://azlang.pages.dev)

---
layout: center
transition: fade-out
---



# Məqsədimiz...

- 👶 İnsanlara proqramlaşdırmanı çətinliksiz öyrətmək
- 🛠️ Sadə bir dildə güclü sistemlər yaratmaq
- 🧠 Əzbər kod yazmağı tarixə çevirmək
- 🏫 Təhsil sistemində Python yerinə AzLang-ı gətirmək



<!--
You can have `style` tag in markdown to override the style for the current page.
Learn more: https://sli.dev/features/slide-scope-style
-->

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>


---

#  Compiler vs Interpreter 🤔

Arasındaki Fərqlər:

<div v-click>
🛠 **Compiler:** 

- Bütün kodu öncədən təhlil edir  
- Çıxış olaraq `binary/executable` fayl verir  
- Daha sürətlidir (çünki runtime zamanı təhlil olmur)
</div>


<br>


<div v-click>
🔄 **Interpreter:** 

- Kodu sətr-sətr oxuyur və icra edir  
- Çıxış faylı yoxdur  
- Daha elastikdir (amma daha yavaşdır)
</div>

<br>

<div v-click>
📌 **AzLang necədir?**  

AzLang, Zig compiler vasitəsilə **compiler-based** yanaşma istifadə edir.
</div>


<div mt-20 v-click>

[Learn more](https://sli.dev/guide/animations#click-animation)

</div>

---
layout: default
---

# Stack və Heap Yaddaş 🤔
<div class="grid grid-cols-2 gap-8">

<div>

## 📦 Stack — Sadə və Sürətli
<br>
<div v-click>
🔹 **Sabit dəyərlər** Stack yaddaşda saxlanılır  
 
🔹 Çox sürətlidir  

🔹 Avtomatik idarə olunur (scope bitdikdə silinir)
</div>

</div>

<div>

## 🏗 Heap — Daha böyük və elastik
<br>
<div v-click>
🔸 **Dəyişə bilən dəyərlər** Heap yaddaşda saxlanılır  
 
🔸 Daha elastik və dinamikdir  

🔸 İdarə olunması əlavə resurs tələb edir (manual və ya GC)  

🔸 Yaddaşın daha böyük hissəsindən istifadə edir
</div>

</div>

</div>

---
layout: center
class: text-center
---

# AzLang-də Tipləndirmə 📝

<div class="text-3xl font-bold text-[#2B90B6] mb-6" 
     v-motion
     :initial="{ x: -150, opacity: 0 }"
     :enter="{ x: 0, opacity: 1, transition: { duration: 800 } }">
  Dəyişənlərə Həyat Vermək.
</div>

<div class="flex justify-center gap-8 text-left"> 

  <div
    v-motion
    :initial="{ y: 100, opacity: 0, scale: 0.8 }"
    :enter="final"
    class="bg-white/10 rounded-2xl px-5 py-3 w-80 shadow-lg border border-white/10" 
  >
    🔗 <span class="font-bold text-lg">Hazır Tiplər</span><br> 
    <p class="text-sm">Kodunuzda istifadə edə biləcəyiniz əsas tiplər:</p> 
    <ul class="list-disc list-inside mt-1 text-sm"> 
      <li>**simvol**</li>
      <li>**ədəd,böyükədəd,kiçikədəd,kəsrədəd**</li>
      <li>**mətn**</li>
      <li>**məntiqi**</li>
    </ul>
    <h3 class="font-bold mt-3 text-base">Misal:</h3> 
    <div class="bg-black/20 rounded-lg p-2 text-xs font-mono mt-1">
      <pre><code>sabit a = 5
funksiya hesabla(b: ədəd): ədəd
    qaytar b + 4
çap(hesabla(a))</code></pre>
    </div>
  </div>

  <div
    v-motion
    :initial="{ y: 100, opacity: 0, scale: 0.8 }"
    :enter="{ ...final, transition: { delay: 400 } }"
    class="bg-white/10 rounded-2xl px-5 py-3 w-80 shadow-lg border border-white/10"  >
    🧩 <span class="font-bold text-lg">Xüsusi Tiplər (Növlər)</span><br> 
    <p class="text-sm">Özünüzə məxsus tiplər yaradaraq kodunuzu daha ifadəli edin:</p> 
    <ul class="list-disc list-inside mt-1 text-sm"> 
      <li>`növ` bənzəri tiplər</li>
      <li>Kodun oxunuşunu artırır</li>
      <li>Səhvlərin qarşısını alır</li>
    </ul>
    <h3 class="font-bold mt-3 text-base">Misal:</h3>  
    <div class="bg-black/20 rounded-lg p-2 text-xs font-mono mt-1"> 
    <pre><code class="language-azlang">növ Rengler
    Qirmizi
    Yasil
    Qara
sabit reng: Rengler = Qirmizi
</code></pre>
    </div>
  </div>

</div>

<script setup lang="ts">
const final = {
  x: 0,
  y: 0,
  rotate: 0,
  scale: 1,
  opacity: 1,
  transition: {
    type: 'spring',
    damping: 15,
    stiffness: 80,
    mass: 1
  }
}
</script>


---
layout: center
class: text-center
transition: slide-down
---

# AzLang 💡

<div class="text-5xl font-bold text-[#2B90B6] mb-8"
     v-motion
     :initial="{ x: -150, opacity: 0 }"
     :enter="{ x: 0, opacity: 1, transition: { duration: 800 } }">
  Sürət, Sadəlik, Təhlükəsizlik.
</div>

<div class="flex justify-center gap-12">

  <div
    v-motion
    :initial="{ y: 100, opacity: 0, scale: 0.8 }"
    :enter="final"
    class="bg-white/10 rounded-2xl px-6 py-4 w-72 shadow-lg border border-white/10"
  >
    🚀 <span class="font-bold">Yüksək Performans</span><br>
    Zig Compiler ilə <br> C/C++ səviyyəsində sürət
  </div>

  <div
    v-motion
    :initial="{ y: 100, opacity: 0, scale: 0.8 }"
    :enter="{ ...final, transition: { delay: 400 } }"
    class="bg-white/10 rounded-2xl px-6 py-4 w-72 shadow-lg border border-white/10"
  >
    🎯 <span class="font-bold">Sadə Sintaksis</span><br>
    Yeni başlayanlar üçün <br> əzbərsiz proqramlaşdırma
  </div>

  <div
    v-motion
    :initial="{ y: 100, opacity: 0, scale: 0.8 }"
    :enter="{ ...final, transition: { delay: 800 } }"
    class="bg-white/10 rounded-2xl px-6 py-4 w-72 shadow-lg border border-white/10"
  >
    📦 <span class="font-bold">Təmiz Kompilyasiya</span><br>
    Kod → Zig → Executable <br> aydın və nəzarətli çevrilmə
  </div>

</div>

<script setup lang="ts">
const final = {
  x: 0,
  y: 0,
  rotate: 0,
  scale: 1,
  opacity: 1,
  transition: {
    type: 'spring',
    damping: 15,
    stiffness: 80,
    mass: 1
  }
}
</script>

---
layout: center
class: text-center
---

# Niyə AzLangı Yazdım? 🤔

<div class="text-5xl font-bold text-[#2B90B6] mb-8"
     v-motion
     :initial="{ x: 150, opacity: 0 }"
     :enter="{ x: 0, opacity: 1, transition: { duration: 800 } }">
  Hər Dildən İlham Alınan Yenilik.
</div>

<div class="flex justify-center gap-12 text-left">

  <div
    v-motion
    :initial="{ y: 100, opacity: 0, scale: 0.8 }"
    :enter="final"
    class="bg-white/10 rounded-2xl px-6 py-4 w-96 shadow-lg border border-white/10"
  >
    💡 <span class="font-bold">Əsas Məqsəd: Sadəlik və Performans</span><br>
    Fərqli proqramlaşdırma dillərinin ən yaxşı özəlliklərini bir araya gətirmək.
  </div>

  <div
    v-motion
    :initial="{ y: 100, opacity: 0, scale: 0.8 }"
    :enter="{ ...final, transition: { delay: 400 } }"
    class="bg-white/10 rounded-2xl px-6 py-4 w-96 shadow-lg border border-white/10"
  >
    ✨ <span class="font-bold">İlham Alınan Özəlliklər</span><br>
    <ul>
      <li>**Laravel (PHP):** `dd()` → `sonsöz("Salam")`</li>
      <li>**JavaScript:** Interpolation → `çap(${1+1})`</li>
      <li>**Python:** Blok idarəsi üçün boşluqlar</li>
      <li>**Rust:** Güclü `Enum` (Növlər) və `match` → `uyğun`</li>
    </ul>
  </div>

</div>

<script setup lang="ts">
const final = {
  x: 0,
  y: 0,
  rotate: 0,
  scale: 1,
  opacity: 1,
  transition: {
    type: 'spring',
    damping: 15,
    stiffness: 80,
    mass: 1
  }
}
</script>

---
layout: center
class: text-center
---

# Təşəkkürlər!

AzLang ilə gələcək daha aydındır ✨

Gəlin birlikdə kod yazmağı həqiqətən başa düşək.

[Sənədlər](https://azlang.pages.dev/docs) · [GitHub](https://github.com/Prestgg1/azlang)

