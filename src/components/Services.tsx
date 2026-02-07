const services = [
  {
    title: "Soutien émotionnel",
    text: "Écoute active, bienveillance et présence pour traverser la période post-partum.",
  },
  {
    title: "Relais parental",
    text: "Du temps pour souffler, pendant que bébé est accompagné en toute sécurité.",
  },
  {
    title: "Accompagnement post-partum",
    text: "Conseils pratiques, réassurance et aide au quotidien à domicile.",
  },
  {
    title: "Coffrets personnalisés",
    text: "Des attentions sur-mesure pour soutenir chaque maman selon ses besoins.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-violet py-24 px-6">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-3xl font-bold text-center text-green">
          Un accompagnement pensé pour vous
        </h2>

        <p className="text-center text-gray-700 max-w-2xl mx-auto mt-4">
          MamSitter propose un soutien concret, humain et flexible, dès la sortie
          de maternité.
        </p>

        <div className="mt-14 grid md:grid-cols-2 gap-10">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow">
              <h3 className="text-xl font-semibold text-green">
                {service.title}
              </h3>
              <p className="text-gray-700 mt-3 leading-relaxed">{service.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
