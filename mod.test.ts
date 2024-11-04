import { getTotp, base32ToUint8Array } from './mod.ts'

const token = base32ToUint8Array("ABCDEFGHIJKLMNOPQRSTUVWXYZ234567ABCDEFGHIJKLMNOPQRSTUVWXYZ234567");
const totp = await getTotp(token);
console.log(totp)
