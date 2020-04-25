# @ngsctt/remark-smartypants
A plugin to apply [SmartyPants][] formatting to markdown processed with [Remark][].
Uses [retext-smartypants][] Based on the tutorials at https://mdxjs.com/advanced/plugins#using-retext-plugins and https://unifiedjs.com/learn/guide/create-a-plugin/.
Probably very similar or identical to [@silvenon/remark-smartypants][silvernon] for that reason.
Additionally checks that the text is not inside a `<script>` or `<style>` node.

## Why
I wanted smart quotes in my markdown, and I didn't want to litter my code with this plugin.

## How
### Install
[pnpm][pnpm i]:
```
pnpm install @ngsctt/remark-smartypants
```

[npm][]:
```
npm install @ngsctt/remark-smartypants
```

### Use
```javascript
const smartypants = require('@ngsctt/remark-smartypants');

const unified = require('unified');
const remark = require('remark-parse');
const rehype = require('remark-rehype');
const html = require('rehype-stringify');

const input = `"Why Holmes!" I exclaimed. "How on earth could you know that?"`

unified()
  .use(remark)
  .use(rehype)
  .use(smartypants)
  .use(html)
  .process(input, (error, formatted) => {
    console.log = String(formatted);
  });
```

Output:
```html
<p>“Why Holmes!” I exclaimed. “How on earth could you know that?”</p>
```

## Why `pnpm`?
[pnpm][] conserves disk space by caching packages and symlinking them. It's much more in-line with how I like to use my computers.

## Licence
Copyright 2020 Nathan Scott. Released under the [MIT Licence][licence].

[smartypants]: https://daringfireball.net/projects/smartypants
[remark]: https://remark.js.org
[retext-smartypants]: https://npm.im/retext-smartypants
[silvernon]: https://npm.im/@silvenon/remark-smartypants
[pnpm i]: https://pnpm.js.org/en/cli/install
[npm]: https://docs.npmjs.com/cli/install
[pnpm]: https://pnpm.js.org/en/

[licence]: /LICENCE