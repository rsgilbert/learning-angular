import { Directive, Input, TemplateRef, ViewContainerRef, OnInit } from '@angular/core';

@Directive({
    selector: '[appPermission]'
})
export class PermissionDirective implements OnInit {
    @Input() appPermission: string[] = []

    private currentRole = "agent"

    constructor(private tmplRef: TemplateRef<any>, private vc: ViewContainerRef) {
    }

    ngOnInit(): void {
        // console.log(this.appPermission)
        if (this.appPermission.includes(this.currentRole)) {
            this.vc.createEmbeddedView(this.tmplRef)
        }
        else {
            this.vc.clear()
        }
    }

}
