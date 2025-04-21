# Schula Games - Site para Lives e Comunidade Gamer

![Logo Schula Games](assets/banner.png)

## 📝 Descrição do Projeto

O Schula Games é um site completo para streamers e criadores de conteúdo focado em games. A plataforma proporciona uma interface moderna e interativa para conectar o streamer com sua comunidade, compartilhar conteúdos e oferecer uma experiência personalizada para os usuários.

## 🌟 Recursos Principais

- **Header de Autenticação Persistente**: Sistema de login/cadastro presente em todas as páginas
- **Integração com Google**: Possibilidade de login e cadastro utilizando conta Google
- **Design Responsivo**: Adaptável a diversos dispositivos (desktop, tablet e mobile)
- **Integração com Redes Sociais**: Links diretos para todas as redes do criador
- **Área de Conteúdo**: Exibição de vídeos e transmissões do canal
- **Seção de Comunidade**: Espaço dedicado para a interação entre seguidores

## 🔧 Tecnologias Utilizadas

- **HTML5** - Estruturação do conteúdo
- **CSS3** - Estilização e animações
- **JavaScript** - Funcionalidades dinâmicas e interações
- **Google Identity Services** - Autenticação via Google
- **SessionStorage** - Persistência de dados de usuário entre sessões

## 📋 Páginas do Site

- **Home**: Página principal com conteúdo em destaque
- **Sobre**: Informações sobre o streamer, sua jornada e equipamentos
- **Conteúdo**: Vídeos, tutoriais, gameplay e materiais produzidos
- **Comunidade**: Espaço dedicado para a interação entre seguidores
- **Contato**: Formulários de login/cadastro e meios de contato

## 🚀 Como Usar

1. Clone o repositório
   ```bash
   git clone https://github.com/seu-usuario/site_schulagames.git
   ```

2. Abra o arquivo `index.html` em seu navegador
   
3. Para habilitar o login com Google, substitua o Client ID no arquivo `script.js`:
   ```javascript
   client_id: 'SEU-CLIENT-ID-AQUI'
   ```

## 💻 Estrutura do Projeto

```
site_schulagames/
│
├── imagens/ - Recursos visuais utilizados no site
│
├── comunidade.html - Página da comunidade
├── contato.html - Página de contato e autenticação
├── conteudo.html - Página de conteúdos do streamer
├── index.html - Página principal
├── sobre.html - Página com informações sobre o streamer
├── script.js - Funcionalidades JavaScript
└── styles.css - Estilos CSS
```

## 🎨 Personalização

O site foi desenvolvido com um sistema de variáveis CSS que facilita a personalização:

```css
:root {
  --cor0: #09090B; /* Fundo mais neutro */
  --cor1: #111827; /* Azul muito escuro */
  --cor2: #1F2937; /* Azul escuro para elementos */
  --cor3: #4F46E5; /* Azul-roxo mais vibrante */
  --cor4: #10B981; /* Verde neon para destaques primários */
  --cor5: #FACC15; /* Amarelo mais suave para títulos */
  --cor-destaque: #F43F5E; /* Cor de destaque para elementos importantes */
}
```

## 📱 Responsividade

O site é totalmente responsivo, adaptando-se a diferentes tamanhos de tela:
- **Desktop**: Layout completo com todas as informações
- **Tablet**: Reorganização de elementos para melhor visualização
- **Mobile**: Menu compacto e conteúdo adaptado para telas pequenas

## 📄 Licença

Este projeto está licenciado sob a [MIT License](LICENSE)

## 👨‍💻 Desenvolvido por

SchulaDev - Web Developer

---

📢 **Acompanhe o Schula Games nas redes sociais!**
