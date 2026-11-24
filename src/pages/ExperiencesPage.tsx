import { Link } from 'react-router-dom'
import Container from '../components/ui/Container'
import { experiences } from '../data/experiences'
import { ArrowRight } from 'lucide-react'

// =========================================================
// Experiences Page – Placeholder
// Phase 6 will add full experience detail pages
// =========================================================

export default function ExperiencesPage() {
  return (
    <section className="section-padding">
      <Container>
        {/* Page header */}
        <div className="mb-12">
          <p className="text-sm tracking-widest uppercase text-[#B68C63] mb-3 font-medium">
            How Would You Like to Travel?
          </p>
          <h1 className="mb-4">Travel Experiences</h1>
          <p className="text-lg text-[#4A6572] max-w-2xl">
            Every traveller is unique. Discover curated experience categories crafted around the way you want to explore the world.
          </p>
        </div>

        {/* Experience cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((exp) => (
            <article
              key={exp.id}
              className="group relative overflow-hidden rounded-lg bg-[#F8F7F3] border border-[#142A32]/8 hover:shadow-md transition-shadow duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden bg-[#E9E2D5]">
                <img
                  src={exp.imageUrl}
                  alt={exp.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <p className="text-xs text-[#B68C63] tracking-widest uppercase font-medium mb-2">
                  {exp.category}
                </p>
                <h2 className="text-lg mb-1.5">{exp.title}</h2>
                <p className="text-sm text-[#4A6572] italic mb-3">{exp.subtitle}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {exp.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-0.5 bg-[#E9E2D5] rounded text-[#142A32]/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  to="/packages"
                  className="inline-flex items-center gap-1.5 text-sm text-[#B68C63] hover:gap-2.5 transition-all duration-200 font-medium"
                >
                  View packages <ArrowRight size={14} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
