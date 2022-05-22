import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';
import { environment } from 'src/environments/environment';
 
@Component({
  selector: 'app-empresas-consulta',
  templateUrl: './empresas-consulta.component.html',
  styleUrls: ['./empresas-consulta.component.css']
})
export class EmpresasConsultaComponent implements OnInit {
 
  empresas: any[] = [];
 
  pagina: number = 1; //paginação
  filtro: any = { nomeFantasia: '' }; //filtro
 
  mensagem: string = '';
 
  constructor(
    private httpClient: HttpClient,
    private spinner: NgxSpinnerService
  ) { }
 
  ngOnInit(): void {
 
    this.spinner.show();
 
    this.httpClient.get(environment.apiUrl + "/Empresas")
      .subscribe(
        (res) => {
          this.empresas = res as any[];
          this.spinner.hide();
        }
      );
  }
 
  onDelete(idEmpresa: string): void {
 
    if (window.confirm('Deseja realmente excluir a empresa selecionada?')) {
 
      this.spinner.show();
 
      this.httpClient.delete(environment.apiUrl + "/Empresas/" + idEmpresa)
        .subscribe({
          next: (res: any) => {
            this.mensagem = `Empresa '${res.nomeFantasia}' excluída com sucesso.`;
            this.ngOnInit();
            this.pagina = 1;
            this.filtro.nomeFantasia = '';
            this.spinner.hide();
          },
          error: (e) => {
            console.log(e);
            this.spinner.hide();
          }
        });
    }
  }
 
  //função para realizar a paginação do componente
  handlePageChange(event: any): void {
    this.pagina = event;
  }
 
}
 


