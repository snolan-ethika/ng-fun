import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { ThemeToggleComponent } from './theme-toggle/theme-toggle.component'
import { ThemeService } from './theme.service'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ThemeToggleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'matter-ng'

  constructor(private themeService: ThemeService) {
    const localDarkMode = localStorage.getItem('dark-mode')
    if (localDarkMode) {
      const theMode = JSON.parse(localDarkMode)
      this.themeService.setDarkMode(theMode)
    }
  }
}
