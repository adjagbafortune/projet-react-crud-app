import React, { useState } from "react"; 
import { useNavigate, Link } from "react-router-dom"; 
import axios from "axios"; 
 
const CreateClient = () => { 
  const [client, setClient] = useState({ nom: "", adresse: "", tel: "" }); 
  const navigate = useNavigate(); 
 
  // Fonction de création et envoi à l’API 
  const handleCreate = async () => { 
    await axios.post("http://localhost:3001/clients", client); //ajout client 
    navigate("/clients", { replace: true }); //après l’ajout retour à la liste 
  }; 
 
  return ( 
    <div className="container mt-5">
      <div className="card">
        <div className="card-header text-center">
          <h1>Créer un nouveau client</h1>
        </div>
        <div className="card-body">
          <form>
            <div className="mb-3">
              <label htmlFor="nom" className="form-label">Nom du client : </label>
              <input
                type="text"
                id="nom"
                className="form-control"
                value={client.nom}
                onChange={(e) => setClient({ ...client, nom: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="adresse" className="form-label">Adresse : </label>
              <input
                type="text"
                id="adresse"
                className="form-control"
                value={client.adresse}
                onChange={(e) => setClient({ ...client, adresse: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="tel" className="form-label">Téléphone : </label>
              <input
                type="text"
                id="tel"
                className="form-control"
                value={client.tel}
                onChange={(e) => setClient({ ...client, tel: e.target.value })}
              />
            </div>
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
              <button type="button" onClick={handleCreate} className="btn btn-success me-md-2">
                Créer
              </button>
              <Link to={`/clients`} className="btn btn-secondary">
                Annuler
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}; 
 
export default CreateClient;