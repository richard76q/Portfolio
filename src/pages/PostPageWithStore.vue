<template>
    <!-- 2:32:30 -->
    <div >
        <!-- Vuex примеры -->
        <!-- <h1>{{ $store.state.isAuth ? "Пользователь авторизован" : "Авторизуйтесь, что бы использовать сервис" }}</h1>
        <h1>{{ $store.state.likes }}</h1>
        <div>
            <MyButton @click="$store.commit('incrementLikes')">Лайк</MyButton>
            <MyButton @click="$store.commit('decrementLikes')">Дизлайк</MyButton>
        </div> -->
        <h1>Станица с постами</h1>
        <MyInput
            v-model="searchQuery"
            placeholder="Поиск..."
            v-focus
        />
        <div class="app__btns">
            <MyButton
                @click="showDialog"
            >
                Создать пост
            </MyButton>
            <MySelect
                v-model="selectedSort"
                :options="sortOptions"
            />
        </div>
        <!-- <MyButton @click="fetchPost">получить посты</MyButton> -->
        <MyDialog v-model:show="dialogVisible">
            <PostForm 
                @create="createPost"
    
            />
        </MyDialog>
        <PostList
            :posts="sortedAndSearchedPosts"
            @remove="removePost"
            v-if="!isPostsLoading"
        />
        <div v-else>Идет загрузка...</div>
        <div v-intersection="loadMorePost" class="observer"></div>
    </div>
</template>

<script>
import PostList from '@/components/PostList.vue';
import PostForm from '@/components/PostForm.vue';
import MyDialog from '@/components/UI/MyDialog.vue';
import MyButton from '@/components/UI/MyButton.vue';
import axios from 'axios'
import MySelect from '@/components/UI/MySelect.vue';
import MyInput from '@/components/UI/MyInput.vue';

export default {
    components: {
        PostList,
        PostForm,
        MyDialog,
        MyButton,
        MySelect,
        MyInput
    },
    
    data() {
        return {
            
        }
    },
    methods: {
        createPost(post) {
            this.posts.push(post);
            this.dialogVisible = false;
        },
        removePost(post) {
            this.posts = this.posts.filter(p => p.id !== post.id);
        },
        showDialog() {
            this.dialogVisible = true;
        },
    },
        mounted() {
            this.fetchPost();

            // console.log(this.$refs.observer)
        //     const options = {
        //         // root: document.querySelector("#scrollArea"),
        //         rootMargin: "0px",
        //         threshold: 1.0,
        //     };
            
        //     let callback = (entries, observer) => {
        //         if (entries[0].isIntersecting && this.page < this.totalPages) {
        //             this.loadMorePost();
        //         }
        //     }
            
        //     let observer = new IntersectionObserver(callback, options);
        //     observer.observe(this.$refs.observer);
        },
        
        computed: {

        },
        
        watch: {
            // page() {
                //     this.fetchPost()
                // }
            }
        }
        </script>

<style>

.app__btns {
    display: flex;
    justify-content: space-between;
    margin: 15px 0
}

.page__wrapper {
    display: flex;
    margin-top: 15px;
}

.pageNumber {
    border: 1px solid #000;
    padding: 10px
}

.current-page {
    border: 2px solid green;
}

.observer {
    height: 30px;
    /* background-color: green; */
}
</style>