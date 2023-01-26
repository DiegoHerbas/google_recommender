import {
    BillingData,
    Infotransaction,
    ItemsToPay,
    PayerInfo,
  } from '../../general/geneneralDTO';
  
  export interface req_getTokenDTO {
    idUsuario: string;
    password: string;
    sistema: string;
  }
  
  // ===================== CONTRACT =====================
  
  export interface Rep_GetContractsDTO {
    searchType: string;
    searchField: string;
  }
  
  export interface RespContractCommerce {
    mensaje: string;
    polizas: Poliza[];
    pagina: Pagina;
  }
  
  export interface Pagina {
    cantidadPorPagina: number;
    nroPagina: number;
    cantidadTotal: number;
  }
  
  export interface Poliza {
    nroPoliza: string;
    ramo: string;
    producto: string;
    idMoneda: number;
    fechaEmision: string;
    fechaInicioVigencia: string;
    fechaTerminoVigencia: string;
    capitalAsegurado: number;
    estado: string;
    mensaje: string;
    glosa: string;
    contratante: string;
    nroDocumento: string;
    tipoCambio: number;
    esFacturable: boolean;
    sistema: string;
    ciudad: number;
    compania: string;
    plan: null;
  }
  
  // ===================== FEE =====================
  export interface Rep_GetFeeDTO {
    extraData: string;
    contractCode: string;
  }
  
  // Generated by https://quicktype.io
  
  export interface RespFeeCommerce {
    mensaje: string;
    cuotas: Cuota[];
    pagina: Pagina;
  }
  
  export interface Cuota {
    idCuota: number;
    fechaPrevistaPago: string;
    montoPrevisto: number;
    montoInteres: number;
    montoTotalAPagar: number;
    nroCuota: number;
    glosa: string;
    tipoCuota: string;
    estado: string;
    mensaje: string;
    idMoneda: number;
  }
  
  export interface RespInvoiceDataCommerce {
    clientes: ClienteBilling[];
    pagina: Pagina;
  }
  
  export interface ClienteBilling {
    nombreCliente: string;
    nroDocumento: string;
    tipo: string;
  }
  
  // ===================== REGISTER PAYMENT =====================
  
  export interface RegisterPaymentContract {
    usuarioAplicacion: String;
    payer: PayerInfo;
    billingData: BillingData;
    items: ItemsToPay[];
    infotransaction: Infotransaction;
    total_amount: number;
    extraData?: string;
  }
  
  export interface Resp_RegiterPaymentNV {
    idTransaccion: number; //Identificador Unico de la transaccion del Middleware-Cobranza
    idSolicitud?: string; //Identificador de la socilitud de la transacción del Canal de Cobranza
    fechaRegistro?: string;
    fechaProximoPago?: string;
    idDocumento: number; //  Identificador del Nro de Factura o Recibo Generado en la transacción
    tipoDocumento: number; // Tipo de Documento de Respaldo Generado: 1=Factura/2=Recibo
    idTransaccionCore: number; //  Identificador de la transaccion del sistema Core
  }
  
  export interface CancelPaymentUTB {
    transactionNumber: string;
    reasonToCancel: string;
    user: string;
    transactionNumberCommerce: string;
  }
  
  export interface RespCancelPaymentUTB {
    Status: string;
    Message: string;
  }
  
  export interface RespCancelPayment {
    // idTransactionClient: string;
    msgResponse: string;
    extraData?: string;
  }
  