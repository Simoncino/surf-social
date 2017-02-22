import Vue from 'vue'
import Router from 'vue-router'
import Hello from 'components/Hello'

/*Miei link*/
import Post from 'components/post/Post'

const Foo = { template: '<div><h3>foo</h3></div>' }
const Bar = { template: '<div><h3>bar</h3></div>' }

Vue.use(Router)

export default new Router({
	routes: [
	{
		path: '/hello',
		name: 'Hello',
		component: Hello
	},
	{ path: '/foo', component: Foo },
	{ path: '/bar', component: Bar },
	{ path: '/post', component: Post }
	]
})
