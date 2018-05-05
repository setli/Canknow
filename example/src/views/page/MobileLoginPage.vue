<template>
    <div class="mobile-login-page">
        <div class="login-box">
            <img class="login-avatar" src="./../../image/avatar.jpg">
            <i-form type="vertical" class="login-form">
                <FormItem>
                    <i-input block front-icon="user" size="large" line placeholder="please input username"></i-input>
                </FormItem>
                <FormItem>
                    <i-input block front-icon="lock" size="large" line placeholder="please input password"></i-input>
                </FormItem>
                <FormItem>
                    <Button block size="large" scene="primary" small-radius>Login</Button>
                </FormItem>
            </i-form>
        </div>
        <div class="fixed-bottom content-padding">
            <Button block size="large" small-radius border>Register</Button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'MobileLoginPage'
    };
</script>

<style scoped>

</style>