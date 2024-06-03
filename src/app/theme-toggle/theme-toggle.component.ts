import { Component } from '@angular/core'
import { ThemeService } from '../theme.service'
import { MatIcon } from '@angular/material/icon'

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [
    MatIcon
  ],
  templateUrl: './theme-toggle.component.html',
  styleUrl: './theme-toggle.component.css'
})
export class ThemeToggleComponent {
  isDarkMode: boolean

  constructor(private themeService: ThemeService) {
    this.isDarkMode = this.themeService.isDarkMode()
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode
    localStorage.setItem('dark-mode', JSON.stringify(this.isDarkMode))
    this.themeService.setDarkMode(this.isDarkMode)
  }
}
