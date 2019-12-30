import { AbstractControl } from '@angular/forms';

// control parameter doesn't refer to the indivisual form control but to a form group
export function PasswordValidator(control: AbstractControl): {[key: string]: boolean } | null {
    const password = control.get('password');
    const confirmPassword = control.get ('confirmPassword');
    return password && confirmPassword && password.value != confirmPassword.value ? 
    { 'misMatch': true}: null;
}