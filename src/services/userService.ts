import { apiClient } from './api';
import { User } from '@/types/api';

export const userService = {
  async getProfile(): Promise<User> {
    try {
      return await apiClient.get<User>('/user/profile');
    } catch (error) {
      console.error('Error fetching user profile:', error);
      // Mock data
      return {
        id: '1',
        name: 'João Silva',
        email: 'joao.silva@email.com',
        phone: '(11) 98765-4321',
        cpf: '123.456.789-00',
        verified: true,
      };
    }
  },

  async updateProfile(data: Partial<User>): Promise<User> {
    try {
      return await apiClient.put<User>('/user/profile', data);
    } catch (error) {
      console.error('Error updating profile:', error);
      throw error;
    }
  },

  async updatePassword(currentPassword: string, newPassword: string): Promise<{ success: boolean }> {
    try {
      return await apiClient.post('/user/password', { currentPassword, newPassword });
    } catch (error) {
      console.error('Error updating password:', error);
      throw error;
    }
  },

  async updateNotificationSettings(settings: {
    emailNotifications: boolean;
    smsNotifications: boolean;
    pushNotifications: boolean;
  }): Promise<{ success: boolean }> {
    try {
      return await apiClient.put('/user/notifications', settings);
    } catch (error) {
      console.error('Error updating notification settings:', error);
      throw error;
    }
  },
};
