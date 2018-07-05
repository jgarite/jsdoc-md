const t = require('tap')
const doctrine = require('doctrine')
const stringify = require('remark-stringify')
const unified = require('unified')
const typeJsdocAstToMdAst = require('./typeJsdocAstToMdAst')
const remarkStringifyOptions = require('./remarkStringifyOptions')

t.test('typeJsdocAstToMdAst', t => {
  const typeMdAsts = [
    // Name expression.
    '@type {boolean}',
    '@type {number}',
    '@type {string}',
    '@type {Object}',
    '@type {Array}',

    // Union.
    '@type {string | number}',
    '@type {Object | boolean}',

    // Rest.
    '@param {...string} a',

    // Application.
    '@type {Array<string, number>}',

    // Record.
    '@type {{a: null, b: true}}',

    // Literal.
    '@type {*}',
    '@type {null}',
    '@type {undefined}',
    '@type {2}',
    '@type {""}',
    '@type {true}',
    '@type {false}',

    // Function.
    '@type {function()}',
    '@type {function(): number}',
    '@type {function(string, Object)}',
    '@type {function(string, number): Object}',
    '@type {function(new:Object)}',
    '@type {function(new:Object, ...string)}',
    '@type {function(new:Object, ...string): Object}',
    '@type {function(this:Object)}',
    '@type {function(this:Object, ...string)}',
    '@type {function(this:Object, ...string): Object}',
    '@type {function(string=, number=)}',
    '@type {function(string=, number=): Object}'
  ].map(doclet => typeJsdocAstToMdAst(doctrine.parse(doclet).tags[0].type))

  t.matchSnapshot(JSON.stringify(typeMdAsts, null, 2), 'Markdown ASTs.')

  const mdAst = { type: 'root', children: [] }

  typeMdAsts.forEach(typeMdAst => {
    mdAst.children.push({ type: 'paragraph', children: typeMdAst })
  })

  const md = unified()
    .use(stringify, remarkStringifyOptions)
    .stringify(mdAst)

  t.matchSnapshot(md, 'Markdown.')

  t.end()
})