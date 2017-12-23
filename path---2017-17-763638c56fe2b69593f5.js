webpackJsonp([0xa3c04a8b36b2],{510:function(e,n){e.exports={data:{site:{siteMetadata:{title:"React 🎄",author:"Michael Chan @chantastic"}},markdownRemark:{id:"/Users/chan/learnreact/react.holiday/src/pages/2017/17.md absPath of file >>> MarkdownRemark",html:'<div class="measure">\n<p>Here is some lifecycle wisdom:</p>\n<blockquote>\n<p>Always use <code>Did</code> methods, unless you shouldn’t.</p>\n</blockquote>\n<p>Confused? Read on for more (confusion).</p>\n<h2>Why <code>Did</code>?</h2>\n<p><code>Did</code> methods like <code>componentDidMount</code> and <code>componentDidUpdate</code> are “safe”.<br>\nThey fire after React finishes its work.\nSo your futzing won’t collide with React’s futzing.</p>\n<p><strong>Use <code>Did</code> methods are first choice.</strong></p>\n<h2>Why not <code>Did</code>?</h2>\n<p>Sometimes <code>Did</code>s don’t do exactly what you need.</p>\n<p>In our <code>Pokemon</code> component, using <code>componentDidUpdate</code> will fetch and <code>setState</code> with a new Pokemon with each update.\nThat sounds like what we want but isn’t.</p>\n<p>New props update <code>Pokemon</code> but so does the <code>setState</code> calls.\nInfinite loops, run!!!</p>\n<p><span style="font-size: 2em">🏃‍♂️ 🏃‍♀️ 🏃‍♂️ 🏃‍♀️</span></p>\n<p>We have one of those <strong>“unless you shouldn’t”</strong> cases.</p>\n<h2>Enter <code>componentWillReceiveProps</code></h2>\n<p>We need a hero lifecycle method that fires for new props but not new state.\n<code>componentWillReceiveProps</code> is that hero.</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code><span class="token function">componentWillReceiveProps</span><span class="token punctuation">(</span>nextProps<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token function">fetchPokemon</span><span class="token punctuation">(</span>nextProps<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>character <span class="token operator">=></span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> character<span class="token punctuation">:</span> character <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<br />\n<p>This lifecycle method fires <strong>before</strong> <code>this.props</code> is set to the new props.\nSo we don’t use <code>this.props</code>.\nWe use the <code>nextProps</code>, which <code>componentWillReceiveProps</code> receives as an argument.</p>\n<p><span style="font-size: 2em"> 💥 </span></p>\n<p>You’re just gonna have to play with this one…</p>\n<h2>Tinker with it</h2>\n<p>Use the workspace below and explore <code>componentWillReceiveProps</code>.</p>\n<ul>\n<li>\n<p>Compare <code>this.props</code> and <code>nextProps</code> by logging them.</p>\n<ul>\n<li>Change the local name of <code>nextProps</code>. There’s nothing special about the name.</li>\n</ul>\n</li>\n<li>Read <a href="https://reactjs.org/docs/react-component.html#componentwillreceiveprops">the docs</a>. Any other things <code>componentWillReceiveProps</code> can do?</li>\n</ul>\n</div>\n<iframe src="https://codesandbox.io/embed/jnn1xz7wo9" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>',frontmatter:{title:"Day 17: Always use `Did`, unless you shouldn't",date:"December 17, 2017"}}},pathContext:{slug:"/2017/17/"}}}});
//# sourceMappingURL=path---2017-17-763638c56fe2b69593f5.js.map