import { Component, OnInit } from '@angular/core';
import { Datos } from '../../models/Datos';
import { CargarImagenService } from '../../service/cargar-imagen.service';
import { FormControl, FormGroup, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  public imageForm: FormGroup;
  public file: any;
  public products: any;
  public fileSeccion: string;

  constructor(private productService: CargarImagenService) {
  }

  ngOnInit(): void {
    this.validateFormulario();
    this.getItems();
  }

  validateFormulario(){
    this.imageForm = new FormGroup({
      item: new FormControl(null, Validators.required),
      price: new FormControl(0, Validators.required),
      file: new FormControl(null, Validators.required)
    });
  }

  onFileChange(event){
    let reader = new FileReader();
    this.fileSeccion = event.target.files[0].name;
    if(event.target.files && event.target.files.length > 0){
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = () => {
        this.file = reader.result;
      };
    }
  }

  getItems(){
    this.productService.consultarItems().subscribe(data => {
      this.products = data;
    });
  }

  onSubmit(){
    const form = this.imageForm;
    if(form.valid){
      let datos = new Datos(form.value.item, form.value.price, this.file);
      this.productService.insertData(datos).subscribe(data => {
        this.validateFormulario();
        this.getItems();
      });
    }
  }

}
