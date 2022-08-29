import { Component, OnInit } from "@angular/core";
import listaProductos from '../../../assets/json/datos.json';

@Component({
    selector: "lista-productos",
    templateUrl: "./lista-productos.component.html"
})
export class listaProductosComponent {
    titulolistaProductos: string="Lista de Productos"
    productos: any = listaProductos;

    muestraImagen: boolean=false;
    filtro: string="";
    anchoImagen = 250;
    margenImagen = 5;

    toggleImage(): void {
        this.muestraImagen = !this.muestraImagen;
    }
}