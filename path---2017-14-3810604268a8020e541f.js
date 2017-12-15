webpackJsonp([0xe9062175d3d5],{497:function(n,a){n.exports={data:{site:{siteMetadata:{title:"React 🎄",author:"Michael Chan @chantastic"}},markdownRemark:{id:"/Users/chan/learnreact/react.holiday/src/pages/2017/14.md absPath of file >>> MarkdownRemark",html:'<div class="measure">\n<blockquote>\n<p>99.7% of software development in one requirement<br>\nA user should be able to view a list of items.<br>\n— <a href="https://twitter.com/samccone/status/936665335394168837">@samccone</a></p>\n</blockquote>\n<p>Listen to Sam.\nLists make Apps.</p>\n<h2>Array of sunshine</h2>\n<p>The <a href="/2017/12/"><code>children</code></a> of a component can be an array.</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<br />\n<p>The resulting DOM will look like this:</p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>123<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<br />\n<p>Because <a href="/2017/3/">components are just functions</a>,\narrays can hold components.</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>one<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span><span class="token punctuation">,</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>two<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<br />\n<p>Resulting in DOM like this:</p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>one<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>two<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<h2>Data in, components out</h2>\n<p>Let’s use <code>map()</code> to turn an array of data into an array of components.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">const</span> countdown <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> millenialCountdown <span class="token operator">=</span> countdown<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>n <span class="token operator">=></span> <span class="token operator">&lt;</span>strong<span class="token operator">></span><span class="token punctuation">{</span>n<span class="token punctuation">}</span> 👏<span class="token operator">&lt;</span><span class="token operator">/</span>strong<span class="token operator">></span><span class="token punctuation">)</span><span class="token punctuation">;</span> \n</code></pre>\n      </div>\n<br />\n<p>Let’s use that technique to show the <code>abilities</code> of our <code>Pokemon</code>.</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>character<span class="token punctuation">.</span>abilities<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>ability <span class="token operator">=></span> \n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>ability<span class="token punctuation">.</span>ability<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span><span class="token punctuation">}</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<br />\n<p><em>(The API is a little redundant here. Sorry)</em></p>\n<h2>Tinker with it</h2>\n<p>Use the workspace below and explore arrays as <code>children</code>.</p>\n<ul>\n<li>Inspect the API and render another list you find.</li>\n<li>Arrays have a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array">lot of methods</a>. Try filtering or sorting the <code>abilities</code>.</li>\n</ul>\n</div>\n<iframe src="https://codesandbox.io/embed/72woqwnvy1" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>',frontmatter:{title:"Day 14: Lists are 99.7% of the job",date:"December 14, 2017"}}},pathContext:{slug:"/2017/14/"}}}});
//# sourceMappingURL=path---2017-14-3810604268a8020e541f.js.map