export default {
    props: {
        show: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        hideDialog() {
            this.$emit('update:show', false)
        }
    },

    mounted() {
        console.log('hi from mixin');
    }
    
    // ...
}