import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})
export class HeoreComponent {

    nombre: string = 'Iron Man';
    edad: number = 45;

    get nombreCapitalizado() {
        return this.nombre.toUpperCase();
    }

    obtenerNombre(): string {
        return `${this.nombre} - ${this.edad}`;
    }

    cambiarNombre(): void {
        console.log('Hey...');
        this.nombre = 'Hulk';
    }
    
    cambiarEdad(): void {
        this.edad = 30;
    }

}