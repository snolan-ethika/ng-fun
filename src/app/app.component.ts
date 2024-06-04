import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { ThemeToggleComponent } from './theme-toggle/theme-toggle.component'
import { ThemeService } from './theme.service'
import { NgIf } from '@angular/common'

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet, ThemeToggleComponent, NgIf],
	templateUrl: './app.component.html',
	styleUrl: './app.component.css'
})
export class AppComponent {
	title = 'matter-ng'
	dt: string = new Date().toUTCString()

	constructor(private themeService: ThemeService) {
		if (typeof window !== 'undefined') {
			const localDarkMode = localStorage.getItem('dark-mode')
			if (localDarkMode) {
				const theMode = JSON.parse(localDarkMode)
				this.themeService.setDarkMode(theMode)
			}
		}
	}
}
