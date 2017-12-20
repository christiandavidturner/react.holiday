webpackJsonp([0x7e88806ca1ab],{510:function(n,s){n.exports={data:{site:{siteMetadata:{title:"React 🎄",author:"Michael Chan @chantastic"}},markdownRemark:{id:"/Users/chan/learnreact/react.holiday/src/pages/2017/20.md absPath of file >>> MarkdownRemark",html:'<div class="measure">\n<p><a href="https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0">Smart vs. Dumb components</a>\nis a dichotomy that has dominated the React conversation as long as React has\nexisted.</p>\n<p>Here’s the nut: <strong>Some components know things. Some don’t.</strong></p>\n<h2>Knowing components</h2>\n<p><a href="/2017/19">Yesterday’s</a> Pokemon app only has <strong>knowing</strong> components. They know\nthe <code>id</code> and how to change that <code>id</code>. They know when, where, and how to <code>fetch</code>\nnew data.</p>\n<p>They know things.</p>\n<h2>Unknowing components</h2>\n<p><strong>Unknowing</strong> components operate on <code>props</code> alone. If the component works\nstrictly with <code>props</code>, it’s an <strong>unknowing</strong> component.</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code><span class="token keyword">const</span> <span class="token function-variable function">Unknowing</span> <span class="token operator">=</span> props <span class="token operator">=></span> <span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>Hi <span class="token punctuation">{</span>props<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token operator">!</span> I didn\'t know you until now<span class="token punctuation">.</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<h2>Extracting unknowing components</h2>\n<p><a href="/2017/19">Yesterday’s</a> <code>Pokemon</code> is all tangled. It knows how to fetch <strong>and</strong>\nhow to present.</p>\n<p>We can untangle it by splitting <code>Pokemon</code> into two components.</p>\n<p><code>FetchPokemon</code> (<strong>knowing</strong>) keeps the smarts required to fetch a Pokemon then\ngives what it knows to <code>Pokemon</code> (<strong>unknowing</strong>) through props.</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code><span class="token keyword">class</span> <span class="token class-name">FetchPokemon</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span> character<span class="token punctuation">:</span> <span class="token keyword">null</span> <span class="token punctuation">}</span>\n  <span class="token function">componentDidMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span>\n  <span class="token function">componentWillReceiveProps</span><span class="token punctuation">(</span>nextProps<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Pokemon</span> <span class="token attr-name">character</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>character<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">)</span> <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<br />\n<p><code>Pokemon</code> (<strong>unknowing</strong>) has no smarts and only renders what it’s given.</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code><span class="token keyword">const</span> <span class="token function-variable function">Pokemon</span> <span class="token operator">=</span> props <span class="token operator">=></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>character<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>\n    <span class="token operator">...</span>\n</code></pre>\n      </div>\n<h2>Why though?</h2>\n<pre style={{ fontSize: "2em" }}>¯\\_(ツ)_/¯</pre>\n<p>This pattern alone is useless—strictly cosmetic.\nBut—when paired with <a href="/2017/19">render props</a>—it’s how you do <a href="https://en.wikipedia.org/wiki/Separation_of_concerns">separation of concerns</a> in React.</p>\n<h2>Tinker with it</h2>\n<p>Use the workspace below and explore <strong>knowing</strong> and <strong>unknowing</strong> components.</p>\n<ul>\n<li>Reconstruct the coupled version of <code>Pokemon</code>.</li>\n<li>Separate <code>Pokemon</code> and <code>FetchPokemon</code> again. Practice makes perfect.</li>\n<li>See the <a href="2017/19">render prop</a> opportunity? Take it.</li>\n</ul>\n</div>\n<iframe src="https://codesandbox.io/embed/ko4jvklm2v" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>',frontmatter:{title:"Day 20: Components: What do they know? Do they know things?? Let's Find out!",date:"December 20, 2017"}}},pathContext:{slug:"/2017/20/"}}}});
//# sourceMappingURL=path---2017-20-13cf41f42799b93b355f.js.map