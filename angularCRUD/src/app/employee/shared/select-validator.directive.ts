import { Validator,AbstractControl,NG_VALIDATORS } from "@angular/forms";
import { Directive , Input } from "@angular/core";


@Directive({
    
selector: '[selectValidatorDirective]',
providers: [{
            provide: NG_VALIDATORS, 
            useExisting: selectValidatorDirective, 
            multi: true
        }]

})
export class selectValidatorDirective implements Validator
{
    @Input() selectValidatorDirective:string;
    validate(control: AbstractControl) : {[key:string]:any} | null
    {
        return control.value === this.selectValidatorDirective ? {"selectvalidator":true} : null ;
    }
}