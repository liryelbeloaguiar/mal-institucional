# MAL Tecnologia

Landing page institucional desenvolvida com Angular, TypeScript e SCSS.

## Executar

```bash
npm install
npm start
```

A aplicacao fica disponivel em `http://localhost:4200`.

## Verificacoes

```bash
npm run build
npm test -- --watch=false
```

## Conteudo editavel

- Solucoes, servicos, processo e diferenciais: `src/app/features/home/data/home-content.ts`
- E-mail, WhatsApp e redes sociais: `src/app/core/constants/contact.constants.ts`
- Identidade visual: `public/assets/logos/`
- Tokens de cor, sombra e dimensoes: `src/styles/_variables.scss`

O formulario possui validacao no front-end e deixa o metodo `submit()` isolado para uma futura integracao com API.
"# mal-institucional" 
