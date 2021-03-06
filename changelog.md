# jsdoc-md changelog

## Next

### Patch

- Remove `.html` from [usejsdoc.org](http://usejsdoc.org) links.

## 2.1.0

### Minor

- Render any combination of supported tags, even if they are illogical (e.g. `@param` with `@prop`). This fixes `@kind constant` not rendering an associated `@type`.
- `@kind typedef` without an associated `@type` no longer causes an error. Linting would be a better way to ensure the right combination of tags are used.

### Patch

- Updated dev dependencies.

## 2.0.1

### Patch

- Fix `<hr />` incorrectly appearing above non top level members.

## 2.0.0

### Major

- `@kind member` now displays an associated `@type` and throws an error if there is none.

### Minor

- Separate top level member sections with `<hr />`.

### Patch

- Updated dev dependencies.
- Use default [`tap`](https://npm.im/tap) reporter for tests.
- Simplify package `test:js` script glob.

## 1.7.1

### Patch

- Updated dependencies.
- Allow Babel to load config relative to files being parsed.
- Stopped automatically linking global types to MDN.
- Simplified ESLint config.

## 1.7.0

### Minor

- Added MDN links for [`Uint8Array`](https://mdn.io/uint8array) types and updated snapshot tests, fixing [#11](https://github.com/jaydenseric/jsdoc-md/issues/9) via [#12](https://github.com/jaydenseric/jsdoc-md/pull/12).

### Patch

- Updated dependencies.
- Updated package scripts and config for the new [`husky`](https://npm.im/husky) version.
- Added a missing test for the `Promise` type MDN link.

## 1.6.0

### Minor

- Support Node.js v6+, from v8.5+.

### Patch

- Work around a Babel breaking change to parsing decorators, see [babel/babel#8562](https://github.com/babel/babel/issues/8562).

## 1.5.0

### Minor

- Use [mdn.io](https://github.com/lazd/mdn.io) for shorter [MDN](https://developer.mozilla.org) links in generated markdown.
- `Promise` types now link to their MDN docs.

### Patch

- Updated dependencies.
- Removed the [`npm-run-all`](https://npm.im/npm-run-all) dev dependency and stopped using it for package scripts.
- Swapped readme badge order.

## 1.4.0

### Minor

- Sort members in the documentation outline, fixes [#8](https://github.com/jaydenseric/jsdoc-md/issues/8).
- Explicitly left align table cell contents.
- Display parameter and property names as inline code.

### Patch

- Updated dependencies.
- Configured Prettier to lint `.yml` files.
- Ensure the readme Travis build status badge only tracks `master` branch.
- Use [Badgen](https://badgen.net) for the readme npm version badge.

## 1.3.0

### Minor

- Default documentation for global types (such as `Object`) can be overridden using `@typedef`.
- Also auto-link MDN articles for global types `function` and `Date`.

### Patch

- Varied capitalization of global types (such as `Object`) results in a consistently lowercase MDN link slug.

## 1.2.0

### Minor

- Generate function return documentation, fixes [#7](https://github.com/jaydenseric/jsdoc-md/issues/7).

## 1.1.0

### Minor

- Support [JSDoc inline tag links](http://usejsdoc.org/tags-inline-link) (e.g. `` [`b` method]{@link A#b} ``) for descriptions and tags with markdown content, closes [#5](https://github.com/jaydenseric/jsdoc-md/issues/5).

### Patch

- Correct slugs for successive type member links, fixes [#6](https://github.com/jaydenseric/jsdoc-md/issues/6).
- Display CLI options as code in the readme.
- Internally refactor `jsdocAstToMember` to `jsdocToMember`.

## 1.0.0

Initial release.
