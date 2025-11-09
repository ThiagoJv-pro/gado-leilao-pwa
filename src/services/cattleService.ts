import { apiClient } from './api';
import { Cattle, PaginatedResponse } from '@/types/api';
import { mockCattle } from '@/data/mockData';

export const cattleService = {
  // Usar dados mock por enquanto, fácil de trocar para API real
  async getAll(): Promise<Cattle[]> {
    try {
      // return await apiClient.get<Cattle[]>('/cattle');
      return Promise.resolve(mockCattle);
    } catch (error) {
      console.error('Error fetching cattle:', error);
      return mockCattle; // Fallback para mock
    }
  },

  async getById(id: string | number): Promise<Cattle | undefined> {
    try {
      // return await apiClient.get<Cattle>(`/cattle/${id}`);
      const numId = typeof id === 'string' ? parseInt(id) : id;
      return Promise.resolve(mockCattle.find(c => c.id === numId));
    } catch (error) {
      console.error('Error fetching cattle by id:', error);
      const numId = typeof id === 'string' ? parseInt(id) : id;
      return mockCattle.find(c => c.id === numId);
    }
  },

  async search(params: {
    search?: string;
    breed?: string;
    priceRange?: string;
    status?: string;
  }): Promise<Cattle[]> {
    try {
      // const queryParams = new URLSearchParams(params as any);
      // return await apiClient.get<Cattle[]>(`/cattle/search?${queryParams}`);
      
      // Mock implementation
      let filtered = [...mockCattle];
      
      if (params.search) {
        filtered = filtered.filter(c => 
          c.name.toLowerCase().includes(params.search!.toLowerCase()) ||
          c.breed.toLowerCase().includes(params.search!.toLowerCase())
        );
      }
      
      if (params.breed && params.breed !== 'all') {
        filtered = filtered.filter(c => 
          c.breed.toLowerCase().includes(params.breed!.toLowerCase())
        );
      }
      
      if (params.status) {
        filtered = filtered.filter(c => c.status === params.status);
      }
      
      return Promise.resolve(filtered);
    } catch (error) {
      console.error('Error searching cattle:', error);
      return mockCattle;
    }
  },

  async placeBid(cattleId: string, amount: number): Promise<{ success: boolean; message: string }> {
    try {
      return await apiClient.post(`/cattle/${cattleId}/bid`, { amount });
    } catch (error) {
      console.error('Error placing bid:', error);
      throw error;
    }
  },

  async toggleFavorite(cattleId: string): Promise<{ success: boolean }> {
    try {
      return await apiClient.post(`/cattle/${cattleId}/favorite`, {});
    } catch (error) {
      console.error('Error toggling favorite:', error);
      throw error;
    }
  },
};
