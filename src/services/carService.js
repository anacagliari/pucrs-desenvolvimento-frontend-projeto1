import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/'
});

export const fetchCars = async () => {
  const response = await api.get('/cars');
  return response.data;
};

export const createCar = async (carData) => {
  const response = await api.post('/cars', carData);
  return response.data;
};

export const updateCar = async (updatedCarData) => {
  const response = await api.put('/cars', updatedCarData);
  return response.data;
};

export const deleteCar = async (carId) => {
  const response = await api.delete(`/cars/${carId}`);
  return response.data; 
};
