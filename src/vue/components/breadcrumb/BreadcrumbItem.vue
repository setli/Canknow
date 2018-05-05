<template>
    <li class="breadcrumb-item">
        <a v-if="to || href" :class="linkClasses" @click="handleClick">
            <slot></slot>
        </a>
        <span v-else :class="linkClasses">
            <slot></slot>
        </span>
    </li>
</template>
<script>
    const prefixClass = 'breadcrumb-item';
    export default {
        name: 'BreadcrumbItem',
        props: {
            href: {
                type: [Object, String]
            },
            to: {
                type: [Object, String]
            },
            replace: {
                type: Boolean,
                default: false
            }
        },
        data () {
            return {
            };
        },
        computed: {
            linkClasses () {
                return `${prefixClass}-link`;
            }
        },
        mounted () {
        },
        methods: {
            handleClick () {
                const isRoute = this.$router;
                if (isRoute) {
                    this.replace ? this.$router.replace(this.to || this.href) : this.$router.push(this.to || this.href);
                }
                else {
                    window.location.href = this.to || this.href;
                }
            }
        }
    };
</script>