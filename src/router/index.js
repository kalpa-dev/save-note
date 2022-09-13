import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import AddNoteView from '../views/AddNoteView.vue';
import EditNoteView from '../views/EditNoteView.vue';

const routes = [
	{
		path: '/',
		name: 'home',
		component: HomeView,
	},
	{
		path: '/about',
		name: 'about',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: AboutView,
	},
	{
		path: '/add',
		name: 'create',
		component: AddNoteView,
	},
	{
		path: '/edit/:id',
		name: 'edit',
		component: EditNoteView,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
