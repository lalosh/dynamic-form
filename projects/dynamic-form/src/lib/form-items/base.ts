import { Validators } from '@angular/forms'


export interface BaseOptions {
    key?: string,
    value?: any,
    label?: string,
    validators?: Validators[],
}

interface innerDetails {
    created: boolean;
    _id: string,
}

export interface BaseReturnType extends BaseOptions {
    init: (options: BaseOptions) => void,
    __inner__: innerDetails,
    setInnerId: (id: string) => void,
}


const BaseFormItem: BaseReturnType = {

    key: undefined,
    value: undefined,
    label: undefined,
    validators: [],

    __inner__: {
        _id: undefined,
        created: false
    },

    init(options): void {

        this.key = options?.key;
        this.value = options?.value;
        this.label = options?.label;
        this.validators = options?.validators;

    },

    setInnerId(id) {
        this.__inner__._id = id;
    }

}

Object.seal(BaseFormItem);

export { BaseFormItem };
