
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
    itens:[],
    cliente: null
  }
}

const getters = {
  getId: state => state.id,
  getEstado: state => state.estado,
  getHora_abertura: state => state.hora_abertura,
  getHora_fechamento: state => state.hora_fechamento,
  getMotivo_cancelamento: state => state.motivo_cancelamento,
  getNumero: state => state.numero,
  getPagamento: state => state.pagamento,
  getTotal: state => state.total,
  getValor_pago: state => state.valor_pago,
  getItens: state => state.itens,
  getCliente: state => state.cliente,
  getPedido: state => state.pedido
}

const actions = {}

const mutations = {
  guardarId: (state, id) => state.id = id,
  guardarEstado: (state, estado) => state.estado = estado,
  guardarHora_abertura: (state, hora_abertura) => state.hora_abertura = hora_abertura,
  guardarHora_fechamento: (state, hora_fechamento) => state.hora_fechamento = hora_fechamento,
  guardarMotivo_cancelamento: (state, motivo_cancelamento) => state.motivo_cancelamento = motivo_cancelamento,
  guardarNumero: (state, numero) => state.numero = numero,
  guardarPagamento: (state, pagamento) => state.pagamento = pagamento,
  guardarTotal: (state, total) => state.total = total,
  guardarDesconto: (state, desconto) => state.desconto = desconto,
  guardarValor_pago: (state, valor_pago) => state.valor_pago = valor_pago,
  guardarItens: (state, itens) => state.itens = itens,
  guardarCliente: (state, cliente) => state.cliente = cliente,
  guardarPedido: (state, pedido)=> state.pedido = pedido
}

export default {
  state,
  getters,
  actions,
  mutations
};