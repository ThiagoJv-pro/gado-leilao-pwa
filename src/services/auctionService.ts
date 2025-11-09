import { apiClient } from './api';
import { Auction } from '@/types/api';

export const auctionService = {
  async getLiveAuctions(): Promise<Auction[]> {
    try {
      return await apiClient.get<Auction[]>('/auctions/live');
    } catch (error) {
      console.error('Error fetching live auctions:', error);
      // Mock data
      return [
        {
          id: '1',
          title: 'Leilão Nelore Premium',
          startTime: new Date().toISOString(),
          endTime: new Date(Date.now() + 3600000).toISOString(),
          status: 'live',
          totalCattle: 45,
          currentLot: 'Lote 12 - Macho Nelore 2 anos',
        },
      ];
    }
  },

  async getUpcomingAuctions(): Promise<Auction[]> {
    try {
      return await apiClient.get<Auction[]>('/auctions/upcoming');
    } catch (error) {
      console.error('Error fetching upcoming auctions:', error);
      return [];
    }
  },

  async getAuctionById(id: string): Promise<Auction> {
    try {
      return await apiClient.get<Auction>(`/auctions/${id}`);
    } catch (error) {
      console.error('Error fetching auction:', error);
      throw error;
    }
  },

  async joinAuction(id: string): Promise<{ success: boolean; streamUrl?: string }> {
    try {
      return await apiClient.post(`/auctions/${id}/join`, {});
    } catch (error) {
      console.error('Error joining auction:', error);
      throw error;
    }
  },
};
