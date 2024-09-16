import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import CarList from '../pages/CarList/CarList';
import { deleteCar } from '../services/carService';
import useFetch from '../hooks/useFetch';

jest.mock('../services/carService', () => ({
    fetchCars: jest.fn(),
    deleteCar: jest.fn(),
}));

jest.mock('../hooks/useFetch');

describe('Teste CarList', () => {
    const carsList = [
        { id: 1, name: 'Corolla', brand: 'Toyota' },
        { id: 2, name: 'Civic', brand: 'Honda' }
    ];

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('Verifica se está renderizando corretamente enquanto carrega', () => {
        useFetch.mockReturnValue({ data: [], isLoading: true, error: null, setData: jest.fn() });

        render(<CarList />);
        expect(screen.getByText(/Carregando.../i)).toBeInTheDocument();
    });

    test('Verifica se está renderizando mensagem de erro se ocorrer um erro', () => {
        useFetch.mockReturnValue({ data: [], isLoading: false, error: { message: 'Erro de carregamento' }, setData: jest.fn() });

        render(<CarList />);
        expect(screen.getByText(/Ocorreu um erro: Erro de carregamento/i)).toBeInTheDocument();
    });

    test('Verifica se está renderizando a lista de carros quando os dados são carregados', () => {
        useFetch.mockReturnValue({ data: carsList, isLoading: false, error: null, setData: jest.fn() });

        render(<CarList />);
        expect(screen.getByText(/Lista de Carros/i)).toBeInTheDocument();
        expect(screen.getByText(/Corolla/i)).toBeInTheDocument();
        expect(screen.getByText(/Civic/i)).toBeInTheDocument();
    });

    test('Verifica se está excluíndo e mostrando a mensagem de sucesso para excluir um carro', async () => {
        const mockDeleteCar = deleteCar.mockResolvedValueOnce({});
        const mockSetData = jest.fn();
        useFetch.mockReturnValue({ data: carsList, isLoading: false, error: null, setData: mockSetData });

        render(<CarList />);
        
        window.confirm = jest.fn().mockReturnValue(true);
        fireEvent.click(screen.getAllByTitle(/Excluir carro/i)[0]);

        await waitFor(() => {
            expect(mockDeleteCar).toHaveBeenCalledWith(1);
            expect(mockSetData).toHaveBeenCalledWith([
                { id: 2, name: 'Civic', brand: 'Honda' }
            ]);
            expect(screen.getByText(/Carro excluído com sucesso!/i)).toBeInTheDocument();
        });
    });

});
