import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  //public sum =0;

    login(roam:string): any {
      const roammap = new Map([["I",1],["V",5],["X",10],["L",50],["C",100],["D",500],["M",1000]]);

      let letters = roam.length; 
      let i;
      let sum =0;
      let check = letters-1;
 
//for(let [key, value] of romnum.entries()){
 
//console.log("key and value "+key, value);

      for(i=0;i<letters;i++){

 
        console.log("S[i value]"+roam[i]);
         
        if(i>0 && i==check &&roam[i]==='V'){
            sum = sum+3;
        }else if(i>0 && i==check &&roam[i]==='X'){
            sum = sum+8;
        }else{
         
        const value = roammap.get(roam[i]);
         
        console.log("keyvalue"+value)
         
        if(value){
         
        //return sum=+value;
         
        sum=sum+value;
        }
        }
        //sum = sum+value
        }
        console.log(sum)
        return sum;
    }
  }
