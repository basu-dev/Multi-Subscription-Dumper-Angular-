import { Subscription } from "rxjs";

export function subscription() {
    let values: Subscription[] = [];

    return function (target: any, key: string) {
        Object.defineProperty(target, key, {
            set: (value: any) => {
                values.push(value);
                return values;
            },
        });
        Object.defineProperty(target, 'unsubscribe', <PropertyDescriptor>{
            value: () => {
                values.forEach(sub => sub.unsubscribe());
                values = [];
            }
        });
    };
}

