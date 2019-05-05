/*
  Array de objetos contendo:
  {
    titulo,
    subitens: [
      {
        icon,
        text,
        route
      }
    ]
  }
*/
export const itens = [
  {
    titulo: 'Cadastrar',
    subitens: [
      {
        icon: 'dashboard',
        text: 'Categoria',
        route: '/adicionar/categoria'
      },
      {
        icon: 'person',
        text: 'Cliente',
        route: '/adicionar/cliente'
      },
      {
        icon: 'add_location',
        text: 'Endereco',
        route: '/adicionar/endereco'
      },
      {
        icon: 'playlist_add',
        text: 'Pedido',
        route: '/adicionar/pedido'
      },
      {
        icon: 'local_pizza',
        text: 'Pizza',
        route: '/adicionar/pizza'
      },
      {
        icon: 'fastfood',
        text: 'Produto',
        route: '/adicionar/produto'
      },
      {
        icon: 'local_play',
        text: 'Promocao',
        route: '/adicionar/promocao'
      },
      {
        icon: 'local_dining',
        text: 'Recheio',
        route: '/adicionar/recheio'
      },
      {
        icon: 'restaurant',
        text: 'Sabor',
        route: '/adicionar/sabor'
      },
      {
        icon: 'hdr_strong',
        text: 'Tamanho',
        route: '/adicionar/tamanho'
      },
      {
        icon: 'phone',
        text: 'Telefone',
        route: '/adicionar/telefone'
      }
    ]
  },
  {
    titulo: 'Listagem',
    subitens: [
      {
        icon: 'dashboard',
        text: 'Categoria',
        route: '/listar/categoria'
      },
      {
        icon: 'person',
        text: 'Cliente',
        route: '/listar/cliente'
      },
      {
        icon: 'fastfood',
        text: 'Produto',
        route: '/listar/produto'
      },
      {
        icon: 'local_play',
        text: 'Promocao',
        route: '/listar/promocao'
      },
      {
        icon: 'local_dining',
        text: 'Recheio',
        route: '/listar/recheio'
      },
      {
        icon: 'restaurant',
        text: 'Sabor',
        route: '/listar/sabor'
      },
      {
        icon: 'hdr_strong',
        text: 'Tamanho',
        route: '/listar/tamanho'
      }
    ]
  }
]
