import { faCar, faPen, faPlus, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import carsData from '../../Data/carsData';
import CarForm from '../CarForm/CarForm';
import styles from './CarList.module.css';

export default function CarList() {
    const [carsList, setCarsList] = useState([...carsData]);
    const [index, setIndex] = useState(carsList.length + 1);
    const [showModalAddCar, setShowModalAddCar] = useState(false);
    const handleOpenModalAddCar = () => { setShowModalAddCar(true); };
    const handleCloseModalAddCar = () => { setShowModalAddCar(false); };
    const [successMessage, setSuccessMessage] = useState('');
    const [aCar, setACar] = useState({ id: null, nome: '', marca: '', cor: '', ano: 0 });
    const [isAdd, setIsAdd] = useState(true);


    function showMessage(message) {
        setSuccessMessage(message);
        setTimeout(() => {
            setSuccessMessage('');
        }, 3000);
    }

    function deleteCar(id) {
        if (window.confirm("Tem certeza que deseja excluir este carro?")) {
            const newCarsList = carsList.filter(car => car.id !== id);
            setCarsList(newCarsList);
            showMessage("Carro excluído com sucesso!");
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
                        <button title="Adicionar Carro"
                            type="button"
                            class={`btn btn-light ${styles.addButtonContainer}`}
                            onClick={() => {
                                handleOpenModalAddCar();
                                setIsAdd(true);
                                setACar({ id: null, nome: '', marca: '', cor: '', ano: 0 })
                            }}>
                            Adicionar Carro <FontAwesomeIcon icon={faPlus} /> <FontAwesomeIcon icon={faCar} />
                        </button>
                    </div>
                    <CarForm index={index}
                        setIndex={setIndex}
                        aCar={aCar}
                        setACar={setACar}
                        carsList={carsList}
                        setCarsList={setCarsList}
                        showModalAddCar={showModalAddCar}
                        onClose={handleCloseModalAddCar}
                        isAdd={isAdd}
                        showMessage={showMessage} />
                    <ul className="list-group">
                        {carsList.map((car) => (
                            <li key={car.id} className="list-group-item d-flex justify-content-between align-items-center">
                                {car.nome} | {car.marca}
                                <div>
                                    <button title="Editar carro"
                                        type="button"
                                        class="btn btn-sm btn-light"
                                        onClick={() => {
                                            setACar({
                                                id: car.id,
                                                nome: car.nome,
                                                marca: car.marca,
                                                cor: car.cor,
                                                ano: car.ano
                                            }); handleOpenModalAddCar(); setIsAdd(false)
                                        }}>
                                        <FontAwesomeIcon icon={faPen} />
                                    </button>
                                    <button title="Excluir carro"
                                        type="button"
                                        class="btn btn-sm btn-light ms-2"
                                        onClick={() => deleteCar(car.id)}>
                                        <FontAwesomeIcon icon={faTrashCan} />
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
