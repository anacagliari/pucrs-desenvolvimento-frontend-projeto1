import React from 'react';
import useFetch from '../../hooks/useFetch';
import { fetchCars, deleteCar } from '../../services/carService';
import CarForm from '../../components/CarForm/CarForm';
import { faCar, faPen, faPlus, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './CarList.module.css';
import { useState } from 'react';

export default function CarList() {
    const { data: carsList, isLoading, error, setData } = useFetch(fetchCars);
    
    const [showModalAddCar, setShowModalAddCar] = useState(false);
    const [aCar, setCarToUpdate] = useState('');
    const [isAdd, setIsAdd] = useState(true);

    const handleOpenModalAddCar = () => { setShowModalAddCar(true); };
    const handleCloseModalAddCar = () => { setShowModalAddCar(false); };
    
    const [successMessage, setSuccessMessage] = useState('');


    if (isLoading) return <p>Carregando...</p>;
    if (error) return <p>Ocorreu um erro: {error.message}</p>;

    function showMessage(message) {
        setSuccessMessage(message);
        setTimeout(() => {
            setSuccessMessage('');
        }, 3000);
    }

    async function handleDeleteCar(carId) {
        if (window.confirm("Tem certeza que deseja excluir este carro?")) {
            try {
                await deleteCar(carId);
                const updatedCars = carsList.filter((car) => car.id !== carId);
                setData(updatedCars);
                showMessage("Carro excluído com sucesso!");
            } catch (error) {
                console.error("Erro ao excluir carro:", error);
            }
        }
    }

    return (
        <div className={styles.backgroundBox}>
            {successMessage && (
                <div className="alert alert-success">
                    {successMessage}
                </div>
            )}
            <div className="card">
                <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center">
                        <h2 className={`card-title ${styles.cardTitle}`}>Lista de Carros</h2>
                        <button title="Adicionar Carro" type="button" className={`btn btn-light ${styles.addButtonContainer}`}
                            onClick={() => {
                                handleOpenModalAddCar();
                                setIsAdd(true);
                                setCarToUpdate('');
                            }}>
                            Adicionar Carro <FontAwesomeIcon icon={faPlus} /> <FontAwesomeIcon icon={faCar} />
                        </button>
                    </div>
                    <ul className="list-group">
                        {carsList && carsList.map(car => (
                            <li key={car.id} className="list-group-item d-flex justify-content-between align-items-center">
                                {car.name} | {car.brand}
                                <div>
                                    <button title="Editar carro" type="button" className="btn btn-sm btn-light" onClick={() =>  {handleOpenModalAddCar(); setIsAdd(false); setCarToUpdate(car);}}> 
                                        <FontAwesomeIcon icon={faPen} />
                                    </button>
                                    <button title="Excluir carro" type="button" className="btn btn-sm btn-light ms-2" onClick={() => handleDeleteCar(car.id)}>
                                        <FontAwesomeIcon icon={faTrashCan} />
                                    </button>
                                </div>
                            </li>
                        ))}

                        <CarForm 
                            showModalAddCar={showModalAddCar}
                            aCar={aCar}
                            setACar={setCarToUpdate}
                            onClose={handleCloseModalAddCar}
                            isAdd={isAdd}
                            showMessage={showMessage}
                            carsList={carsList}
                            setData={setData} />
                    </ul>
                </div>
            </div>
        </div>
    );
}
