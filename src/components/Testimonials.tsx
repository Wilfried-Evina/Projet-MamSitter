import { motion } from "framer-motion"
import { FaStar } from "react-icons/fa"

const testimonials = [
  {
    name: "Camille",
    city: "Lyon",
    text: "Un accompagnement précieux, humain et rassurant.",
    rating: 5
  },
  {
    name: "Sarah",
    city: "Paris",
    text: "MamSitter m’a énormément aidée après mon accouchement.",
    rating: 5
  },
  {
    name: "Inès",
    city: "Genève",
    text: "Des conseils concrets et beaucoup de douceur. Je recommande.",
    rating: 5
  }
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-white py-24 px-6">
      <h2 className="text-3xl font-bold text-center text-green">
        Elles nous font confiance
      </h2>

      <div className="mt-16 max-w-5xl mx-auto grid md:grid-cols-3 gap-10">
        {testimonials.map((t, index) => (
          <motion.div
            key={index}
            className="bg-beige p-8 rounded-3xl shadow hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
          >
            <p className="italic text-gray-700 leading-relaxed">
              “{t.text}”
            </p>

            <div className="flex items-center mt-4">
              <div className="w-12 h-12 rounded-full bg-sand text-white flex items-center justify-center font-bold mr-3">
                {t.name[0]}
              </div>
              <div>
                <div className="flex text-yellow-400">
                  {Array(t.rating).fill(0).map((_, i) => <FaStar key={i} className="w-4 h-4"/>)}
                </div>
                <p className="font-semibold">{t.name} – {t.city}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
