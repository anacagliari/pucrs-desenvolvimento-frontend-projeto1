import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';

import CarForm from '../components/CarForm/CarForm';
import { createCar, updateCar, fetchCars } from '../services/carService';

jest.mock('../services/carService', () => ({
    createCar: jest.fn(),
    updateCar: jest.fn(),
    fetchCars: jest.fn(),
}));

describe('Teste CarForm', () => {
    const mockSetACar = jest.fn();
    const mockOnClose = jest.fn();
    const mockShowMessage = jest.fn();
    const mockSetData = jest.fn();
    const aCar = { name: '', brand: '', color: '', year: '' };
    const carsList = [];

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('Verifica se a Label "Adicionar" está aprecendo de forma correta', () => {
        render(<CarForm showModalAddCar={true} aCar={aCar} setACar={mockSetACar} onClose={mockOnClose} isAdd={true} showMessage={mockShowMessage} carsList={carsList} setData={mockSetData} />);
        expect(screen.getByText(/Adicionar/i)).toBeInTheDocument();
    });

    test('Verifica se a Label "Adicionar" não está aprecendo de forma correta', () => {
        render(<CarForm showModalAddCar={true} aCar={aCar} setACar={mockSetACar} onClose={mockOnClose} isAdd={false} showMessage={mockShowMessage} carsList={carsList} setData={mockSetData} />);
        expect(screen.queryByText(/Adicionar/i)).toBeNull();
    });

    test('Verifica validação de todos os campos devem ser preenchidos', async () => {
        render(<CarForm showModalAddCar={true} aCar={{ name: '', brand: '', color: '', year: '' }} setACar={mockSetACar} onClose={mockOnClose} isAdd={true} showMessage={mockShowMessage} carsList={carsList} setData={mockSetData} /> );
        fireEvent.click(screen.getByTitle(/Adicionar Carro/i));
        expect(await screen.findByText(/Todos os campos devem ser preenchidos./i)).toBeInTheDocument();
    });

    test('Verifica se está incuíndo com sucesso', async () => {
        const mockCreateCar = createCar.mockResolvedValueOnce({});
        const mockFetchCars = fetchCars.mockResolvedValueOnce([]);
        render(<CarForm showModalAddCar={true} aCar={{ name: 'Corolla', brand: 'Toyota', color: 'Preto', year: 1992 }} setACar={mockSetACar} onClose={mockOnClose} isAdd={true} showMessage={mockShowMessage} carsList={carsList} setData={mockSetData} /> );
        fireEvent.click(screen.getByTitle(/Adicionar Carro/i));
        await waitFor(() => {
            expect(mockCreateCar).toHaveBeenCalledWith({ name: 'Corolla', brand: 'Toyota', color: 'Preto', year: 1992 });
            expect(mockFetchCars).toHaveBeenCalled();
            expect(mockShowMessage).toHaveBeenCalledWith("Carro adicionado com sucesso!");
        });
    });

    test('Verifica se está alterando carro com sucesso', async () => {
        const mockUpdateCar = updateCar.mockResolvedValueOnce({});
        render( <CarForm showModalAddCar={true} aCar={{ id: 1, name: 'Corolla', brand: 'Toyota', color: 'Preto', year: 1992 }} setACar={mockSetACar} onClose={mockOnClose} isAdd={false} showMessage={mockShowMessage} carsList={[{ id: 1, name: 'Corolla', brand: 'Toyota', color: 'Preto', year: 1992 }]} setData={mockSetData} /> );
        window.confirm = jest.fn().mockReturnValue(true);
        fireEvent.click(screen.getByTitle(/Editar Carro/i));
        await waitFor(() => {
            expect(mockUpdateCar).toHaveBeenCalledWith({ id: 1, name: 'Corolla', brand: 'Toyota', color: 'Preto', year: 1992 });
            expect(mockShowMessage).toHaveBeenCalledWith("Carro editado com sucesso!");
        });
    });
});
