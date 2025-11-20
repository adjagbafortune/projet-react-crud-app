
import React, { useState, useEffect } from "react"; 
import { useParams, useNavigate } from "react-router-dom"; 
import axios from "axios"; 
 
const ClientDetails = () => { 
  const { id } = useParams(); 
  const [client, setClient] = useState({}); 
  const navigate = useNavigate(); 
 
  useEffect(() => { 
    const fetchClient = async () => { 
      try { 
        const response = await axios.get(`http://localhost:3001/clients/${id}`); 
        setClient(response.data); 
      } catch (error) { 
        console.error("Erreur de chargement :", error); 
      } 
    }; 
 
    fetchClient(); 
  }, [id]); 
 
  const handleRetour = () => { 
    navigate("/clients"); 
  }; 
 
  return ( 
    <div className="container mt-5">
      <div className="card">
        <div className="card-header text-center">
          <h1>Détails du client</h1>
        </div>
        <div className="card-body">
          <p><strong>Nom du client:</strong> {client.nom}</p>
          <p><strong>Adresse:</strong> {client.adresse}</p>
          <p><strong>Téléphone:</strong> {client.tel}</p>
          <button onClick={handleRetour} className="btn btn-primary">Retour à la liste</button>
        </div>
      </div>
    </div>
  );
}; 
export default ClientDetails;