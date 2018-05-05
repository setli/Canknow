<template>
    <div>
        <Example>
            <div>{{value}}</div>
            <RichEditor v-model="value" :options="options"></RichEditor>
        </Example>
    </div>
</template>

<script>
    export default {
        name: 'DocumentRichEditor',
        data () {
          return {
              value: '<p>test</p>',
              options: {
              }
          }
        },
        methods: {
        },
        mounted () {
            setTimeout(() => {
                this.value = '<p>test after 3s</p>';
            }, 3000);
        }
    };
</script>

<style scoped>

</style>