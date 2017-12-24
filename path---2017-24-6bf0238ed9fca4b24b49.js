webpackJsonp([0x8be01f2d4a0b],{518:function(e,n){e.exports={data:{site:{siteMetadata:{title:"React 🎄",author:"Michael Chan @chantastic"}},markdownRemark:{id:"/Users/chan/learnreact/react.holiday/src/pages/2017/24.md absPath of file >>> MarkdownRemark",html:'<div class="measure">\n<p>If you click any of the buttons in our app <em>really fast</em>, you’ll see this error.</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/unmounted-component-warning-863f6e1fbe9c13349cc5e882d709b8e8-754f7.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 800px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 19.25566343042071%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAECAYAAACOXx+WAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAuUlEQVQY0zVQWxKCMAyEESilQFu8hT86vsAHioiM3P9AMRvhI5PdzSZNGnyco0ee0zXL5qwF342hV1mKdmPecn4W//pFa8aFaPCAYw5wMFWVNCGP3lHHRhQ7aTA0WEvTuqKBtTfjL/t6W8qD8A3Oij56L4ODY5JQk6bUsqHmDH5SCZ2VEgMCvJ49DfNDHNM2WrGuaM94F0VSl4FYs+eAgK1wLjBOwqlowqbLd8CzXIIB2A4z8B2bMKQfElJpyRNuA/UAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="Warning: Can only update a mounted or mounting component. This usually means you called setState, replaceState, or forceUpdate on an unmounted component. This is a no-op."\n        title=""\n        src="/static/unmounted-component-warning-863f6e1fbe9c13349cc5e882d709b8e8-42603.png"\n        srcset="/static/unmounted-component-warning-863f6e1fbe9c13349cc5e882d709b8e8-f931c.png 200w,\n/static/unmounted-component-warning-863f6e1fbe9c13349cc5e882d709b8e8-e8031.png 400w,\n/static/unmounted-component-warning-863f6e1fbe9c13349cc5e882d709b8e8-42603.png 800w,\n/static/unmounted-component-warning-863f6e1fbe9c13349cc5e882d709b8e8-5b8b9.png 1200w,\n/static/unmounted-component-warning-863f6e1fbe9c13349cc5e882d709b8e8-754f7.png 1236w"\n        sizes="(max-width: 800px) 100vw, 800px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>We call <code>setState</code> inside the asynchronous <code>fetch</code>.\nAll works if our component is around to get updated but, when we click faster than the request can resolve, the component that requested it isn’t around to be updated.</p>\n<p>Our app has put another component there.</p>\n<h2>Clean up your shit, Todd!</h2>\n<p>When we see this error, it means we did setup that we need to clean up.\nWe do cleanup in the <a href="https://reactjs.org/docs/react-component.html#componentwillunmount">componentWillUnmount</a> lifecycle method.</p>\n<p>In <code>FetchPokemon</code> component needs to <code>cancel</code> the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise">Promise</a> returned by <a href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API">fetch</a>.</p>\n<h2>Maybe next year…</h2>\n<p>I’ve updated the code below but cancellable <code>fetch</code> is a whole thing and I’ve got eggnog to drink.</p>\n<p>As always—the, the <a href="https://reactjs.org/">React Docs</a> work for you all year long and there’s a <a href="https://reactjs.org/blog/2015/12/16/ismounted-antipattern.html">great post on just this topic</a>.</p>\n<p>Happy holidays and have a Merry Christmas!<br>\n<br />\n<span style="font-size: 2em">⚛️🌲</span></p>\n<p>❤️ <a href="https://twitter.com/chantastic">chantastic</a></p>\n<h2>Tinker with it</h2>\n</div>\n<iframe src="https://codesandbox.io/embed/5jq2p08xl" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>',frontmatter:{title:"Day 24: Move fast and break things",date:"December 24, 2017"}}},pathContext:{slug:"/2017/24/"}}}});
//# sourceMappingURL=path---2017-24-6bf0238ed9fca4b24b49.js.map