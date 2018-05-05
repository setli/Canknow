<template>
    <div class="login-page flex flex-vertical flex-center">
        <div class="login-banner-box">
            <img src="./../../image/6.jpg" class="login-banner">
        </div>
        <div class="row-24">
            <div class="column-8 md"></div>
            <div class="login-box column-8 md">
                <img class="login-avatar" src="./../../image/avatar.jpg">
                <i-form type="vertical" class="login-form">
                    <FormItem>
                        <i-input block front-icon="user" size="large" pretty light></i-input>
                    </FormItem>
                    <FormItem>
                        <i-input type="password"  block front-icon="lock" size="large" pretty light></i-input>
                    </FormItem>
                    <FormItem>
                        <Button block size="large" scene="primary" small-radius>Login</Button>
                    </FormItem>
                </i-form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'LoginPage'
    };
</script>

<style scoped>

</style>