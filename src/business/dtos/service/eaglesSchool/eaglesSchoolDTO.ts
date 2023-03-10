import { BillingData, PayerInfo } from '../../general/geneneralDTO';

// =============== REQUEST ===============
export interface req_getTokenDTO {
  CodigoUsuario: string;
  Clave: string;
}

export interface req_getContract {
  yearCode: number;
  clientCode: number;
}

export interface req_getContractFee {
  yearCode: number;
  clientCode: number;
  contractCode: number;
}

export interface req_getFeeDetail {
  yearCode: number;
  contractCode: number;
  amount: number;
}

export interface req_PaymentCommerce {
  CodGestion: number;
  NroCxC: number;
  CodAlumno: number;
  Origenpago: number;
  CodOrigenPago: number;
  Tipodepago: number;
  Moneda: number;
  Importe: number;
  TipCam: number;
  NroFactura: string;
  EstadoPago: number;
  Observaciones: string;
  FechaPag: string;
  FecReg: string;
  UsuReg: string;
}

export interface req_payment_detail {
  CodGestion: number;
  NroCxC: number;
  NroCuota: number;
  Importe: number;
  TipCam: number;
  ObsPag: string;
}

// Generated by https://quicktype.io

export interface ReqPaymentClient {
  yearCode: number;
  contractCode: string;
  clientCode: string;
  transactionNumber: string;
  paymentChannel: number;
  totalAmount: string;
  exchangeRate: number;
  billNumber: number;
  contractName: string;
  paymentDetail: PaymentDetailCommerce[];
  payer: PayerInfo;
  billingData: BillingData;
}

export interface PaymentDetailCommerce {
  feeNumber: number;
  amount: number;
  feeDescription: string;
}

// =============== RESPONSE ===============

export interface RespClient {
  Codigo: number;
  Nombre: string;
  ApPaterno: string;
  ApMaterno: string;
  Cuentas: Cuenta[];
}

export interface Cuenta {
  CodGestion: number;
  NroCuenta: number;
  ImporteBol: number;
  CobradoBol: number;
  SaldoPendBol: number;
  Estado?: number;
  Observaciones: string;
  CxcDetalle?: Cuenta[];
  NroCuota?: number;
  FechaVenc?: string;
}

export interface FeeDetailsClient {
  yearCode: number;
  contractCode: number;
  feeNumber: number;
  description: string;
  expirationDate: string;
  amount: number;
  payed: number;
  pending_to_pay: number;
}

export interface FeeDetailsCommerce {
  CodGestion: number;
  NroCuenta: number;
  NroCuota: number;
  Tipcambio: number;
  FechaVenc: string;
  ImporteTarifaDol: number;
  DescuentoDol: number;
  ImporteDol: number;
  CobradoDol: number;
  CargoDol: number;
  SaldoPendDol: number;
  ImporteTarifaBol: number;
  DescuentoBol: number;
  ImporteBol: number;
  CobradoBol: number;
  CargoBol: number;
  SaldoPendBol: number;
  Observaciones: string;
}
// Generated by https://quicktype.io

export interface RegisterPaymentCommerce {
  Data: {
    NroPago: number;
  };
}

// Generated by https://quicktype.io

export interface CancelPaymentEagle {
  paymentId: string;
  controlCode: string;
}
