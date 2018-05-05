<template>
    <div class="collapse-item" :class="{'is-active': isActive}">
        <div role="tab"
             :aria-expanded="isActive"
             :aria-controls="`collapse-content-${id}`"
             :aria-describedby ="`collapse-content-${id}`">
            <div class="collapse-item-header"
                 @click="handleHeaderClick"
                 role="button"
                 :id="`collapse-head-${id}`"
                 tabindex="0"
                 @keyup.space.enter.stop="handleEnterClick"
                 :class="{ 'focusing': focusing, 'is-active': isActive}"
                 @focus="handleFocus"
                 @blur="focusing = false">
                <i class="collapse-item-arrow icon-arrow-right" :class="{'is-active': isActive}"></i>
                <slot name="title">{{title}}</slot>
            </div>
        </div>
        <collapse-transition>
            <div class="collapse-item-wrap"
                 v-show="isActive"
                 role="tabpanel"
                 :aria-hidden="!isActive"
                 :aria-labelledby="`collapse-head-${id}`"
                 :id="`collapse-content-${id}`">
                <div class="collapse-item-content">
                    <slot></slot>
                </div>
            </div>
        </collapse-transition>
    </div>
</template>
<script>
    import CollapseTransition from './../base/CollapseTransition';
    import Emitter from './../../mixins/emitter';
    import { createGuid } from './../../../common/lib/Guid';

    export default {
        name: 'CollapseItem',
        componentName: 'CollapseItem',
        mixins: [Emitter],
        components: { CollapseTransition },
        data() {
            return {
                contentWrapStyle: {
                    height: 'auto',
                    display: 'block'
                },
                contentHeight: 0,
                focusing: false,
                isClick: false
            };
        },
        inject: ['collapse'],
        props: {
            title: String,
            name: {
                type: [String, Number],
                default() {
                    return this._uid;
                }
            }
        },
        computed: {
            isActive() {
                return this.collapse.activeNames.indexOf(this.name) > -1;
            },
            id() {
                return createGuid();
            }
        },
        methods: {
            handleFocus() {
                setTimeout(() => {
                    if (!this.isClick) {
                        this.focusing = true;
                    }
                    else {
                        this.isClick = false;
                    }
                }, 50);
            },
            handleHeaderClick() {
                this.dispatch('Collapse', 'item-click', this);
                this.focusing = false;
                this.isClick = true;
            },
            handleEnterClick() {
                this.dispatch('Collapse', 'item-click', this);
            }
        }
    };
</script>