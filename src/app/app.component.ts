import { Component } from '@angular/core';
import { Comida } from './Comida';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'comida-tour';
}
export class ComidaComponentComponent {
  Comida1:Comida ={
    id : 1,
    name : 'Frijoles y totopos.',
    descripcion:"Frijoles refritos y totopos/nachos" 

  };

  Comida2:Comida ={
    id : 2,
    name : 'Pozole',
    descripcion:"En la actualidad el pozole ha sufrido cambios y diferencias asociadas con la región donde se prepara y consume. En el estado de Guerrero se prepara el blanco y el verde, mientras que en la Ciudad de México, Sinaloa, Nayarit y Jalisco se consume la variante roja." 
  };

  Comida3:Comida ={
    id : 3,
    name : 'Chiles rellenos',
    descripcion:"Rellenos de queso y frijoles con tortillas y arroz." 
  };
  Comida4:Comida ={
    id : 4,
    name : 'Huevos divorciados ',
    descripcion:"Dos huevos fritos, uno con salsa verdes,separados de frijoles y otro con salsa verde." 
  };
  Comida5:Comida ={
    id : 5,
    name : 'Gorditas.',
    descripcion:"Chicharrón prensado, frijol, requesón, todos los anteriores." 
  };
  Comida6:Comida ={
    id : 6,
    name : 'Quesadillas.',
    descripcion:"Chicharrón prensado, tinga, picadillo,queso." 
  };
  Comida7:Comida ={
    id : 7,
    name : 'Pambazo.',
    descripcion:"Relleno de papas con longaniza,Crema, lechuga y queso" 
  };
  Comida8:Comida ={
    id : 8,
    name : 'Mole',
    descripcion:"La cocina es una recompensa para el paladar y en México si estás celebrando algo probablemente el plato principal en la mesa será un buen Mole. En nuestro país podrás encontrar una gran variedad de ellos, algunos llegan a ser tan sofisticados que pueden contener un sinfín de ingredientes de diferentes partes del mundo que al mezclarlos correctamente toman una identidad indudablemente mexicana. Es una salsa que está viva y de verdad al ponerlo en tu boca literalmente se vuelve una gran fiesta para el paladar." 
  };
  Comida9:Comida ={
    id : 9,
    name : 'Cochinita Pibil',
    descripcion:"Este platillo preparado con carne de cerdo adobada en achiote y envuelta en hojas de plátano, tradicionalmente se cocinaba dentro de un hoyo en el suelo sobre piedras calientes, ya que pibil en lengua Maya significa “bajo tierra”." 
  };
  Comida10:Comida ={
    id : 10,
    name : 'Chiles en Nogada',
    descripcion:"Existen diferentes versiones acerca de su aparición, pero se sabe que este platillo data de 1821, año en el cual Agustín de Iturbide firmó el acta de los tratados de Córdoba. Algunos cuentan que fueron las madres agustinas del Convento de Santa Mónica en Puebla las que al saber que Don Agustín estaría en esa ciudad para celebrar su santo, el 28 de agosto, decidieron elaborar un platillo que recordara los colores de la bandera. Hoy en día es uno de los platillos principales que acompañan nuestras fiestas patrias." 
  };
  Comida11:Comida ={
    id : 11,
    name : 'Barbacoa',
    descripcion:"La barbacoa es un método de cocción prehispánico que consistía en formar un hoyo en la tierra, calentarlo con brasas de leña y colocar piedras para cocinar a altas temperaturas. Sobre estas piedras se ponían las carnes que habían de cocerse envueltas en hojas de plátano o maguey dependiendo de la región; para finalizar su preparación las carnes se colocaban bajo tierra y se dejaban cocinar por largas horas. Hoy sin duda se ha vuelto una exquisitez y para algunos, un remedio delicioso y eficaz para la resaca." 
  };
  Comida12:Comida ={
    id : 12,
    name : 'Carnitas',
    descripcion:"En la búsqueda de sabores, sazón y riqueza, hay quienes agregan al perol de las carnitas ingredientes exóticos como frutas, chiles, azúcar, leche o refrescos. En fin, cada uno con su cada cual, para hacer la diferencia, el detalle de distinción, el gesto poderoso, aquello que dé a las carnitas un toque personal.Aunque a esto pueda parecer una aberración para los puristas de “El Estilo Michoacán”." 
  };

  Comida13:Comida ={
    id : 13,
    name : 'Pescado a la Veracruzana',
    descripcion:"En la entidad, anclada a las orillas del Golfo de México donde Hernán Cortés fundó la Real Villa Rica de la Santa Vera Cruz en 1519, comenzó el contacto directo con los españoles y dio por resultado una zona típicamente mercada por el mestizaje y el encuentro, de ahí nace este delicioso guiso muy parecido al bacalao preparado en algunas regiones de España." 
  };
  Comida14:Comida ={
    id : 14,
    name : 'Tlayudas',
    descripcion:"Son exclusivas de Oaxaca y uno de sus platos más populares. Tlayuda es en realidad el nombre que se le da a la gran tortilla de maíz; las Tlayudas se pueden preparar sin carne (sencillas), o con cecina, res, chorizo​​, o a veces con otros ingredientes más extravagantes. Los ingredientes básicos pueden variar, pero en general un Tlayuda es preparada con lechuga, tomate, frijoles refritos, aguacate, queso (o quesillo) y luego guacamole y salsa de chile se añaden al gusto." 
  };

  Comidas:Comida[] = [];

  constructor(){
    this.Comidas.push(this.Comida1);
    this.Comidas.push(this.Comida2);
    this.Comidas.push(this.Comida3);
    this.Comidas.push(this.Comida4);
    this.Comidas.push(this.Comida5);
    this.Comidas.push(this.Comida6);
    this.Comidas.push(this.Comida7);
    this.Comidas.push(this.Comida8);
    this.Comidas.push(this.Comida9);
    this.Comidas.push(this.Comida10);
  }
}
