import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrl: './new-product.component.css'
})
export class NewProductComponent implements OnInit {

productFormGroup!:FormGroup;
  constructor(private fb:FormBuilder,public prodService:ProductService,private router:Router){

  }


  ngOnInit(): void {
this.productFormGroup=this.fb.group({
  name:this.fb.control(null,[Validators.required,Validators.minLength(4)]),
  price:this.fb.control(null,[Validators.required,Validators.min(5)]),
  promotion:this.fb.control(false,[Validators.required]),
})
  }

  handleAddProduct(){
    let product=this.productFormGroup.value;
    this.prodService.addNewProduct(product).subscribe({
      next:(data)=>{
        alert("product added successfully");
        this.productFormGroup.reset();
        this.router.navigateByUrl('/admin/products')
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }

 

}
