<template>
    <div class="blank">
        <slot>{{computedText}}</slot>
    </div>
</template>

<script>
    import Locale from '../../mixins/locale';

    export default {
        name: 'Blank',
        mixins: [ Locale ],
        props: {
            text: {
                type: String
            }
        },
        computed: {
            computedText () {
                return this.text || this.t('core.blank.common')
            }
        }
    };
</script>
