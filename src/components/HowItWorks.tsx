import { FaUserPlus, FaSearchLocation, FaBaby } from "react-icons/fa";
import { motion } from "framer-motion";

const steps = [
  {
    id: 1, // Ajout d'un identifiant unique
    icon: <FaUserPlus size={36} />,
    title: "Inscription",
    text: "Créez votre compte maman en quelques minutes.",
  },
  {
    id: 2, // Ajout d'un identifiant unique
    icon: <FaSearchLocation size={36} />,
    title: "Choix de la MamaSitter",
    text: "Accédez à des accompagnantes vérifiées près de chez vous.",
  },
  {
    id: 3, // Ajout d'un identifiant unique
    icon: <FaBaby size={36} />,
    title: "Accompagnement",
    text: "Discutez en toute sécurité et bénéficiez d’un soutien personnalisé.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white py-24 px-6">
      <h2 className="text-3xl font-bold text-center text-green">
        Comment ça fonctionne
      </h2>

      <div className="mt-16 max-w-5xl mx-auto grid md:grid-cols-3 gap-10">
        {steps.map((step) => (
          <motion.div
            key={step.id} // Utilisation de l'identifiant unique
            className="bg-beige p-10 rounded-3xl text-center shadow-md hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: step.id * 0.2, duration: 0.5 }}
          >
            <div className="text-sand mb-4 flex justify-center">
              {step.icon}
            </div>

            <h3 className="mt-6 text-xl font-semibold">{step.title}</h3>
            <p className="mt-3 text-gray-700 text-sm leading-relaxed">{step.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
