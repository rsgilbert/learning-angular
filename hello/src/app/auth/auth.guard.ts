import { CanActivateFn, Router } from "@angular/router";
import { inject } from '@angular/core'
import { AuthService } from "./auth.service";


export const authGuard: CanActivateFn = () => {
    const authService = inject(AuthService)
    const router = inject(Router)
    if(authService.isLoggedIn) { 
        return true 
    }
    confirm('You are not authorized to access the requested page')
    return router.parseUrl('/')
}