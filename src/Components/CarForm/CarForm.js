import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { createCar, updateCar, fetchCars } from '../../services/carService';

import styles from './CarForm.module.css';

export default function CarForm({ showModalAddCar, aCar, setACar, onClose, isAdd, showMessage, carsList, setData }) {
    const [error, setError] = useState('');

    if (!showModalAddCar) {
        return null;
    }

    function validateForm() {
        if (!aCar.name || !aCar.brand || !aCar.color || !aCar.year) {
            setError("Todos os campos devem ser preenchidos.");
            return false;
        }
        if (aCar.name.length < 2 || aCar.brand.length < 2 || aCar.color.length < 2) {
            setError("Nome, Marca e Cor devem ter pelo menos 2 caracteres.");
            return false;
        }
        setError('');
        return true;
    }

    async function addCar() {
        if (!validateForm()) return;
        try {
            await createCar(aCar)
            const data = await fetchCars();
            setData(data);
            showMessage("Carro adicionado com sucesso!");
            setACar('');
            onClose();
        } catch (error) {
            console.error('Erro ao adicionar carro:', error);
        }
    }

    async function updateACar() {
        if (!validateForm()) return;
        if (window.confirm("Tem certeza que deseja editar este carro?")) {
            try {
                await updateCar(aCar);
                const listUpdated = carsList.map(car => car.id === aCar.id ? aCar : car);
                setData(listUpdated);
                showMessage("Carro editado com sucesso!");
                setACar('');
                onClose();
            } catch (error) {
                console.error('Erro ao editar carro:', error);
            }
        }
    }

    return (
        <div className={styles.modalBackground}>
            <div className="card">
                <div className="card-body">
                    <h3 className={`card-title ${styles.title}`}>{isAdd ? "Adicionar" : "Editar"}</h3>
                    {error && <p className="text-danger">{error}</p>}
                    <div className={`row ${styles.inputRow}`}>
                        <div className="col-md-3">
                            <label>Modelo: </label>
                            <input type="text"
                                placeholder="Ex: Corolla"
                                className={`${styles.input}`}
                                value={aCar.name}
                                onChange={(e) => setACar({ ...aCar, name: e.target.value })} />
                        </div>
                        <div className="col-md-3">
                            <label>Marca: </label>
                            <input type="text"
                                placeholder="Ex: Toyota"
                                className={`${styles.input}`}
                                value={aCar.brand}
                                onChange={(e) => setACar({ ...aCar, brand: e.target.value })} />
                        </div>
                        <div className="col-md-3">
                            <label>Cor: </label>
                            <input type="text"
                                placeholder="Ex: Preto"
                                className={`${styles.input}`}
                                value={aCar.color}
                                onChange={(e) => setACar({ ...aCar, color: e.target.value })} />
                        </div>
                        <div className="col-md-3">
                            <label>Ano: </label>
                            <input type="number"
                                placeholder="Ex: 1992"
                                className={`${styles.input}`}
                                value={aCar.year}
                                onChange={(e) => setACar({ ...aCar, year: parseInt(e.target.value) })} />
                        </div>
                        <div className={`d-flex justify-content-end ${styles.buttonRow}`}>
                            <button title={isAdd ? "Adicionar Carro" : "Editar Carro"}
                                onClick={isAdd ? addCar : updateACar}
                                type="button"
                                className="btn btn-sm btn-light">
                                <FontAwesomeIcon icon={faCheck} />
                            </button>
                            <button title="Cancelar"
                                onClick={() => onClose()}
                                type="button"
                                className="btn btn-sm btn-secondary ms-2">
                                <FontAwesomeIcon icon={faXmark} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
