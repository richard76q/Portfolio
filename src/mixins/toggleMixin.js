export default {
    props: {
        show: {
            type: Boolean,
            default: false
        }
    },
    metods: {
        hideDialog() {
            this.$emit('update:show', false)
        }
    },
    
    // ...
}