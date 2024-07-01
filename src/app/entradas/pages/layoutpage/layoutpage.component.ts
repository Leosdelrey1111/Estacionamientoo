import { Component } from '@angular/core';

@Component({
  selector: 'app-layoutpage',
  templateUrl: './layoutpage.component.html',
  styles: ``
})
export class LayoutpageComponent {

  public sidebarItems = [
    {label:'Listado', icon:'label',url:'./list'},
    {label:'Reporte',icon:'label', url:'./daily'},
    {label:'Añadir', icon:'add', url:'./veiculo'},
    {label:'New Usuario',icon:'add',url:"./registro"},
    {label:'call',icon:'search',url: "/src/app/auth/pages/registropage/registropage.component.html"}
  ]
  
  openUserMenu() {
    // Implement your user menu logic here
    console.log("User icon clicked");
  }

  openHelp() {
    // Implement your help logic here
    console.log("Help icon clicked");
  }

  openNotifications() {
    // Implement your notifications logic here
    console.log("Notifications icon clicked");
  }
}
