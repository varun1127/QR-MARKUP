import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add auth token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const loginUser = async (email, password, role) => {
  const response = await api.post('/auth/login', { email, password, role });
  return response.data;
};

export const fetchAttendanceLogs = async (startDate, endDate) => {
  const response = await api.get('/attendance/logs', {
    params: {
      start: startDate.toISOString(),
      end: endDate.toISOString()
    }
  });
  return response.data;
};

export const generateQRCode = async () => {
  const response = await api.post('/qrcode/generate');
  return response.data;
};

export const checkAttendance = async (userId, date) => {
  const response = await api.get(`/attendance/check/${userId}`, {
    params: { date }
  });
  return response.data;
};

export const markAttendance = async (userId, qrData) => {
  const response = await api.post('/attendance/mark', {
    userId,
    qrData
  });
  return response.data;
};

export default api;