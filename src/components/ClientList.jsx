
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ClientList = () => {
    const [clients, setClients] = useState([]);
    const fetchData = async () => {
        try {
            const response = await axios.get("http://localhost:3001/clients");
            setClients(response.data); //chargement du résultat de la requête
        } catch (error) {
            console.error("Erreur de chargement :", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []); //lancer la fonction fetchData une seule fois au premier render

    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:3001/clients/${id}`);
        fetchData();
    }; //axios.delete pour supprimer le client identifié par id

    return (
        <div className="container mt-4">
            <h1 className="text-center mb-4">Liste des clients</h1>
            <div className="text-center mb-3">
                <Link to="/clients/create" className="btn btn-success">
                    Ajouter
                </Link>
            </div>
            <table className="table table-bordered table-hover text-center">
                <thead className="table-dark">
                    <tr>
                        <th>Nom</th>
                        <th>Adresse</th>
                        <th>Tel</th>
                        <th>Opérations</th>
                    </tr>
                </thead>
                <tbody>
                    {clients.map((client) => (
                        <tr key={client.id}>
                            <td>
                                <Link to={`/clients/${client.id}`}>{client.nom}</Link>
                            </td>
                            <td>{client.adresse}</td>
                            <td>{client.tel}</td>
                            <td>
                                {/*colonne opérations (modifier, supprimer)*/}
                                <Link to={`/clients/${client.id}/update`} className="btn btn-warning me-2">
                                    Modifier
                                </Link>
                                <button onClick={() => handleDelete(client.id)} className="btn btn-danger">
                                    Supprimer
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ClientList;