import Vue from 'vue'

/** ElementUI component common definition */
export declare class UIComponent extends Vue {
  /** Install component into Vue */
  static install (vue: typeof Vue): void
}

/** Component size definition for button, input, etc */
export type UIComponent = 'larger' | 'large' | 'medium' | 'small' | 'smaller'

/** Horizontal alignment */
export type UIComponent = 'left' | 'center' | 'right'
