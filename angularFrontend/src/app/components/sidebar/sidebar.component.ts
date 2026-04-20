import { Component, input, signal } from '@angular/core';
// If you're using Angular Router (recommended), also import:
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ToggleArrowComponent } from '@components/toggle-arrow/toggle-arrow.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    ToggleArrowComponent
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  links = input.required<{ href: string; label: string }[]>();

  // links = signal([
  //   { href: '#dashboard', label: 'Dashboard' },
  //   { href: '#profile',   label: 'Profile' },
  //   { href: '#settings',  label: 'Settings' },
  //   { href: '#analytics', label: 'Analytics' },
  //   { href: '#logout',    label: 'Logout' }
  // ]);

  isActive(href: string): boolean {
    return window.location.pathname === href;
  }
}