import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section id="hero" className="bg-beige px-6 pt-28 pb-20">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 bg-white/70 text-green px-4 py-2 rounded-full text-sm font-lato uppercase tracking-wide">
            Accompagnement post-partum
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-green leading-tight">
            Un soutien humain et rassurant
            <br />
            pour les premières semaines avec bébé
          </h1>

          <p className="text-lg text-gray-700 max-w-xl leading-relaxed">
            MamSitter met en relation des mamans avec des accompagnantes
            soigneusement sélectionnées pour un accompagnement doux, sécurisé
            et bienveillant.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              to="/profil-mamasitter"
              className="bg-sand text-white px-8 py-3 rounded-full font-lato uppercase tracking-wide hover:opacity-90 transition focus:outline-none focus:ring-2 focus:ring-green"
            >
              Trouver une MamaSitter
            </Link>
            <button className="border-2 border-green text-green px-8 py-3 rounded-full font-lato uppercase tracking-wide hover:bg-green hover:text-white transition focus:outline-none focus:ring-2 focus:ring-green">
              Découvrir le concept
            </button>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 pt-6">
            <div className="bg-white rounded-2xl p-4 shadow">
              <p className="text-sm text-gray-500">Disponibilité</p>
              <p className="text-lg font-semibold text-green">7j/7</p>
            </div>
            <div className="bg-white rounded-2xl p-4 shadow">
              <p className="text-sm text-gray-500">MamaSitters</p>
              <p className="text-lg font-semibold text-green">Vérifiées</p>
            </div>
            <div className="bg-white rounded-2xl p-4 shadow">
              <p className="text-sm text-gray-500">Zones</p>
              <p className="text-lg font-semibold text-green">
                France & Suisse
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="rounded-3xl overflow-hidden shadow-xl"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <img
            src="/images/hero.jpg"
            alt="Maman accompagnée avec son bébé"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
