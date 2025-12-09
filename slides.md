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

AzLang, **hər iki** yanaşmanı birlikdə istifadə edir.
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
      <li>**ədəd,böyükədəd,kiçikədəd,kəsr**</li>
      <li>**mətn**</li>
      <li>**şərt**</li>
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
    Compiler ilə <br> C/C++ səviyyəsində sürət
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
    Kod → Zig →  Executable <br> aydın və nəzarətli çevrilmə
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

# AzLangın Texnologiya Qalereyası 🚀

<div class="grid grid-cols-4 gap-6 items-center justify-center mt-8">

  <div
    v-motion
    :initial="{ scale: 0.5, opacity: 0 }"
    :enter="{ scale: 1, opacity: 1, transition: { duration: 500, delay: 0 } }"
    class="flex flex-col items-center"
  >
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png" class="h-20" alt="Vue.js Logo" />
    <span class="text-lg font-semibold mt-2">Vue.js</span>
  </div>

  <div
    v-motion
    :initial="{ scale: 0.5, opacity: 0 }"
    :enter="{ scale: 1, opacity: 1, transition: { duration: 500, delay: 100 } }"
    class="flex flex-col items-center"
  >
    <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" class="h-20" alt="Tailwind CSS Logo" />
    <span class="text-lg font-semibold mt-2">Tailwind CSS</span>
  </div>

  <div
    v-motion
    :initial="{ scale: 0.5, opacity: 0 }"
    :enter="{ scale: 1, opacity: 1, transition: { duration: 500, delay: 200 } }"
    class="flex flex-col items-center"
  >
    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAYFBMVEUxeMb///8lc8QqdcUab8OkvOHB0utAgMlVisz7/P4eccN8otYAYr7d5vSDp9gAacGWs9309/sAZsDS3vDL2e3i6vVql9JwnNOvxeWNrts4fMi6zejp7/hPh8ycuN9iktDf6a5cAAAF8ElEQVR4nO2d63KDKBSAETAoxvv9Ft//LReT3U67BaMIajrnm+m/aP0CAgcOBDmCfOToo+FjPnsg8VdW9Oyn2QutypeMn8RnP8t+4sR/yhQfXsde8GKWSeuPr2QztE6FTP4HKtlMnAuZ6E8UjCiaSMj8ERdh46A8O/shTJHlyP0jr4x4aVxU47MfwhS4Royc/RCmIOzsJwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4CMhmHNOxR/mmHzuFmxC4+wed+NU1UFQ15U3Mp5lWUyxUSdshkWRLGNRUwzDkH5jGMqiaSd+j40dxkI8M6h2uxN6523u+44C3x/6Os6oiQIinfLfbOMhO7mDEMqSYcXVZdsZsCFdasTFT37LENJVt9V3qPbbWJThXb1exXGC/adl2JOhU7OpBl9YhvAo3HaH68pg5G5tWC4rg1m/+Q5XlcHddperyhDcaNzhojK01bnDNWV4rXXLS8oQtqWrvLgMDvTucEUZ0i11lmkZ5oUgz8Pyf//4ijK4Vn5muLltNXZExJqITXXr9sW3EbUZGV+B/KFV/CdDC4VK6dadCCxfkSURATSlfKwffWlOBqFAgXTIm0eqj3uvETzhipLrJ/w7ABOF1FVt4RuT4XJo/JA8062jis//+6B8kru4nSI2FkXEnt+bERkV1JXJvDvWLpZ3/j1fuI7grgqvKJNJ27IBLV9GMHVrm1NPejJ3aePYvD8Nk1o9llFTRubi12ef7KslQ6hUxjv7NEy9kiFSmekzSwZJZdqzj8PVk5GWjFOcfRyuwXfm/OOwDbZmYhjEzn1rTPYz8zjoVBvNEUAul3EKdmZN05OhiULGGSojyxZ6aPYzTCUjBjWMnNV56skguhC5+u14ko6mDJdd9kXZemQpGrCFpgzxlmQcJ3RrdPzLoymD0Lt55qGPyNE6ujK4ejvfkxYPFh+qo10yZPGteeGHzZgd2BZoy+BR1XH+0Bl6lh1WOtoyiNZrVstFbWvwUaMCfRkUtyunSdPWbuj/xQ4ZFCdrJ33LyWzyjII9Mih7rJ7Cdo+IDnbJoCwqJZdLCSv72Vr7ZFA8rWnTnqRtZ/vN2SmDKGvWNWrC5mHbZq8MIjhQLW/8snHfzN/uZbcMIpy1KwvHf1xdZp55Glc20r7VRQAjMrMOWpcV4JvInlNiRuaZobmqmbb662ymZOZbZV6Rvs1yCiwO1AzKiGA6Y035Rie1WDRGZURti7tHvtwYWPzlPMMysw5KiiWd0N70unGZuS3okoVBTjpaa54tyMz96Ogq+1FfmhttBCsyc/ZmrSwce8s4lmTmBE5lRoq1yMaajHh1FDaDtV8CtCeDyF0+JEitLbFblFGuFlobBNiUQZl0Dje1tiptVQaPHyGzst+T1rOryeBg3QQ/lY060+haDUAWNmjN1ysvmYu1ZqLRvU3vx/Lyd2awlmOjKROKZ0rou4fKpAmDg7XQWV/G8XNveS1J0c+U1sKzHTKCHi3o4Ew+cr7aQPP+laNZjJhIZ/gJZ3IX2Y5CQ+yVEZFj67F5g+63SwjGHVNNpV0uOLv/zJ7N3WAahdFrezbpxilolJFzebflYkZm/r7DW5O0bdS27aMplqZrLzeh8VtmNenl5s12yESXmzfTl8ltrjwfLGM39/lgmfaCSxq6Mq7dRdpDZZpLLgNqyfjN2gD1+jLDw3pyoHZwtpUisLlmtkcmVg+95IRud0Bqk+5UU9BsKJzQnQ5JCdRNOKVoavtVxePfWo8fk1UvlSnWTAJizLygeZM6M/TRxBYPEnpiaNKReNFvqm7dtSIg69iU9NJVzDRvorHr5HHoj9swVBtqs4nkRKYtySbiek4pYVMgApmm72994yZzcYg4bd0ZWrhGrv2WbgOEEEpp/ITGlG45Cix2UX72nihjZDlyzt6tZgzqIJux9KHQSMhYTak5kDgXMqfvvTMDrVMh4xRnb1g1Ai+cWcZP/kBFixP/KeOU1cdXNFrN49Xn7uJ8/PCaxl9bPf4BF1JehMuKhqAAAAAASUVORK5CYII=" class="h-20" alt="TypeScript Logo" />
    <span class="text-lg font-semibold mt-2">TypeScript</span>
  </div>

  <div
    v-motion
    :initial="{ scale: 0.5, opacity: 0 }"
    :enter="{ scale: 1, opacity: 1, transition: { duration: 500, delay: 300 } }"
    class="flex flex-col items-center"
  >
    <img src="https://seeklogo.com/images/V/vite-logo-BFD4283991-seeklogo.com.png" class="h-20" alt="Vite Logo" />
    <span class="text-lg font-semibold mt-2">Vite</span>
  </div>

 
  <div
    v-motion
    :initial="{ scale: 0.5, opacity: 0 }"
    :enter="{ scale: 1, opacity: 1, transition: { duration: 500, delay: 500 } }"
    class="flex flex-col items-center"
  >
    <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" class="h-20" alt="JavaScript Logo" />
    <span class="text-lg font-semibold mt-2">JavaScript</span>
  </div>

  <div
    v-motion
    :initial="{ scale: 0.5, opacity: 0 }"
    :enter="{ scale: 1, opacity: 1, transition: { duration: 500, delay: 600 } }"
    class="flex flex-col items-center"
  >
    <img src="data:image/png;base64,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" class="h-20" alt="Python Logo" />
    <span class="text-lg font-semibold mt-2">Svelte</span>
  </div>

  <div
    v-motion
    :initial="{ scale: 0.5, opacity: 0 }"
    :enter="{ scale: 1, opacity: 1, transition: { duration: 500, delay: 700 } }"
    class="flex flex-col items-center"
  >
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Rust_programming_language_black_logo.svg/1200px-Rust_programming_language_black_logo.svg.png" class="h-20" alt="Rust Logo" />
    <span class="text-lg font-semibold mt-2">Rust</span>
  </div>

  <div
    v-motion
    :initial="{ scale: 0.5, opacity: 0 }"
    :enter="{ scale: 1, opacity: 1, transition: { duration: 500, delay: 800 } }"
    class="flex flex-col items-center"
  >
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-64Y39jPPLHQzr-Hpn6EQPgbwTDicm1uxHQ&s" class="h-20" alt="Git Logo" />
    <span class="text-lg font-semibold mt-2">Tauri</span>
  </div>

  <div
    v-motion
    :initial="{ scale: 0.5, opacity: 0 }"
    :enter="{ scale: 1, opacity: 1, transition: { duration: 500, delay: 900 } }"
    class="flex flex-col items-center"
  >
    <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" class="h-20" alt="GitHub Logo" />
    <span class="text-lg font-semibold mt-2">GitHub</span>
  </div>

  <div
    v-motion
    :initial="{ scale: 0.5, opacity: 0 }"
    :enter="{ scale: 1, opacity: 1, transition: { duration: 500, delay: 1000 } }"
    class="flex flex-col items-center"
  >
    <img src="https://turso.tech/logokit/turso-logomark-aqua.png" class="h-20" alt="Turso Logo" />
    <span class="text-lg font-semibold mt-2">Turso</span>
  </div>


  <div
    v-motion
    :initial="{ scale: 0.5, opacity: 0 }"
    :enter="{ scale: 1, opacity: 1, transition: { duration: 500, delay: 1000 } }"
    class="flex flex-col items-center"
  >
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfhv4TXVsbP_J543GMEY4EHbLPIHXRFdS6CA&s" class="h-20" alt="Turso Logo" />
    <span class="text-lg font-semibold mt-2">Slidev</span>
  </div>

 <div
    v-motion
    :initial="{ scale: 0.5, opacity: 0 }"
    :enter="{ scale: 1, opacity: 1, transition: { duration: 500, delay: 1000 } }"
    class="flex flex-col items-center"
  >
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNlvA02-B3FrOV_HndNTlkJ4udNLNrqZp_Cw&s" class="h-20" alt="Zig Logo" />
    <span class="text-lg font-semibold mt-2">Zig</span>
  </div>


</div>

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

