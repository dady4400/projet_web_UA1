export default function Home() {
  const services = [
    { icon: '🌴', title: 'Destinations Exotiques', description: 'Découvrez des plages paradisiaques et des îles tropicales' },
    { icon: '🏔️', title: 'Aventures Extrêmes', description: 'Escalade, randonnées et sports extrêmes' },
    { icon: '🏛️', title: 'Circuits Culturels', description: 'Explorez l'histoire et la culture des civilisations' },
  ];

  const destinations = [
    { name: 'Paris', flag: '🇫🇷', price: '899€' },
    { name: 'Tokyo', flag: '🇯🇵', price: '1299€' },
    { name: 'Rome', flag: '🇮🇹', price: '699€' },
    { name: 'Bangkok', flag: '🇹🇭', price: '999€' },
    { name: 'Athènes', flag: '🇬🇷', price: '799€' },
    { name: 'Barcelone', flag: '🇪🇸', price: '599€' },
    { name: 'Dubaï', flag: '🇦🇪', price: '1099€' },
    { name: 'New York', flag: '🇺🇸', price: '1199€' },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white rounded-2xl p-12 mb-8 shadow-xl">
        <h1 className="text-5xl font-bold mb-4">Bienvenue chez TravelDream ✈️</h1>
        <p className="text-xl mb-6">Transformez vos rêves de voyage en réalité</p>
        <button className="bg-accent hover:bg-yellow-500 text-white font-bold py-3 px-8 rounded-lg transition-colors shadow-lg">
          Découvrir nos offres
        </button>
      </section>

      {/* About Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Qui sommes-nous ?</h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          TravelDream est votre agence de voyage de confiance depuis plus de 15 ans. 
          Nous vous accompagnons dans la réalisation de vos projets de voyage, 
          qu'il s'agisse de vacances en famille, de voyages d'affaires ou d'aventures exotiques.
        </p>
      </section>

      {/* Services */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Nos Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-primary">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Destinations */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Destinations Populaires</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {destinations.map((dest, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow hover:scale-105 transition-transform cursor-pointer">
              <div className="text-4xl mb-2 text-center">{dest.flag}</div>
              <h4 className="font-bold text-center text-gray-800">{dest.name}</h4>
              <p className="text-primary text-center font-semibold">{dest.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-100 rounded-2xl p-8 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Prêt à partir ?</h2>
        <p className="text-lg text-gray-600 mb-6">Contactez-nous dès aujourd'hui pour planifier votre prochain voyage !</p>
        <button className="bg-primary hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg transition-colors shadow-lg">
          Nous contacter
        </button>
      </section>
    </div>
  );
}