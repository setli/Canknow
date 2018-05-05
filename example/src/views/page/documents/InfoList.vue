<template>
    <div>
        <Example>
            <InfoList>
                <InfoItem label="userName">canknow</InfoItem>
                <InfoItem label="phoneNumber">15927051130</InfoItem>
                <InfoItem label="QQNumber">3230525823</InfoItem>
            </InfoList>
        </Example>
        <Example>
            <InfoList justify="end">
                <InfoItem label="userName">canknow</InfoItem>
                <InfoItem label="phoneNumber">15927051130</InfoItem>
                <InfoItem label="QQNumber">3230525823</InfoItem>
            </InfoList>
        </Example>
        <Example>
            <InfoList justify="end">
                <InfoItem label="userName"><i-input size="large" block placeholder="userName"></i-input></InfoItem>
                <InfoItem label="phoneNumber">15927051130</InfoItem>
                <InfoItem label="QQNumber">3230525823</InfoItem>
            </InfoList>
        </Example>
    </div>
</template>

<script>
    export default {
        name: 'DocumentInfoList'
    }
</script>

<style scoped>

</style>