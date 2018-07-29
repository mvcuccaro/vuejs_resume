import resume from './components/resume.vue';
import changelog from './components/changelog.vue';
import dev_tools from './components/dev_tools.vue';

export default [
	{path:"/", component: resume},
	{name: 'changelog', path:"/changelog/:repo_name?", component: changelog},
	{path:"/tools", component: dev_tools}
];