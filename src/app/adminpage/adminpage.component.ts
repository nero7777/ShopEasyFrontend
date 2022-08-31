import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AdminService } from '../services/admin.service';
import { UserDetails } from './user-details';

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css']
})
export class AdminpageComponent implements OnInit {

  user: UserDetails[]=[];
  users:UserDetails;
  userId: any;

  id: any;
  status!: string;
  order: any;
  isDesc: boolean = false;

  constructor(private adminService:AdminService, private route:ActivatedRoute, private router:Router) {
    this.users=new UserDetails();
   }

  ngOnInit(): void {
    this.adminService.getAllUserdetails().subscribe((data:any) =>{
      console.log(data);
      this.user=data;
  });
  OnDelete(this.userId:any){
    localStorage.setItem("userId", this.userId);
   
    this.userId=localStorage.getItem("userId");
    console.log(this.userId);
   
    Swal.fire({
      title: 'Are you sure want to remove?',
      text: 'You will not be able to recover this user data!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it',
    }).then((result) => {
      if (result.value) {
        this.adminService.deleteUser(this.userId,this.users).subscribe(
          (data)=>{
            console.log("user values deleted")
            this.id=this.userId;
            console.log("ID",this.id)
          }
        )
        Swal.fire('Deleted!','User data has been deleted.','success');
        this.router.navigate(['/admindashboard'])
      }
      else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'User data is safe :)', 'error');
      }
    });
  }

  CreateCard(this.userId:any){

    localStorage.setItem("userId",this.userId);
     
      this.userId=localStorage.getItem("userId");
      console.log(this.userId);
      this.adminService.updateCardStatus(this.userId,this.users).subscribe(
        (data)=>{
          console.log("user Verified")
          this.id=this.userId;
          console.log("ID",this.id)
        }
      )
      Swal.fire("Card Created",'User is verified','success');
 
      this.router.navigate(['/admindashboard'])

  }
  sortData(){
    if(this.order){
    let newarr =this.user.sort((a,b)=> a.userId-b.userId);
    this.user=newarr;
  }
  else{ let newarr =this.user.sort((a,b)=> b.userId-a.userId);
    this.user=newarr;
  }
  this.order = ! this.order;
  }

  sortPhone(){
    if(this.order){
    let newarr =this.user.sort((a,b)=> a.userId-b.userId);
    this.user=newarr;
  }
  else{ let newarr =this.user.sort((a,b)=> b.userId-a.userId);
    this.user=newarr;
  }
  this.order = ! this.order;
  }

  sortCard(){
    if(this.order){
    let newarr =this.user.sort((a,b)=> a.userId-b.userId);
    this.user=newarr;
  }
  else{ let newarr =this.user.sort((a,b)=> b.userId-a.userId);
    this.user=newarr;
  }
  this.order = ! this.order;
  }

  sortDate(){
    if(this.order){
    let newarr =this.user.sort((a,b)=> a.userId-b.userId);
    this.user=newarr;
  }
  else{ let newarr =this.user.sort((a,b)=> b.userId-a.userId);
    this.user=newarr;
  }
  this.order = ! this.order;
  }

  sortStatus(){
    if(this.order){
    let newarr =this.user.sort((a,b)=> a.userId-b.userId);
    this.user=newarr;
  }
  else{ let newarr =this.user.sort((a,b)=> b.userId-a.userId);
    this.user=newarr;
  }
  this.order = ! this.order;
  }

  Search(){
    if(this.userId ==""){
      this.ngOnInit();
    }
    else{
      this.user=this.user.filter(res =>{
        return res.userId.toLocaleString().match(this.userId.toLocaleString());
      })
    }
    }
  }

}
function OnDelete(userId: any, any: any) {
  throw new Error('Function not implemented.');
}

function sortData() {
  throw new Error('Function not implemented.');
}

function sortPhone() {
  throw new Error('Function not implemented.');
}

function sortCard() {
  throw new Error('Function not implemented.');
}

function sortStatus() {
  throw new Error('Function not implemented.');
}

function Search() {
  throw new Error('Function not implemented.');
}

function CreateCard(userId: any, any: any) {
  throw new Error('Function not implemented.');
}

