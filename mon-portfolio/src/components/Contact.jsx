import { useState } from 'react';
import api from "../services/api";

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false); // Ajout d'un état de chargement

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // On utilise l'instance 'api' (axios) au lieu de 'fetch'
      // axios gère automatiquement le JSON.stringify()
      const response = await api.post('/api/contact/', formData);

      if (response.status === 200 || response.status === 201) {
        alert("Message envoyé avec succès !");
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      console.error("Erreur détaillée:", error);
      alert("Impossible de contacter le serveur. Vérifiez votre connexion.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // ... (ton JSX reste identique)

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-3xl px-6 mx-auto">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900">Me Contacter</h2>
          <p className="text-gray-500">Une idée de projet ou une question ? N'hésitez pas à m'écrire.</p>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-6 border border-gray-100 shadow-sm bg-gray-50 rounded-3xl">
          <div>
            <label className="block mb-2 text-sm font-semibold text-gray-700">Nom complet</label>
            <input 
              type="text" 
              required
              value={formData.name}
              className="w-full px-4 py-3 transition-all border border-gray-200 outline-none rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              placeholder="Jean Dupont"
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-semibold text-gray-700">Email</label>
            <input 
              type="email" 
              required
              value={formData.email}
              className="w-full px-4 py-3 transition-all border border-gray-200 outline-none rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              placeholder="jean@exemple.com"
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-semibold text-gray-700">Message</label>
            <textarea 
              rows="4" 
              required
              value={formData.message}
              className="w-full px-4 py-3 transition-all border border-gray-200 outline-none rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              placeholder="Votre message..."
              onChange={(e) => setFormData({...formData, message: e.target.value})}
            ></textarea>
          </div>

          <button 
             type="submit" 
              disabled={isSubmitting} // Bloque le bouton si on est en train d'envoyer
              className={`w-full py-4 font-bold text-white transition transform rounded-xl shadow-lg shadow-blue-200 
                ${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 hover:-translate-y-1'}`}
>
                {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;