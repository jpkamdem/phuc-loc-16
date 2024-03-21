import { Component, OnInit } from '@angular/core';
import { BoxesService } from '../../services/boxes.service';
import { catchError, throwError } from 'rxjs';

@Component({
  selector: 'carte',
  templateUrl: './carte.component.html',
  styleUrl: './carte.component.css',
})
export class CarteComponent implements OnInit {
  boxes: any;

  constructor(private boxesService: BoxesService) {}

  ngOnInit(): void {
    this.getBoxes();
  }

  getBoxes(): void {
    this.boxesService.getBoxes().subscribe((data) => {
      this.boxes = data;
      console.log(this.boxes);
    });
  }

  // async addToCart(id: number) {
  //   try {
  //     const res = await new Promise((resolve, reject) => {
  //       this.boxesService.addToCart(id).subscribe({
  //         next: (response) => {
  //           resolve(response)
  //         },
  //         error: (err) => {
  //           console.error('Erreur lors de l\'ajout de la box au panier :', err)
  //           reject(err)
  //         }
  //       })
  //     })
  //     console.log('Box ajoutée au panier avec succès')
  //   } catch (err) {
  //     console.error('Erreur lors de l\ajout de la box au panier :', err)
  //   }
  // }
  async addToCart(id: number) {
    try {
      await this.boxesService.addToCart(id).toPromise()
      console.log('Box ajoutée au panier avec succès')
    } catch (err) {
      console.error('Erreur lors de l\'ajout de la box au panier :', err)
    }
  }
}
