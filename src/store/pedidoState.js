import pedidoDao from "./api/services/pedido"

const state = {
  pedido: {
    id: null,
    estado: "FECHADO",
    hora_abertura: null,
    hora_fechamento: null,
    motivo_cancelamento: null,
    numero: 0,
    pagamento: {},
    total: 0,
    valor_pago: 0,
    valorTroco: 0,
    bandeira: null,
    tipo: null,
    desconto: 0,
    itens:[],
    cliente: null
  }
}

const getters = {
  getId: state => state.pedido.id,
  getEstado: state => state.pedido.estado,
  getHora_abertura: state => state.pedido.hora_abertura,
  getHora_fechamento: state => state.pedido.hora_fechamento,
  getMotivo_cancelamento: state => state.pedido.motivo_cancelamento,
  getNumero: state => state.pedido.numero,
  getPagamento: state => state.pedido.pagamento,
  getTotal: state => state.pedido.total,
  getValorPago: state => state.pedido.valor_pago,
  getValorTroco: state => state.pedido.valorTroco,
  getBandeira: state => state.pedido.bandeira,
  getTipo: state => state.pedido.tipo,
  getDesconto: state => state.pedido.desconto,
  getItens: state => state.pedido.itens,
  getCliente: state => state.pedido.cliente,
  getPedido: state => state.pedido
}

const actions = {
  cadastrarPedido(state, valor) {
    return pedidoDao.cadastrar(valor)
  }
}

const mutations = {
  guardarId: (state, id) => state.pedido.id = id,
  guardarEstado: (state, estado) => state.pedido.estado = estado,
  guardarHora_abertura: (state, hora_abertura) => state.pedido.hora_abertura = hora_abertura,
  guardarHora_fechamento: (state, hora_fechamento) => state.pedido.hora_fechamento = hora_fechamento,
  guardarMotivo_cancelamento: (state, motivo_cancelamento) => state.pedido.motivo_cancelamento = motivo_cancelamento,
  guardarNumero: (state, numero) => state.pedido.numero = numero,
  guardarPagamento: (state, pagamento) => state.pedido.pagamento = pagamento,
  guardarTotal: (state, total) => state.pedido.total = total,
  guardarDesconto: (state, desconto) => state.pedido.desconto = desconto,
  guardarValorPago: (state, valor_pago) => state.pedido.valor_pago = valor_pago,
  guardarValorTroco: (state, valorTroco) => state.pedido.valorTroco = valorTroco,
  guardarBandeira: (state, bandeira) => state.pedido.bandeira = bandeira,
  guardarTipo: (state, tipo) => state.pedido.tipo = tipo,
  guardarItens: (state, itens) => state.pedido.itens = itens,
  guardarCliente: (state, cliente) => state.pedido.cliente = cliente,
  guardarPedido: (state, pedido)=> state.pedido = pedido
}

export default {
  state,
  getters,
  actions,
  mutations
};