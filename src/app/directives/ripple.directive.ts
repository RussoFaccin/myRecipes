import { Directive, ElementRef, AfterViewInit, HostListener, EventEmitter, Output, Input } from '@angular/core';

@Directive({
    selector: '[mrcpRipple]'
})
export class RippleDirective implements AfterViewInit {
    @Input() rippleDuration = 0.25;
    @Input() rippleColor = '#000';
    @Output() trigger = new EventEmitter<void>();
    @HostListener('click', ['$event'])
    onclick(evt) {
        this.el.nativeElement.classList.add('--active');

        setTimeout(() => {
            this.el.nativeElement.classList.remove('--active');
            this.trigger.emit();
        }, (this.rippleDuration * 1000));
    }
    constructor(private el: ElementRef) {
        /* ===== Styles ===== */
        // let styleTag = document.createElement('style');
        const rippleStyle = `
        /*
        | ==================================================
        |   Ripple
        | ==================================================
        */
          .mrcpRipple {
              position: relative;
              overflow: hidden;
              display: flex;
              justify-content: center;
              align-items: center;
          }

          .mrcpRipple:focus {
            outline: 0;
          }

          .mrcpRipple::before {
              content: '';
              position: absolute;
              width: var(--rippleSize);
              height: var(--rippleSize);
              background-color: var(--rippleColor);
              border-radius: 50%;
              opacity: 0;
              transform: scale(0);
              transform-origin: 50%;
              mix-blend-mode: darken;
          }

          .mrcpRipple.--active::before {
            animation: animRipple var(--rippleDuration); 1;
          }

          @keyframes animRipple {
              0% {
                opacity: 0;
                transform: scale(0);
              }
              100% {
                opacity: 0.25;
                transform: scale(1);
              }
          }
        `;

        document.head.querySelector('style').textContent += rippleStyle;

        // document.head.appendChild(styleTag);
        this.el.nativeElement.classList.add('mrcpRipple');
    }
    ngAfterViewInit() {
        const element = this.el.nativeElement;

        const rippleSize = (element.offsetWidth > element.offsetHeight ? element.offsetWidth : element.offsetHeight) * 1.5;

        element.style = `
          --rippleSize: ${rippleSize}px;
          --rippleDuration: ${this.rippleDuration}s;
          --rippleColor: ${this.rippleColor};
        `;
    }
}
