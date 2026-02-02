## Roteiro de Prática 01 — Git + GitHub (Básico)

### Objetivo da prática

Criar um mini-projeto, versionar com **Git** (commits e branch), e publicar no **GitHub** (push/pull).

### Entregáveis (o que entregar?)

* Link do repositório no GitHub
* Commits feitos (verificados no GitHub)

---

# Parte 1 — Preparação do projeto

## 1.1 Criar a pasta e arquivos

1. Crie uma pasta chamada: `meu-site-versionado`
2. Dentro dela, crie:

* `index.html`
* `style.css`

**Conteúdo mínimo sugerido:**

**index.html**

* Um `<h1>` com seu nome
* Um parágrafo `<p>` com uma frase sobre você
* Linke o CSS no `<head>`

**style.css**

* Defina uma fonte (ex.: `font-family`)
* Mude a cor do título

---

# Parte 2 — Git local: init → add → commit

## 2.1 Abrir o terminal na pasta do projeto

No terminal, navegue até a pasta `meu-site-versionado`.

## 2.2 Inicializar repositório

Execute:

* `git init` 

## 2.3 Verificar status

Execute:

* `git status` 

## 2.4 Adicionar arquivos ao staging

Execute:

* `git add .` 

## 2.5 Fazer o primeiro commit

Execute:

* `git commit -m "cria estrutura inicial do site"` 

> Se der erro de identidade do Git, pule para a seção **5.1** e volte aqui.

---

# Parte 3 — Branch para melhoria (feature)

## 3.1 Criar uma branch e mudar para ela

Execute:

* `git checkout -b feature/estilos` 

## 3.2 Fazer uma melhoria visual no CSS

No `style.css`, aplique **duas mudanças** (exemplos):

* centralizar o texto do título
* centralizar o conteúdo da página
* mudar background do body
* adicionar espaçamento/margem
* aumentar tamanho do título

## 3.3 Ver status, add e commit

Execute:

* `git status`
* `git add .`
* `git commit -m "melhora estilos da pagina"` 

# Parte 4 — Voltar para main e fazer merge

## 4.1 Voltar para a branch principal

Execute:

* `git checkout main` 

## 4.2 Fazer merge da branch de estilos

Execute:

* `git merge feature/estilos` 


## 4.3 (Opcional) Apagar a branch

Execute:

* `git branch -d feature/estilos` 

---

# Parte 5 — Publicar no GitHub (remoto)

## 5.1 Configurar nome e e-mail (se necessário)

Se o Git reclamar de identidade (ou se for a primeira vez no PC), execute:

* `git config user.name "Seu Nome"` 
* `git config user.email "seuemail@exemplo.com"` 

  > - Use o e-mail associado à sua conta do GitHub. 
  > - A opção `--global` (inserido entre `config` e `user.name` ou `user.email`) faz essa configuração valer para todos os repositórios no computador. Somente use essa opção se estiver em seu computador pessoal.

## 5.2 Criar repositório no GitHub

No GitHub:

1. Crie um repositório chamado `meu-site-versionado`
2. Não precisa adicionar README agora (opcional)

## 5.3 Conectar remoto

No terminal, execute (substitua pela URL do seu repo):

* `git remote add origin <URL_DO_REPO>` 

## 5.4 Enviar para o GitHub (push)

Execute:

* `git push -u origin main` 

---

# Parte 6 — Simular mudança remota e puxar (pull)

## 6.1 Alterar algo direto no GitHub

No GitHub, crie ou edite o arquivo `README.md` e escreva:

* “Meu primeiro projeto versionado com Git e GitHub.”

## 6.2 Puxar para o computador

No terminal, execute:

* `git pull` 

---

## Questões teóricas (responder ao final)

1. O que é **versionamento de código** e qual problema ele resolve? 
2. Cite **2 vantagens** de usar Git no dia a dia de um projeto. 
3. Explique com suas palavras a diferença entre **Git** e **GitHub**. 
4. O que significa o Git trabalhar com **snapshots**? 
5. O que é **branch** e por que é recomendado criar uma branch para novas funcionalidades? 
6. Descreva o fluxo: **workspace → staging → repositório local → remoto**, citando **um comando** que representa cada passagem. 
