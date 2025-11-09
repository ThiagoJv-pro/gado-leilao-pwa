// API Response Types
export interface Cattle {
  id: number | string;
  name: string;
  breed: string;
  age: string;
  weight: string;
  currentBid: string;
  timeLeft: string;
  image: string;
  status: 'active' | 'upcoming' | 'sold';
  description?: string;
  location?: string;
  seller?: string;
  bidHistory?: BidHistoryItem[];
}

export interface BidHistoryItem {
  id: string;
  bidder: string;
  amount: string;
  time: string;
}

export interface Auction {
  id: string;
  title: string;
  startTime: string;
  endTime: string;
  status: 'live' | 'upcoming' | 'ended';
  totalCattle: number;
  currentLot?: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  cpf: string;
  avatar?: string;
  verified: boolean;
}

export interface Payment {
  id: string;
  description: string;
  amount: string;
  status: 'pending' | 'completed' | 'failed';
  dueDate: string;
  paymentDate?: string;
}

export interface PaymentCard {
  id: string;
  last4: string;
  brand: string;
  expiryMonth: string;
  expiryYear: string;
  isDefault: boolean;
}

export interface ApiResponse<T> {
  data: T;
  message?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
}
