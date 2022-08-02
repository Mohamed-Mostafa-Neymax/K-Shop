import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector: '[hoverDirective]'
})
export class HoverDirective {
    @HostBinding('style.backgroundColor') backgroundColor: string = '#F6F6F6';
    @HostBinding('style.color') color: string = '#000000';
    @HostListener('mouseenter') onMouseHover() {
        this.backgroundColor = '#B7AECA';
        this.color = '#ffffff';
    }
    @HostListener('mouseleave') onMouseLeave() {
        this.backgroundColor = '#F6F6F6';
        this.color = '#000000';
    }
}