# Matheus Henrique - Personal & Consultoria de Treino

Aplicação web mobile-first completa em React com TypeScript, inspirada no design oficial de link-in-bio avançado e mini-app SPA para o Matheus Henrique, estudante de Educação Física com foco em hipertrofia, treinamento esportivo e consultoria.

## 🚀 Tecnologias Utilizadas
- **React 19** com **TypeScript** (tipagem estrita com interfaces e types)
- **Vite** para build e desenvolvimento de altíssima performance
- **Tailwind CSS v4** para estilização mobile-first, gradientes e sombras
- **Lucide React** para iconografia esportiva e minimalista
- **React Router DOM** (com HashRouter para compatibilidade universal em deploys)
- **Canvas Confetti** para micro-interação comemorativa no envio do formulário
- **Fontes Oficiais**:
  - **Nasalization**: Títulos esportivos/tech nos cards e cabeçalhos
  - **Inter**: Subtítulos, textos corridos e botões de alta legibilidade

## 📱 Funcionalidades & Arquitetura
1. **Layout Mobile-First Feed Centralizado**:
   - Experiência otimizada para smartphones (max-width: 430px).
   - No desktop, container centralizado com backdrop escuro elegante e sombra suave.
2. **Alternador de Tema (Dark Mode / Light Mode)**:
   - Reprodução 100% fiel tanto da versão Dark quanto da versão Light anexadas no projeto de referência.
3. **Página Inicial (Home)**:
   - Hero Card com foto do Matheus, gradiente carmim e tipografia "Construa a sua ROTINA".
   - Botões sociais funcionais (Instagram e WhatsApp).
   - Cards de navegação empilhados com imagens locais e links semânticos:
     - Card **Formulário**
     - Card **Sobre mim**
     - Card **Alunos**
   - Seção CTA "Vem pro time!" com botão "Quero ser aluno".
   - Footer estilizado com monograma MH e copyright.
4. **Página Sobre Mim (`#/sobre`)**:
   - Header com botão elegante "Voltar".
   - Subtítulo de abertura oficial e os 3 parágrafos originais do Matheus na íntegra.
   - Pilares metodológicos da consultoria e credenciais.
   - Botões de ação para o Formulário e WhatsApp.
5. **Página Alunos & Resultados (`#/alunos`)**:
   - Vitrine de comparativos de Antes e Depois em cards proporcionais a **161x281px**.
   - Filtros por categoria (Hipertrofia, Recomposição, Definição, Iniciantes).
   - Modal interativo com **Split Slider Antes vs Depois** arrastável.
   - Depoimentos reais e explicação prática em 4 passos de como o acompanhamento funciona.
6. **Página de Formulário / Aplicação (`#/formulario`)**:
   - Formulário controlado em React + TypeScript com validação em tempo real.
   - Máscara automática de telefone para WhatsApp: `(XX) XXXXX-XXXX`.
   - Campos: Nome completo, Idade, WhatsApp, Objetivo, Tempo de treino, Frequência semanal, Dificuldades atuais e Observações.
   - Formatação automática dos dados em mensagem estruturada e redirecionamento direto para a API do WhatsApp com efeito de confetes.

## 🛠️ Como Executar o Projeto

```bash
# 1. Instalar dependências (caso necessário)
npm install

# 2. Iniciar o servidor de desenvolvimento
npm run dev

# 3. Compilar para produção
npm run build
```
