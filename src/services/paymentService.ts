import { apiClient } from './api';
import { Payment, PaymentCard } from '@/types/api';

export const paymentService = {
  async getPendingPayments(): Promise<Payment[]> {
    try {
      return await apiClient.get<Payment[]>('/payments/pending');
    } catch (error) {
      console.error('Error fetching pending payments:', error);
      // Mock data
      return [
        {
          id: '1',
          description: 'Lote 45 - Nelore Premium',
          amount: 'R$ 15.000,00',
          status: 'pending',
          dueDate: '2024-03-15',
        },
      ];
    }
  },

  async getPaymentHistory(): Promise<Payment[]> {
    try {
      return await apiClient.get<Payment[]>('/payments/history');
    } catch (error) {
      console.error('Error fetching payment history:', error);
      return [];
    }
  },

  async getSavedCards(): Promise<PaymentCard[]> {
    try {
      return await apiClient.get<PaymentCard[]>('/payments/cards');
    } catch (error) {
      console.error('Error fetching saved cards:', error);
      return [];
    }
  },

  async addCard(cardData: {
    number: string;
    name: string;
    expiryMonth: string;
    expiryYear: string;
    cvv: string;
  }): Promise<PaymentCard> {
    try {
      return await apiClient.post<PaymentCard>('/payments/cards', cardData);
    } catch (error) {
      console.error('Error adding card:', error);
      throw error;
    }
  },

  async removeCard(cardId: string): Promise<{ success: boolean }> {
    try {
      return await apiClient.delete(`/payments/cards/${cardId}`);
    } catch (error) {
      console.error('Error removing card:', error);
      throw error;
    }
  },

  async processPayment(paymentId: string, cardId: string): Promise<{ success: boolean; message: string }> {
    try {
      return await apiClient.post(`/payments/${paymentId}/process`, { cardId });
    } catch (error) {
      console.error('Error processing payment:', error);
      throw error;
    }
  },

  async generatePix(paymentId: string): Promise<{ qrCode: string; code: string }> {
    try {
      return await apiClient.post(`/payments/${paymentId}/pix`, {});
    } catch (error) {
      console.error('Error generating PIX:', error);
      throw error;
    }
  },
};
