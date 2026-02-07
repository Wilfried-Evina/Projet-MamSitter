import { Users, Award, Clock, Heart } from "lucide-react";

const benefits = [
  {
    icon: Heart,
    title: "Mission valorisante",
    description:
      "Accompagnez les jeunes mamans dans un moment crucial de leur vie",
  },
  {
    icon: Clock,
    title: "Flexibilité horaire",
    description: "Choisissez vos créneaux selon votre disponibilité",
  },
  {
    icon: Award,
    title: "Formation offerte",
    description:
      "Bénéficiez d'une formation complète en accompagnement post-partum",
  },
  {
    icon: Users,
    title: "Communauté solidaire",
    description: "Rejoignez un réseau de professionnelles bienveillantes",
  },
];

export default function BecomeSitter() {
  return (
    <section id="become-sitter" className="py-20 px-6 text-white bg-green">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-6 text-white uppercase tracking-wide font-poppins">
              Devenez MamaSitter
            </h2>
            <p className="text-lg mb-8 leading-relaxed text-beige">
              Vous êtes passionnée par l'accompagnement des jeunes familles ?
              Rejoignez notre équipe de MamaSitters et transformez votre empathie en métier.
            </p>

            <div className="space-y-6 mb-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-sand">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1 text-white">{benefit.title}</h3>
                      <p className="text-beige">{benefit.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <button className="text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg bg-sand hover:bg-sand/90 uppercase tracking-wide">
              Candidater maintenant
            </button>
        </div>

        <div className="relative">
          <div className="aspect-[4/3] rounded-3xl shadow-2xl overflow-hidden">
            <img
              src="https://images.pexels.com/photos/3768131/pexels-photo-3768131.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="MamaSitter au travail"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 p-6 rounded-2xl shadow-xl max-w-xs bg-beige text-green">
            <div className="text-3xl font-bold mb-1">150+</div>
            <div>MamaSitters actives en France et Suisse</div>
          </div>
        </div>
      </div>
    </section>
  );
}
