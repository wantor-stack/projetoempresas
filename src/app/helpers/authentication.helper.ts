import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class AuthenticationHelper {

    //método para gravar os dadods do usuário autenticado
    //na local storage do navegador
    signIn(dados: any): void {
        //salvando na localStorage
        localStorage.setItem('AUTH_USUARIO', JSON.stringify(dados));
    }

    //método para ler os dados gravados na localstorage
    getAuthData(): any {
        let dados = localStorage.getItem('AUTH_USUARIO');
        if(dados != null)
            return JSON.parse(dados) as any
        else
            return null;
    }

    //método para apagar o conteúdo da local storage
    signOut(): void {
        //deletando os dados gravadods na localstorage
        localStorage.removeItem('AUTH_USUARIO');
    }

}