import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://127.0.0.1:8000/api/contact/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Message envoyé avec succès !");
        setFormData({ name: '', email: '', message: '' }); // Reset
      } else {
        alert("Erreur lors de l'envoi.");
      }
    } catch (error) {
      console.error("Erreur réseau :", error);
    }
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Me Contacter</h2>
          <p className="text-gray-500">Une idée de projet ou une question ? N'hésitez pas à m'écrire.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 bg-gray-50 p-8 rounded-3xl border border-gray-100 shadow-sm">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Nom complet</label>
            <input 
              type="text" 
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
              placeholder="Jean Dupont"
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
            <input 
              type="email" 
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
              placeholder="jean@exemple.com"
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
            <textarea 
              rows="4" 
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
              placeholder="Votre message..."
              onChange={(e) => setFormData({...formData, message: e.target.value})}
            ></textarea>
          </div>

          <button 
            type="submit" 
            className="w-full py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition transform hover:-translate-y-1 shadow-lg shadow-blue-200"
          >
            Envoyer le message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;