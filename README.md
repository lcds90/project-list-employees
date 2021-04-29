# Projeto SPA - Single Page Application

## :scroll: Sumário

- [Sobre](#about)
- [Estrutura](#structure)
- [Conceitos](#learned)

## :computer: Sobre <a name = "about"></a>

> Bootcamp 🚀 = Avanade Angular Developer

<p align="center">
<br>
  <a href="https://web.digitalinnovation.one/" rel="noopener">
 <img width=400px height=200px src="https://hermes.digitalinnovation.one/site/images/cover_dio.jpg" alt="Logo Digital Innovation One"></a>
</p>

<details>
  <summary>Projeto consiste em dashboard administrativo com lista de funcionários de empresa.</summary>
  <p>
  <b>Checklist</b>
  <ul>
  <li>✔️ Criar aplicação angular</li>
  <li>✔️ 3 Componentes</li>
  <li>✔️ 4 Componentes do Angular Material</li>
  <li>✔️Interação através de interpolação e data binding</li>
  </ul>
  </p>
<p align="center">
 :globe_with_meridians: DEPLOY
</p>

<p align="center">
<img src="./img/screenshot.png">
</p>

</details>

## :file_folder: Estrutura do projeto <a name = "structure"></a>

<details>
  <summary>APP</summary>
  <p>
  <pre>
 ├── app
    ├── features                # Pasta de componentes de aplicação
    ├── shared                  # Arquivos compartilhados globalmente
        ├── material            # imports do Angular Material
        └── material
    ├── app-routing.module.ts   # Rotas da aplicação
    ├── app.component.css       # 
    ├── app.component.spec.ts   # 
    ├── app.compoenent.ts       # 
    └── app.module.ts           #   
  </pre> 
  </p>
</details>

<hr>

## :memo: Conceitos aprendidos <a name = "learned"></a>

<details>
  <summary>Implementação do Angular Material</summary>
  <p>Optei por dividir os imports em apenas 1 módulo para organização em importação e divisão de biblioteca com componentes do sistema e importações do angular.</p>
</details>

<details>
  <summary>Routes</summary>
  <p>O arquivo app-routing-module contém as rotas e renderização de componentes.</p>
</details>

<details>
  <summary>Data Binding</summary>
  <p>
  Forma de associar informações lógicas entre o template e o componente, ou vice-versa.
Formas existentes:
  <ul>
  <li>Interpolação: {{ valor }}</li>
  <li>Property Binding: [propriedade]="valor"</li>
  <li>Event Binding: (evento)="handler"</li>
  <li>Two-Way Data Binding: [(ngModel)]="propriedade"</li>
  </ul>
  </p>
</details>

<details>
  <summary>Diretivas</summary>
  <p>
  Marcadores do elemento DOM, foram utilizados no projeto
  <ul>
  <li>ngIf</li>
  <li>ngFor</li>
  </ul>
  </p>
</details>

<details>
  <summary>Event Emitters</summary>
  <p>
  Comunicação de dados entre componentes.
  <ul>
  <li>@Input: Receber dados do componente pai</li>
  <li>@Output: Enviar dados do filho para o pai</li>
  </ul>
  </p>
</details>

<details>
  <summary>Life Cycle Hooks</summary>
  <p align="center">
  Métodos disponibilizados pelo Angular dentro do ciclo de vida do componente, use com sabedoria para não comprometer aplicação.
  <img width=341px height=192px src="https://warcontent.com/wp-content/uploads/2020/07/angular-lifecycle-hooks-2-1024x576.png">
  <ul>
  <li>@Input: Receber dados do componente pai</li>
  <li>@Output: Enviar dados do filho para o pai</li>
  </ul>
  </p>
</details>

<details>
<summary>Arquitetura de Componentes, serviços e injeção de dependência</summary>
<p>
A arquitetura de componentes baseia-se na construção de componentes independentes, substítuiveis e modulares, priorizando reutilização e gerenciamento de complexidade, tendo como beneficio escalabilidade, manuntenção e perfomance.
</p>
<p>
Serviços reorgnizam e compartilham regras de negócio.
Reutilizaveis entre diferente componentes.
Todo serviço é uma depedencia, instanciando na sua construção.
</p>
<p align="center">
  <img src="./img/arquitetura1.PNG">
  <img src="./img/arquitetura2.PNG">
  <img src="./img/arquitetura3.PNG">
</p>
</details>

<details>
<summary>Life Cycle Hooks</summary>
<p>
Executar certos métodos de acordo com o ciclo de vida escolhido.
Prefira utilizar o construtor para instanciar e injetar dependencias
e NgOnInit para lógica ser executada.
</p>
<p align="center">
  <img src="./img/ciclo-de-vida.PNG">
</p>
</details>

<details>
<summary>Componentes apresentacionais e inteligentes</summary>
<p>
Componentes apresentacionais
<ul>
<li>Parecido com funções puras</li>
<li>Prioridade apenas com a interface do usuário</li>
<li>Não fica responsável por recuperar dados ou lidar com lógica de negócio</li>
<li>Sem efeitos colaterais na aplicação</li>
<li>Recebem dados via @Input e emite eventos via @Output</li>
</ul>
</p>
<p>
Componentes inteligentes
<ul>
<li>Parecido com funções impuras(complexas)</li>
<li>Fica responsável por lidar com lógica de negócio</li>
<li>Sem efeitos colaterais na aplicação</li>
<li>Compostos internamente por componentes apresentacionais</li>
<li>Passam os dados para os componentes apresentacionais para o usuário final</li>
</ul>
</p>
<p align="center">
  <img src="./img/componentes-apresentacionais-inteligentes.PNG">
</p>
</details>

<details>
<summary>Design Modular</summary>
<p>
Divisão dos módulos baseado em diferentes funcionalidades de negócio
<ul>
<li>Core Module: Serviços singleton, instância única e exportação de módulo de terceiros para o módulo principal (App Module)</li>
<li>Shared Module: Componentes/Pipes/Services que são genéricos e utilizados com frequência</li>
<li>Featured Module: Conjunto de recursos de aplicação num módulo de funcionalidade</li>
<li>Library: Código que pode ser reutilizavel entre diferentes aplicações</li>
<li>Angular Element: Recurso para criar web components, padrão da web para definir novos elementos HTML de maneira indepedente de estrutura e agnóstica de frameworks</li>
</ul>
</p>
</details>

<details>
  <summary>Métodologias Front-End</summary>
    <details>
    <summary>SMCSS</summary>
    <p>
    <p>
    Arquitetura SMCSS é modular e escalável, sendo dividida em:
    <ul>
    <li>Base: Estilização de seletores, pseudo e resets</li>
    <li>Layout: Principais componentes (cabeçalho, rodapé, entre outros)</li>
    <li>Module: Componentes como botões, ícones, alertas, etc</li>
    <li>State: Mudança de estados, que será modificado do estado inicial</li>
    <li>Theme: Temas específicos para a mesma aplicação</li>
    </ul>
    </p>
    <p align="center">
      <img src="./img/smcss.PNG">
    </p>
    </p>
    </details>
    <details>
    <summary>BEM</summary>
    <p>
    <p>
    Significa <b>Block, Element, Modifier</b>, padrão para definir nomeclaturas ao componentes CSS
    </p>
    <p align="center">
      <img src="./img/bem.PNG">
    </p>
    </p>
    </details>
    <details>
    <summary>OOCSS</summary>
    <p>
    <p>
    É uma metodologia que identifica um padrão visual que pode se repetir no projeto e o agrupa em classe tornando o mesmo reutilzavel, é utilizado em frameworks CSS.
    </p>
    <p align="center">
      <img src="./img/oocss.PNG">
    </p>
    </p>
    </details>

</details>
