import 'dotenv/config';
import { Principal } from '@dfinity/principal';

export interface Domain {
  name: string;
  principal: Principal;
  bitcoin_p2tr_address?: string;
  bitcoin_p2wpkh_hash?: string;
  ethereum_address?: string;
  expire_at: bigint;
  metadata: Record<string, string>;
}

const bitdnsSettings = {
  canisterUrl: process.env.CANISTER_URL ?? 'https://ljanu-naaaa-aaaao-a25sq-cai.raw.icp0.io'
};

export type BitdnsSettings = typeof bitdnsSettings;

export const setSettings = (settings: BitdnsSettings) => {
  bitdnsSettings.canisterUrl = settings.canisterUrl;
};

const request = async (params: {}) => {
  const BASE_HEADERS = {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  };

  try {
    const response = await fetch(bitdnsSettings.canisterUrl, {
      headers: BASE_HEADERS,
      body: JSON.stringify(params),
      method: 'POST'
    });

    return await response.json();
  } catch (_) {}

  return null;
};

export const available = async (
  name: string
): Promise<Record<string, boolean>> => {
  try {
    const data = await request({ get_available_suffixes: { name } });

    if (
      data.status === 'success' &&
      data.response !== null &&
      typeof data.response === 'object'
    ) {
      return data.response;
    }
  } catch (_) {}

  return {};
};

export const resolve = async (name: string): Promise<Domain | null> => {
  try {
    const data = await request({ resolve: { name } });

    if (data.status === 'success' && data.response.principal) {
      return {
        ...data.response,
        principal: Principal.fromText(data.response.principal)
      };
    }
  } catch (_) {}

  return null;
};
