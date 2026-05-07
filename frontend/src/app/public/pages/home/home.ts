import { Component, OnInit, signal } from '@angular/core';
import { PublicApiService } from '../../services/public-api.service';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.css',
})
class HomeComponent{
  numberOne = signal(4);

  constructor(private readonly publicApiService: PublicApiService) { }

  clicked(): void {
      this.publicApiService.getPokemonId(this.numberOne()).subscribe({
        next: (response) => {console.log(response)},
        error: (error) => {
          console.error('API error:', error);
        },
      });
    }
}

export { HomeComponent }
