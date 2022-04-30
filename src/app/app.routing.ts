import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
 
//importando os componente que serão mapeados
import { UserLoginComponent } from "./user-login/user-login.component";
import { UserRegisterComponent } from "./user-register/user-register.component";
 
//mapeamento das rotas
const routes: Routes = [
    { path: '', component: UserLoginComponent }, /* raiz do projeto */
    { path: 'user-register', component: UserRegisterComponent }
];
 
//registrando as rotas e o módulo
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
 
//gerando a classe para este arquivo de configuração
export class AppRoutingModule { }


