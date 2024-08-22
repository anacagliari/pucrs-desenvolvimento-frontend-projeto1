import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import styles from './CarForm.module.css';

export default function CarForm({ index, setIndex, aCar, setACar, carsList, setCarsList, showModalAddCar, onClose, isAdd, showMessage }) {
    const [error, setError] = useState('');

    if (!showModalAddCar) {
        return null;
    }

    function validateForm() {
        if (!aCar.nome || !aCar.marca || !aCar.cor || !aCar.ano) {
            setError("Todos os campos devem ser preenchidos.");
            return false;
        }
        if (aCar.nome.length < 2 || aCar.marca.length < 2 || aCar.cor.length < 2) {
            setError("Nome, Marca e Cor devem ter pelo menos 2 caracteres.");
            return false;
        }
        setError('');
        return true;
    }

    function addCar() {
        if (!validateForm()) return;

        const newCar = { id: index, nome: aCar.nome, marca: aCar.marca, cor: aCar.cor, ano: aCar.ano };
        setCarsList([...carsList, newCar]);
        showMessage("Carro adicionado com sucesso!");
        setACar('');
        setIndex(index + 1);
        onClose();
    }

    function updateCar() {
        if (!validateForm()) return;

        if (window.confirm("Tem certeza que deseja editar este carro?")) {
            const listUpdated = carsList.map(car => car.id === aCar.id ? aCar : car );
            setCarsList(listUpdated);
            showMessage("Carro editado com sucesso!");
            setACar('');
            onClose();
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
                                value={aCar.nome}
                                onChange={(e) => setACar({ ...aCar, nome: e.target.value })} />
                        </div>
                        <div className="col-md-3">
                            <label>Marca: </label>
                            <input type="text"
                                placeholder="Ex: Toyota"
                                className={`${styles.input}`}
                                value={aCar.marca}
                                onChange={(e) => setACar({ ...aCar, marca: e.target.value })} />
                        </div>
                        <div className="col-md-3">
                            <label>Cor: </label>
                            <input type="text"
                                placeholder="Ex: Preto"
                                className={`${styles.input}`}
                                value={aCar.cor}
                                onChange={(e) => setACar({ ...aCar, cor: e.target.value })} />
                        </div>
                        <div className="col-md-3">
                            <label>Ano: </label>
                            <input type="number"
                                placeholder="Ex: 1992"
                                className={`${styles.input}`}
                                value={aCar.ano}
                                onChange={(e) => setACar({ ...aCar, ano: parseInt(e.target.value) })} />
                        </div>
                        <div className={`d-flex justify-content-end ${styles.buttonRow}`}>
                            <button title={isAdd ? "Adicionar Carro" : "Editar Carro"}
                                onClick={isAdd ? addCar : updateCar}
                                type="button"
                                class="btn btn-sm btn-light">
                                <FontAwesomeIcon icon={faCheck} />
                            </button>
                            <button title="Cancelar"
                                onClick={() => onClose()}
                                type="button"
                                class="btn btn-sm btn-secondary ms-2">
                                <FontAwesomeIcon icon={faXmark} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
