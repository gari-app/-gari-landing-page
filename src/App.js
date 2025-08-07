import React, { useState } from "react";

export default function GariLandingPage() {
  const [formData, setFormData] = useState({ name: "", email: "", userType: "driver" });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder: redirect to Google Form or Notion
    window.open("https://forms.gle/tu_formulario", "_blank");
  };

  return (
    <main className="bg-white text-gray-900 font-sans">
      <section className="bg-blue-600 text-white py-12 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">GARI: Encontrá o compartí estacionamiento en tu barrio</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Una app colaborativa para encontrar espacios libres para estacionar o generar ingresos compartiendo el tuyo.
        </p>
      </section>

      <section className="py-10 px-6 max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl font-semibold mb-4">¿Tenés un espacio libre?</h2>
          <p className="mb-4">Ganá dinero alquilando tu cochera o entrada cuando no la uses. Sin compromiso, vos decidís el precio y los horarios.</p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">¿Buscás dónde estacionar?</h2>
          <p>Encontrá lugares seguros y cercanos desde tu celular. Pagá solo por el tiempo que necesitás.</p>
        </div>

        <form className="bg-gray-100 p-6 rounded-xl shadow-md" onSubmit={handleSubmit}>
          <h3 className="text-xl font-bold mb-4">¡Sumate a la espera!</h3>
          <label className="block mb-2 text-sm font-medium">Nombre</label>
          <input type="text" required className="w-full mb-4 p-2 rounded border" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} />

          <label className="block mb-2 text-sm font-medium">Email</label>
          <input type="email" required className="w-full mb-4 p-2 rounded border" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} />

          <label className="block mb-2 text-sm font-medium">Tipo de usuario</label>
          <select className="w-full mb-6 p-2 rounded border" value={formData.userType} onChange={e => setFormData({ ...formData, userType: e.target.value })}>
            <option value="driver">Soy conductor</option>
            <option value="host">Quiero ofrecer un lugar</option>
            <option value="both">Ambos</option>
          </select>

          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded font-bold hover:bg-blue-700 transition">Pre-registrarme</button>
        </form>
      </section>

      <section className="py-10 px-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6">¿Cómo funciona?</h2>
        <ol className="list-decimal space-y-3 pl-5">
          <li>Descargá la app y registrate.</li>
          <li>Si sos anfitrión, cargá tu espacio, fotos, dirección y precio por minuto.</li>
          <li>Si sos conductor, buscá espacios disponibles y reservá el que más te convenga.</li>
          <li>Pagás solo por el tiempo que usás. Todo desde el celular.</li>
        </ol>
      </section>

      <section className="bg-gray-200 py-10 px-6">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-bold mb-3">Beneficios para anfitriones</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Generás ingresos sin esfuerzo.</li>
              <li>Vos elegís cuándo y a qué precio.</li>
              <li>Sin contratos ni permanencia.</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-3">Beneficios para conductores</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Encontrá lugar en zonas críticas como estaciones, clínicas y escuelas.</li>
              <li>Reservá fácil desde tu celular.</li>
              <li>Pagá solo por lo que usás.</li>
            </ul>
          </div>
        </div>
      </section>

      <footer className="text-center py-6 text-sm text-gray-500">
        © {new Date().getFullYear()} GARI - Estacionamiento colaborativo
      </footer>
    </main>
  );
}
