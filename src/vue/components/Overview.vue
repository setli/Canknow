<template>
    <div class="overview">
        <div class="overview-icon-block">
            <Icon :type="icon"></Icon>
        </div>
        <div class="overview-details">
            <p class="overview-detail-value">{{value}}</p>
            <label class="overview-detail-label">{{label}}</label>
        </div>
        <span class="overview-more">
            <span class="overview-more-text">{{'ViewMore'}}</span>
            <i class="overview-more-icon icon-more-circle-with-incision"></i>
        </span>
    </div>
</template>
<script>
    export default {
        name:'Overview',
        props: {
            label: {
                type: String,
                default: 'label'
            },
            value: {
                type: [Number, String],
                default: 'value'
            },
            icon: {
                type: String,
            }
        }
    }
</script>