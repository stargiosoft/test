import { createClient } from '@supabase/supabase-js';
import { projectId, publicAnonKey } from '../utils/supabase/info';

const supabaseUrl = `https://${projectId}.supabase.co`;
const supabaseKey = publicAnonKey;

export const supabase = createClient(supabaseUrl, supabaseKey);

export interface SajuRecord {
  id?: string;
  productId?: string;
  name: string;
  gender: 'female' | 'male';
  birthDate: string;
  birthTime: string;
  unknownTime: boolean;
  phoneNumber?: string;
}

export interface OrderRecord {
  user_id?: string;
  saju_record_id?: string;
  amount?: number;
  payment_method?: string;
  imp_uid?: string;
  merchant_uid?: string;
  status?: string;
  pg_provider?: string;
  kakao_id?: string;
  google_id?: string;
}

export async function saveSajuRecord(data: SajuRecord) {
  try {
    const response = await fetch(
      `https://${projectId}.supabase.co/functions/v1/make-server-ad0d9519/saju_records`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${publicAnonKey}`,
        },
        body: JSON.stringify(data),
      }
    );

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || 'Failed to save saju record');
    }

    // Return object with id to match component expectation
    return { 
      id: result.recordId, 
      ...result 
    };
  } catch (error) {
    console.error('Error in saveSajuRecord:', error);
    throw error;
  }
}

export async function saveOrder(data: OrderRecord) {
  try {
    const { data: orderData, error } = await supabase
      .from('orders')
      .insert([data])
      .select()
      .single();

    if (error) {
      throw error;
    }

    console.log('Order saved successfully:', orderData);
    return orderData;
  } catch (error) {
    console.error('Error in saveOrder:', error);
    throw error;
  }
}