import { Component } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
    templateUrl: './friends.component.html',
    styleUrls: ['./friends.component.css']
})
export class FriendsComponent {
            user:User[];
            user1:User;

            constructor(private friend: UserService){}

            ngOnInit(){
                
                this.user1 = new User();
            }
            search(){
                let name = (<HTMLInputElement>document.getElementById("search")).value;
              //  console.log(name);
                this.friend.searchFriend(name).subscribe((data) => {
                    this.user = data;
                

                });
            }
            request(friendEmail:any){
                //alert("m")
                this.user1=new User();
            
                let myEmail = sessionStorage.getItem('email');

                console.log(myEmail);
                console.log(friendEmail);
                this.friend.sendRequest(myEmail,friendEmail).subscribe((data) => {

                    
                });
            }
}


