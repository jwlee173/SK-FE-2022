"use strict";

var appNode = document.createElement('div');
appNode.setAttribute('id', 'app');
appNode.setAttribute('class', 'appClass');
appNode.setAttribute('title', 'appTitle');
var _React = React,
    h = _React.createElement;
var contentsVNode = h('div', {
  className: 'contents',
  lang: 'en',
  children: [h('h1', null, 'Imperative Programming'), h('p', null, "In computer science, imperative programming is a programming paradigm that uses statements that change a program's state.")]
});
var translateButtonVNode = h('button', {
  type: 'button',
  className: 'button__translation',
  'aria-label': '영 → 한 번역',
  title: '영 → 한 번역',
  children: h('svg', {
    width: 24,
    height: 24,
    viewBox: '0 0 24 24'
  }, h('path', {
    d: 'M21 21h-1.713l-.658-1.846h-3l-.663 1.846h-1.659l3.04-8h1.603l3.05 8zm-2.814-3.12l-1.049-3.018-1.054 3.018h2.103zm2.814-5.88c.552 0 1 .449 1 1v8c0 .551-.448 1-1 1h-8c-.552 0-1-.449-1-1v-8c0-.551.448-1 1-1h8zm0-2h-8c-1.656 0-3 1.343-3 3v8c0 1.657 1.344 3 3 3h8c1.657 0 3-1.343 3-3v-8c0-1.657-1.343-3-3-3zm-15.855-2.114c.039.58.103 1.115.195 1.593-1.225.224-1.275-.984-.195-1.593zm8.855-4.886v5h-1c-.742 0-1.441.173-2.076.465-.195-.806-.783-1.53-1.68-1.964.078-.298.123-.522.167-.744l-1.35-.261c-.022.112-.063.327-.135.613-.455-.067-.94-.075-1.431-.026.011-.329.032-.653.06-.963h1.508v-1.278h-1.327c.065-.326.121-.521.176-.705l-1.316-.396c-.098.323-.178.64-.26 1.101h-1.504v1.278h1.341c-.036.414-.058.842-.064 1.275-1.48.544-2.109 1.581-2.109 2.521 0 1.11.876 2.086 2.261 1.96 1.72-.156 2.868-1.456 3.542-3.053.885.536.838 1.161.772 1.552-.965.913-1.575 2.196-1.575 3.625v1h-5c-1.656 0-3-1.343-3-3v-8c0-1.657 1.344-3 3-3h8c1.657 0 3 1.343 3 3zm-7.5 4.467c.328-.042.658-.05.97-.026-.214.476-.497.948-.857 1.319-.054-.396-.092-.83-.113-1.293z'
  }))
});
var appVNode = h('div', {
  id: 'app',
  className: 'appClass',
  title: 'appTitle'
}, contentsVNode, translateButtonVNode);
var container = document.getElementById('root');
var reactDomRoot = ReactDOM.createRoot(container);
reactDomRoot.render(appVNode);
setTimeout(function () {
  return reactDomRoot.unmount();
}, 3000);