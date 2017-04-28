export default {
	routes: {
		index: '/',
		addNewIdea: '/ideas/new',
		viewIdea: (id =':id') =>`/ideas/${id}`,
		editIdea: (id =':id') =>`/ideas/${id}/edit`,
		testApi: '/test-api',
		newIdeaApi: '/api/new-idea/',
		getIdeasApi: '/api/get-ideas/'
	}
}