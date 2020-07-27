import { BaseFormItem } from "./base";
import { BaseOptions } from "./base";

export interface TextBoxOptions {
    placeholder?: string;
    type?: string;
}

export interface TextBoxReturnType extends TextBoxOptions {
    initTextBox: (options: TextBoxOptions & BaseOptions) => void,
    build: (options: TextBoxOptions & BaseOptions) => TextBoxReturnType | void
}


const TextBoxFormItem: TextBoxReturnType = {

    initTextBox(options): void {

        const INNER_ID = 'input';

        this.init(options);

        this.setInnerId(INNER_ID)
        this.placeholder = options?.placeholder;
    },


    placeholder: undefined,
    type: undefined,



    build(options): TextBoxReturnType | void {
        if (this.__inner__.created)
            return console.warn('Cannot rebuild the item, please make a new one!');


        const newObject = Object.create(TextBoxFormItem);
        newObject.initTextBox(options);

        this.__inner__.created = true;
        Object.freeze(this.__inner__);

        return newObject;
    }
}



Object.setPrototypeOf(TextBoxFormItem, BaseFormItem);
Object.seal(TextBoxFormItem);

export { TextBoxFormItem };