import { Validator,AbstractControl,NG_VALIDATORS } from "@angular/forms";
import { Directive , Input } from "@angular/core";


@Directive({
    
selector: '[confirmPasswordValidator]',
providers: [{
            provide: NG_VALIDATORS, 
            useExisting: confirmPasswordValidator, 
            multi: true
        }]

})
export class confirmPasswordValidator implements Validator
{
    @Input('confirmPasswordValidator') passwordValidate:string;
    validate(control: AbstractControl) : {[key:string]:any} | null
    {
        const passworToMatch = control.parent.get(this.passwordValidate);
        if( passworToMatch &&  control.value !== passworToMatch.value) 
        {
            
            return {"notMatched":true}
        }
        
        return null;
    }
}