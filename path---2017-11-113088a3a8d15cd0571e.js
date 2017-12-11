webpackJsonp([82476580713193],{491:function(n,a){n.exports={data:{site:{siteMetadata:{title:"React 🎄",author:"Michael Chan @chantastic"}},markdownRemark:{id:"/Users/chan/learnreact/react.holiday/src/pages/2017/11.md absPath of file >>> MarkdownRemark",html:'<div class="measure">\n<p>You can’t use <code>if/else</code> statements in `render.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token operator">&lt;</span>div<span class="token operator">></span><span class="token punctuation">{</span><span class="token comment">/* no if/else */</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n  <span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>In those curly-braces, you can only use expressions.\nFortunately, you got a couple options.</p>\n<h2>Tern or Burn</h2>\n<p>The <a href="https://en.wikipedia.org/wiki/Ternary_operation">ternary operator</a> is a\nsyntax for conditional expressions.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token comment">// just like if/else</span>\nsomeCondition <span class="token operator">?</span> <span class="token string">\'shown if truthy\'</span> <span class="token punctuation">:</span> <span class="token string">\'shown if falsy\'</span>\n</code></pre>\n      </div>\n<h2>Short circuit</h2>\n<p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators#Short-circuit_evaluation">Short-circuit evaluation</a> works too.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code>someCondition <span class="token operator">&amp;&amp;</span> <span class="token string">\'shown only if truthy\'</span> <span class="token comment">// if</span>\nsomeCondition <span class="token operator">||</span> <span class="token string">\'shown only if falsy\'</span> <span class="token comment">// unless</span>\n</code></pre>\n      </div>\n<h2>Clap on, clap off, The Clapper</h2>\n<p>Our <code>ClapCounter</code> (from <a href="/2017/9">the 9th</a>) acts like every clap is the first clap.<br>\nIt just isn’t true.</p>\n<p>Let’s use short-circuit evaluation render the message <em>only</em> when there are <code>0</code> claps.\nLet’s also render the number of claps <em>only</em> when there are <code>1</code> or more.</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">...</span> <span class="token punctuation">></span></span>\n    <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>clapCount <span class="token operator">>=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>clapCount<span class="token punctuation">}</span> 👏\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>\n\n  <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>clapCount <span class="token operator">===</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span><span class="token punctuation">></span></span> be the first to clap<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">></span></span><span class="token punctuation">}</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<h2>Tinker with it</h2>\n<p>Use the workspace below and explore conditional rendering.</p>\n<ul>\n<li>Use a ternary to add an alternative message <em>(<code>condition ? truthy : falsy</code>)</em></li>\n<li>Get crazy and use what we’ve learned about <a href="/2017/6/">events</a> and <a href="/2017/7/">state</a> to conditionally display a message on hover. You can do it!</li>\n</ul>\n</div>\n<iframe src="https://codesandbox.io/embed/1rq09lw5r4" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>',frontmatter:{title:"Day 11: Use ternaries for conditional rendering",date:"December 11, 2017"}}},pathContext:{slug:"/2017/11/"}}}});
//# sourceMappingURL=path---2017-11-113088a3a8d15cd0571e.js.map