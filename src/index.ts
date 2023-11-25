import 'dotenv/config';
import { Principal } from '@dfinity/principal';

export interface Domain {
  principal: Principal;
  bitcoin_p2tr_address?: string;
  bitcoin_p2wpkh_hash?: string;
  ethereum_address?: string;
  expire_at: bigint;
  metadata: Record<string, string>;
}

const bitdnsSettings = {
  canisterUrl: process.env.CANISTER_URL
};

export const resolve = async (name: string): Promise<Domain | null> => {
  try {
    const response = await fetch(bitdnsSettings.canisterUrl, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ resolve: { name } }),
      method: 'POST'
    });

    const data = await response.json();


    if (data.status === 'success' && data.response.principal) {
      return {
        ...data.response,
        principal: Principal.fromText(data.response.principal)
      };
    }
  } catch (_) {
  }

  return null;
};
