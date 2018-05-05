<template>
    <div :class="wrapClasses">
        <template>
            <label class="input-label" v-if="label">{{label}}</label>
            <slot name="prepend" :class="[prefixClass + '-addon']" v-if="prepend" v-show="slotReady"></slot>
            <i :class="['icon-' + frontIcon]" class="input-icon front" v-if="frontIcon" @click="handleIconClick"></i>
            <i :class="['icon-' + endIcon]" class="input-icon end" v-if="endIcon" @click="handleIconClick"></i>
            <input v-if="type !== 'textarea'"
                   :id="elementId"
                   :autocomplete="autocomplete"
                   :spellcheck="spellcheck"
                   ref="input"
                   class="input-wrapper-input"
                   :type="type"
                   :placeholder="placeholder"
                   :disabled="disabled"
                   :min="min"
                   :max="max"
                   :minlength="minlength"
                   :maxlength="maxlength"
                   :readonly="readonly"
                   :name="name"
                   :value="currentValue"
                   :number="number"
                   :autofocus="autofocus"
                   @keyup.enter="handleEnter"
                   @keyup="handleKeyup"
                   @keypress="handleKeypress"
                   @keydown="handleKeydown"
                   @focus="handleFocus"
                   @blur="handleBlur"
                   @input="handleInput"
                   @change="handleChange">
            <textarea v-else
                      :id="elementId"
                      class="input-wrapper-input"
                      :autocomplete="autocomplete"
                      :spellcheck="spellcheck"
                      ref="textarea"
                      :style="textareaStyles"
                      :placeholder="placeholder"
                      :disabled="disabled"
                      :rows="rows"
                      :minlength="minlength"
                      :maxlength="maxlength"
                      :readonly="readonly"
                      :name="name"
                      :min="min"
                      :max="max"
                      :value="currentValue"
                      :autofocus="autofocus"
                      @keyup.enter="handleEnter"
                      @keyup="handleKeyup"
                      @keypress="handleKeypress"
                      @keydown="handleKeydown"
                      @focus="handleFocus"
                      @blur="handleBlur"
                      @input="handleInput">
        </textarea>
            <slot name="append" :class="[prefixClass + '-addon']" v-if="append" v-show="slotReady"></slot>
        </template>
    </div>
</template>
<script>
    import { oneOf, findComponentUpward } from '../../utils/assist';
    import calcTextareaHeight from '../../utils/calcTextareaHeight';
    import Emitter from '../../mixins/emitter';

    const prefixClass = 'input';

    export default {
        name: 'Input',
        mixins: [ Emitter ],
        props: {
            type: {
                validator (value) {
                    return oneOf(value, ['text', 'number', 'textarea', 'password', 'date', 'month', 'week', 'time', 'datetime', 'datetime-local', 'url', 'tel', 'email', 'color', 'search']);
                },
                default: 'text'
            },
            scene: {
                validator (value) {
                    return oneOf(value, ['default','primary', 'success', 'error', 'warning']);
                },
                default: 'default'
            },
            value: {
                type: [String, Number],
                default: ''
            },
            label: {
                type: [String, Number]
            },
            light:Boolean,
            size: {
                validator (value) {
                    return oneOf(value, ['small', 'large', 'default']);
                }
            },
            placeholder: {
                type: String,
                default: ''
            },
            min: {
                type: [String, Number]
            },
            max: {
                type: [String, Number]
            },
            minlength: {
                type: [String, Number]
            },
            maxlength: {
                type: [String, Number]
            },
            disabled: {
                type: Boolean,
                default: false
            },
            frontIcon: String,
            endIcon:String,
            autosize: {
                type: [Boolean, Object],
                default: false
            },
            rows: {
                type: Number,
                default: 2
            },
            readonly: {
                type: Boolean,
                default: false
            },
            name: {
                type: String
            },
            number: {
                type: Boolean,
                default: false
            },
            autofocus: {
                type: Boolean,
                default: false
            },
            pretty:{
                type: Boolean,
                default: false
            },
            line:{
                type: Boolean,
                default: false
            },
            spellcheck: {
                type: Boolean,
                default: false
            },
            block: {
                type: Boolean,
                default: false
            },
            autocomplete: {
                validator (value) {
                    return oneOf(value, ['on', 'off']);
                },
                default: 'off'
            },
            elementId: {
                type: String
            }
        },
        data () {
            return {
                currentValue: this.value,
                prefixClass: prefixClass,
                prepend: true,
                append: true,
                slotReady: false,
                textareaStyles: {},
                focused: false
            };
        },
        computed: {
            wrapClasses () {
                return [
                    `${prefixClass}-wrapper`,
                    {
                        'with-end-icon': !!this.endIcon,
                        [`${this.size}`]: !!this.size,
                        [`${this.scene}`]: !!this.scene,
                        ['pretty']: !!this.pretty,
                        ['line']: !!this.line,
                        ['block']: !!this.block,
                        ['light']: !!this.light,
                        ['focused']: this.focused,
                        [`${prefixClass}-type`]: this.type,
                    }
                ];
            },
            textareaClasses () {
                return [
                    {
                        [`disabled`]: this.disabled
                    }
                ];
            }
        },
        methods: {
            handleEnter (event) {
                this.$emit('on-enter', event);
            },
            handleKeydown (event) {
                this.$emit('on-keydown', event);
            },
            handleKeypress(event) {
                this.$emit('on-keypress', event);
            },
            handleKeyup (event) {
                this.$emit('on-keyup', event);
            },
            handleIconClick (event) {
                this.$emit('on-click', event);
            },
            handleFocus (event) {
                this.focused = true;
                this.$emit('on-focus', event);
            },
            handleBlur (event) {
                this.focused = false;
                this.$emit('on-blur', event);

                if (!findComponentUpward(this, ['DatePicker', 'TimePicker', 'Cascader', 'Search'])) {
                    this.dispatch('FormItem', 'on-form-blur', this.currentValue);
                }
            },
            handleInput (event) {
                let value = event.target.value;

                if (this.number)
                    value = Number.isNaN(Number(value)) ? value : Number(value);
                this.$emit('input', value);
                this.setCurrentValue(value);
                this.$emit('on-change', event);
            },
            handleChange (event) {
                this.$emit('on-input-change', event);
            },
            setCurrentValue (value) {

                if (value === this.currentValue)
                    return;
                this.$nextTick(() => {
                    this.resizeTextarea();
                });
                this.currentValue = value;

                if (!findComponentUpward(this, ['DatePicker', 'TimePicker', 'Cascader', 'Search'])) {
                    this.dispatch('FormItem', 'on-form-change', value);
                }
            },
            resizeTextarea () {
                const autosize = this.autosize;

                if (!autosize || this.type !== 'textarea') {
                    return false;
                }
            },
            focus () {
                if (this.type === 'textarea') {
                    this.$refs.textarea.focus();
                }
                else {
                    this.$refs.input.focus();
                }
            },
            blur () {
                if (this.type === 'textarea') {
                    this.$refs.textarea.blur();
                }
                else {
                    this.$refs.input.blur();
                }
            }
        },
        watch: {
            value (val) {
                this.setCurrentValue(val);
            }
        },
        mounted () {
            if (this.type !== 'textarea') {
                this.prepend = this.$slots.prepend !== undefined;
                this.append = this.$slots.append !== undefined;
            }
            else {
                this.prepend = false;
                this.append = false;
            }
            this.$slots.prepend&&this.$slots.prepend[0]&&this.$slots.prepend[0].elm.classList.add('input-addon');
            this.$slots.append&&this.$slots.append[0]&&this.$slots.append[0].elm.classList.add('input-addon');
            this.slotReady = true;
            this.resizeTextarea();
        }
    };
</script>