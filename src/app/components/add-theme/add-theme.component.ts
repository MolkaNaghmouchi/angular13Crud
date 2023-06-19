import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Theme } from 'src/app/models/theme.model';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-add-theme',
  templateUrl: './add-theme.component.html',
  styleUrls: ['./add-theme.component.css']
})
export class AddThemeComponent {
theme!:Theme;
submitted = false;
constructor(private themeservice:ThemeService, private router: Router ){}



ngOnInit(): void {
  this.theme=new Theme();

}



saveTheme(): void {
 
  const data = {
    nom: this.theme.nom
    
  }
  this.themeservice.createTheme(data).subscribe({
    next: (res) => {
   
      console.log(res);
      this.submitted = true;
      this.router.navigate(['/list-theme']);
     // this.router.navigate(['/list-theme']);
    },
    error: (e) => console.error(e)
  });
}

}
