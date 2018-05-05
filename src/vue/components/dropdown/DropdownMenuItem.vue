<template>
    <li class="dropdown-menu-item" @click="handleClick">
        <slot>
            <label><Icon class="dropdown-menu-item-icon" :type="icon"></Icon><span class="dropdown-menu-item-title">{{title}}</span></label>
        </slot>
    </li>
</template>
<script>
    export default {
        name: 'DropdownMenuItem',
        props: {
            name: {
                type: [String, Number]
            },
            title: {
                type: [String, Number]
            },
            icon: {
                type: [String, Number]
            },
            disabled: {
                type: Boolean,
                default: false
            },
            selected: {
                type: Boolean,
                default: false
            },
            divided: {
                type: Boolean,
                default: false
            }
        },
        computed: {
        },
        methods: {
            handleClick (e) {
                const $parent = this.$parent.$parent.$parent;
                const hasChildren = this.$parent && this.$parent.$options.name === 'Dropdown';

                if (this.disabled) {
                    this.$nextTick(() => {
                        $parent.currentVisible = true;
                    });
                }
                else if (hasChildren) {
                    this.$parent.$emit('on-haschild-click');
                }
                else {
                    if ($parent && $parent.$options.name === 'Dropdown') {
                        $parent.$emit('on-hover-click');
                    }
                }
                $parent.$emit('on-click', this.name);
            }
        }
    };
</script>
