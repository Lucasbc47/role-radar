# RolêRadar

| Nome                | RA            |
| ------------------- | ------------- |
| Lucas Barboza Costa | 2040482422042 |

## Como executar

Requisitos:

- [Node.js](https://nodejs.org/) e [Git](https://git-scm.com/)
- Um navegador
- Chave de API do [PrimeUI](https://primeui.store/primeui)
- Chave de API da [Geoapify](https://myprojects.geoapify.com)

1. Clone o repositório e instale as dependências:

   ```bash
   git clone https://github.com/Lucasbc47/role-radar.git
   cd role-radar
   npm install
   ```

2. Edite `src/utils/chaves.js` e substitua os dois `COLOQUE_SUA_CHAVE_AQUI`:
   - **GEOAPIFY_KEY**: cadastre-se na [Geoapify](https://myprojects.geoapify.com), crie um projeto e gere a chave
   - **PRIMEUI_LICENSE**: solicite a licença Community na [PrimeUI](https://primeui.store/primeui)

3. Inicie o app:

   ```bash
   npm run dev
   ```

   e abra a URL indicado no terminal (normalmente, http://localhost:5173).

4. Ao abrir o app, o navegador vai pedir acesso à sua localização: permita.
