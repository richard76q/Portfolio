import axios from 'axios'

export const postModule = {
    state: () => ({
        posts: [],
        dialogVisible: false,
        isPostsLoading: false,
        selectedSort: '',
        searchQuery: '',
        page: 1,
        limit: 10,
        totalPages: 10,
        sortOptions: [
            {value: 'title', name: 'по названию'},
            {value: 'body', name: 'по содержанию'}
        ]
    }),
    getters: {
        sortedPosts(state) {
            return [...state.posts].sort((post1, post2) => post1[state.selectedSort]?.localeCompare(post2[state.selectedSort]))
        },
        
        sortedAndSearchedPosts(stats) {
            return state.sortedPosts.filter(post => post.title.toLowerCase().includes(state.searchQuery.toLowerCase()))
        }
    },
    mutation: {
        setPosts(state, posts) {
            state.posts = posts;
        },
        setDialogVisible(state, bool) {
            state.isPostsLoading = bool;
        },
        setPostLoading(state, bool) {
            state.isPostsLoading = bool;
        },
        setSelectedSort(state, sort) {
            state.isPostsLoading = sort;
        },
        setSearchQuery(state, query) {
            state.isPostsLoading = query;
        },
        setTotalPage(state, page) {
            state.totalPages = page;
        },
        setPage(state, page) {
            state.page = page;
        },
        setTotalPage(state, page) {
            state.totalPages = page;
        }

    },
    action: {
        async fetchPost({state, commit}) {
            try {
                commit('setPostLoading', true);
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                    params: {
                        _page: state.page,
                        _limit: state.limit
                    }
                });
                commit('setTotalPage', state.totalPages = Math.ceil(response.headers['x-total-count'] / state.limit))
                commit('setTotalPage', response.data)
            } catch(e) {
                alert('Ошибка')
            } finally {
                commit('setPostLoading', false);
            }
        },
        async loadMorePost({state, commit}) {
            try {
                commit('setPosts', state.page += 1);
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                    params: {
                        _page: this.page,
                        _limit: this.limit
                    }
                });
                commit('setTotalPage', state.totalPages = Math.ceil(response.headers['x-total-count'] / state.limit))
                commit('setPosts', [...this.posts, ...response.data])
            } catch(e) {
                alert('Ошибка')
            }
        }
    }
}