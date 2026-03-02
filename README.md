# 🚀 Boti-Extranet Hub | Dashboard de Gestão de Franquias

MVP desenvolvido para demonstrar maturidade técnica e arquitetural, focado em performance, tipagem rigorosa e resiliência para a Extranet do Grupo Boticário.

## 🏗️ Decisões Arquiteturais (ADRs)

### ADR 001: Arquitetura de Serviços Desacoplada
* **Contexto**: Necessidade de isolar a lógica de dados críticos da interface.
* **Decisão**: Criação de uma camada de `services` com Axios, garantindo que o contrato de dados seja respeitado via Interfaces TypeScript.

### ADR 002: Qualidade e Cobertura E2E com Playwright
* **Contexto**: Garantir que o Dashboard financeiro seja exibido corretamente em todos os navegadores.
* **Decisão**: Automação de testes de ponta a ponta validando Chromium, Firefox e Webkit.

## 🛠️ Stack Tecnológica
* **React 18 + Vite**
* **TypeScript** (Modo rigoroso de tipagem)
* **Material UI v5**
* **Playwright** (Testing Engine)

## 🧪 Como Validar o Projeto
1. Instale as dependências: `npm install`
2. Rode os testes automatizados: `npx playwright test`
3. Inicie o dashboard: `npm run dev`

## 🧠 Desafios Superados & Aprendizados

Durante o desenvolvimento desta extranet, foram enfrentados desafios técnicos que exigiram uma postura analítica e resolutiva:

* **Gerenciamento de Infraestrutura (OneDrive + Node):** Superação de conflitos de sincronização e latência de arquivos ao manter o projeto em ambiente de nuvem, garantindo a integridade dos `node_modules` e a performance do HMR do Vite.
* **Resolução de Permissões de Sistema (EPERM):** Diagnóstico e correção de erros de permissão de execução do Windows ao configurar o Playwright, garantindo que o executor de testes tivesse acesso às pastas de diagnósticos do sistema.
* **Conformidade de Tipagem TypeScript:** Ajuste fino nas configurações de `tsconfig` para suporte ao `verbatimModuleSyntax`, resolvendo avisos de importação de tipos e garantindo um build limpo e seguro.
* **Depuração de Ciclo de Vida React:** Resolução de conflitos de renderização ("tela branca") através do desacoplamento de lógica de serviços, movendo chamadas de API do `App.tsx` para uma camada dedicada de `services`