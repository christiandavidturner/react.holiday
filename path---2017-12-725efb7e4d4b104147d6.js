webpackJsonp([0xc80ba57e119],{501:function(n,s){n.exports={data:{site:{siteMetadata:{title:"React 🎄",author:"Michael Chan @chantastic"}},markdownRemark:{id:"/Users/chan/learnreact/react.holiday/src/pages/2017/12.md absPath of file >>> MarkdownRemark",html:'<div class="measure">\n<p><strong>Compose</strong> means “smoosh things together.”</p>\n<p>You can <strong>smoosh</strong> 🥛 and ☕️.</p>\n<p>You can <strong>smoosh</strong> a 🍔 with your 😋.</p>\n<p>You <strong>smoosh</strong> things all day; it’s not fancy.</p>\n<h2>Copy HTML</h2>\n<p>HTML is <strong>smooshable</strong> by default.</p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>em</span><span class="token punctuation">></span></span>Tilted Heading<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>em</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<br />\n<p>The <code>h1</code> and <code>em</code> are <strong>smooshed</strong>.</p>\n<p>But if we try and <strong>smoosh</strong> things with our <code>ClapCounter</code>, nothing happens.</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ClapCounter</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>Clap This<span class="token operator">!</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ClapCounter</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<br />\n<p>Y U NO SMOOSH?</p>\n<h2>Meet <code>children</code></h2>\n<p>All react components get a special prop: <code>children</code>.</p>\n<p>Up to this point, we’ve had no <code>children</code>.\nBut the stork delivered one when we nested <code>&#x3C;h1>Clap This!&#x3C;/h1></code> in <code>&#x3C;ClapCounter /></code>.</p>\n<h2>Smooshing</h2>\n<p>Now that we have <code>children</code>, we can <code>render</code> them.\nLet’s put them at the top.</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code><span class="token keyword">class</span> <span class="token class-name">ClapCounter</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">render</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n      <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>children<span class="token punctuation">}</span>\n\n      <span class="token operator">...</span>\n</code></pre>\n      </div>\n<br />\n<p>Congrats! You learned how to <strong>smoosh</strong>.</p>\n<p>We’ll do more advanced <strong>smooshing</strong> next week.</p>\n<h2>Tinker with it</h2>\n<p>Use the workspace below and explore <strong>smooshing</strong>.</p>\n<ul>\n<li>What happens if you keep the <code>{this.props.children}</code> but remove the nested <code>&#x3C;h1></code>?</li>\n<li>Can you smoosh another custom component in <code>ClapCounter</code>? Make one and find out.</li>\n</ul>\n</div>\n<iframe src="https://codesandbox.io/embed/2o5npnr6zj" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>',frontmatter:{title:"Day 12: Smoosh components",date:"December 12, 2017"}}},pathContext:{slug:"/2017/12/"}}}});
//# sourceMappingURL=path---2017-12-725efb7e4d4b104147d6.js.map