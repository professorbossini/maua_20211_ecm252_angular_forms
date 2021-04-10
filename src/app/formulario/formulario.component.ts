import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Pessoa } from '../model/pessoa';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  pessoa: Pessoa = new Pessoa();

  profissoes: string[] = [
    'Engenheiro',
    'Professor',
    'Químico',
    'Zoólogo',
    'Advogado'
  ];

  salvar(pessoaForm: NgForm): void{
    console.log(pessoaForm);
    /*this.pessoa.nome = pessoaForm.value.nome;
    this.pessoa.fone = pessoaForm.value.fone;
    this.pessoa.email = pessoaForm.value.email;
    this.pessoa.profissao = pessoaForm.value.profissao;*/
    //console.log(this.pessoa);
    // console.log (`
    //   Nome: ${nome},
    //   Fone: ${fone},
    //   E-mail: ${email},
    //   Profissão: ${profissao}
    // `)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
