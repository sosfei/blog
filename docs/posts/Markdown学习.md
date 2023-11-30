---
title: Markdown学习
description: Markdown学习
date: 2023.11
---

<!--@include: ../help.md-->

# markdown 语法学习{# my-harder .text-center}

<style>
    .text-center {
        text-align: center;
    }
</style>

[博客一](./index.md)

[博客一](./index.md){target="_blank" rel="noreferrer"}

[博客一](./index.md){target="download" download}

{{ $frontmatter.title }}

{{ $frontmatter }}

| Tables        |      Are      |  Cool |
| ------------- | :-----------: | ----: |
| col 3 is      | right-aligned | $1600 |
| col 2 is      |   centered    |   $12 |
| zebra stripes |   are neat    |    $1 |

:tada: :100:

[[toc]]

::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::

::: danger STOP
Danger zone, do not proceed
:::

::: details Click me to view the code
```js
console.log('Hello, VitePress!')
```
:::

::: raw
Wraps in a <div class="vp-raw">{{1+1}}</div>
:::

```js
export default {
  name: 'MyComponent',
  // ...
}
```

```html
<ul>
  <li v-for="todo in todos" :key="todo.id">
    {{ todo.text }}
  </li>
</ul>
```

```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

```js{1,4,6-8}
export default { // Highlighted
  data () {
    return {
      msg: `Highlighted!
      This line isn't highlighted, // [!code focus]
      but this and the next 2 are.`,
      motd: 'VitePress is awesome',
      lorem: 'ipsum'
    }
  }
}
```

```js{1,4,6-8}
export default { // Highlighted
  data () {
    return {
      msg: `Highlighted!
      This line isn't highlighted, // [!code --]
      but this and the next 2 are.`,
      motd: 'VitePress is awesome',
      lorem: 'ipsum'  // [!code ++]
    }
  }
}
```

```js{1,4,6-8}
export default { // Highlighted
  data () {
    return {
      msg: `Highlighted!
      This line isn't highlighted, // [!code error]
      but this and the next 2 are.`,
      motd: 'VitePress is awesome',
      lorem: 'ipsum'  // [!code warning]
    }
  }
}
```