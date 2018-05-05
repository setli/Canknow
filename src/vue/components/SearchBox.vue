<template>
    <form class="search-box" :class="classes">
        <div class="input-wrapper block">
            <input :value="inputValue" type="search" name="searchInput" ref="searchInput"/>
            <Button class="input-addon with-padding"
                    type="icon"
                    @click="handlerClick">
                <Icon type="search"></Icon>
            </Button>
        </div>
    </form>
</template>
<script>
    import Button from './button/Button.vue';
    import Icon from './Icon.vue';
    import { oneOf } from '../utils/assist';

    export default {
        name:'SearchBox',
        components: {
            Button,
            Icon
        },
        props: {
            theme: {
                type: String,
                validator (value) {
                    return oneOf(value, ['gray', 'black', 'light']);
                },
                default:'gray'
            },
            value: {
                type: [String, Number]
            },
            radius: Boolean,
        },
        data: () => {
          return {
              inputValue: null
          }
        },
        watch:{
            value: function (newValue) {
                this.inputValue = newValue;
            }
        },
        computed:{
            classes(){
                return [
                    {
                        [`${this.theme}`]: !!this.theme,
                        ['radius']: this.radius!= null&& this.radius ,
                    }
                ];
            }
        },
        methods:{
            handlerClick(){
                this.$emit('input', this.$refs.searchInput.value);
                this.$emit('on-search', this.$refs.searchInput.value);
            }
        }
    }
</script>