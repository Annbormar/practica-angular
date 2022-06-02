import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Persona } from './../../interfaces/persona';

@Component({
  selector: 'app-person',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})

export class PersonComponent implements OnInit {

  do: String = "insert"
  position: any = 0

  contacts: Array<Persona> = []

  contact: Persona = {
        nombre: "",
        apellidos: "",
        edad: "",
        dni: "",
        cumpleaños: "",
        colorFavorito: "",
        sexo: "",
        notas: ""
  }

  favouriteColours = [
    { id: 1, value: 'Rojo' },
    { id: 2, value: 'Azul' },
    { id: 3, value: 'Amarillo' },
    { id: 4, value: 'Verde' },
    { id: 5, value: 'Rosa' },
    { id: 6, value: 'Negro' },
    { id: 7, value: 'Morado' },
    { id: 8, value: 'Marrón' }
  ];


  constructor() { }

  ngOnInit(): void {}

  add( form : NgForm ){
    if( this.do === 'insert' ){

      let cumpleaños  = new Date(this.contact.cumpleaños);
      let dia = cumpleaños.getDay();
      let mes = cumpleaños.getMonth();
      let año = cumpleaños.getFullYear();
      let edadNum = parseInt(this.contact.edad)
      let nombre = this.contact.nombre;
      let apellidos = this.contact.apellidos;
      let colorFavorito = this.contact.colorFavorito;

      this.contact.cumpleaños = `${dia}/${mes}/${año}`

      if(edadNum > 0 && edadNum <= 125){
      this.contacts.push( this.contact )
      }

      this.contact = {
        nombre: "",
        apellidos: "",
        edad: "",
        dni: "",
        cumpleaños: new Date(),
        colorFavorito: "",
        sexo: "",
        notas: ""
      }

    }else{
      this.contacts[ this.position ] = this.contact
      this.do = 'insert'
    }
    form.resetForm()
  }

  delete( delPosition : number )    : void {
    this.contacts.splice( delPosition , 1 )
  }
  update( upPosition : number ) : void {
    this.contact  = this.contacts[ upPosition ];
    this.do   = 'update'
    this.position = upPosition
  }
}