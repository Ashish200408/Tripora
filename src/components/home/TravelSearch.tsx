import { useState, type FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { MapPin, Calendar, Users, Minus, Plus, Search, AlertCircle } from 'lucide-react'
import Container from '../ui/Container'
import Button from '../ui/Button'
import { destinations } from '../../data/destinations'

// =========================================================
// TravelSearch – Interactive homepage journey search panel
// Navigates to /packages with destination, date & travellers
// preserved in URL query parameters.
// =========================================================

const MIN_TRAVELLERS = 1
const MAX_TRAVELLERS = 12

function getLocalTodayISO(): string {
  const now = new Date()
  const year = now.getFullYear()
  const month = String(now.getMonth() + 1).padStart(2, '0')
  const day = String(now.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

export default function TravelSearch() {
  const navigate = useNavigate()
  const [minDate] = useState<string>(() => getLocalTodayISO())

  const [destination, setDestination] = useState<string>('')
  const [travelDate, setTravelDate] = useState<string>('')
  const [travellers, setTravellers] = useState<number>(2)
  const [error, setError] = useState<string | null>(null)

  const handleDecrement = () => {
    setError(null)
    setTravellers((prev) => Math.max(MIN_TRAVELLERS, prev - 1))
  }

  const handleIncrement = () => {
    setError(null)
    setTravellers((prev) => Math.min(MAX_TRAVELLERS, prev + 1))
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const today = getLocalTodayISO()

    if (!travelDate) {
      setError('Please select your preferred travel date.')
      return
    }

    if (travelDate < today) {
      setError('Travel date cannot be in the past. Please choose a future date.')
      return
    }

    if (travellers < MIN_TRAVELLERS || travellers > MAX_TRAVELLERS) {
      setError(`Please select between ${MIN_TRAVELLERS} and ${MAX_TRAVELLERS} travellers.`)
      return
    }

    setError(null)

    const params = new URLSearchParams({
      destination: destination || 'any',
      date: travelDate,
      travellers: String(travellers),
    })

    navigate(`/packages?${params.toString()}`)
  }

  return (
    <section
      aria-label="Search for your journey"
      className="relative z-20 -mt-10 sm:-mt-12 pb-12 sm:pb-16"
    >
      <Container>
        <div className="bg-[#F8F7F3] rounded-xl border border-[#142A32]/12 shadow-[0_12px_36px_rgba(20,42,50,0.12)] p-5 sm:p-6 lg:p-7">
          <form
            onSubmit={handleSubmit}
            noValidate
            aria-describedby={error ? 'travel-search-error' : undefined}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.35fr_1.1fr_1fr_auto] gap-4 lg:gap-5 items-end">
              {/* 1. Destination */}
              <div>
                <label
                  htmlFor="travel-search-destination"
                  className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#142A32] mb-2"
                >
                  <MapPin size={14} className="text-[#B68C63]" aria-hidden="true" />
                  Destination
                </label>
                <select
                  id="travel-search-destination"
                  name="destination"
                  value={destination}
                  onChange={(e) => {
                    setDestination(e.target.value)
                    if (error) setError(null)
                  }}
                  className="w-full h-12 px-3.5 text-sm text-[#142A32] bg-white border border-[#142A32]/18 rounded-[6px] focus:outline-none focus:ring-2 focus:ring-[#B68C63]/50 focus:border-[#B68C63] transition-colors cursor-pointer"
                >
                  <option value="">Any destination</option>
                  {destinations.map((dest) => (
                    <option key={dest.id} value={dest.slug}>
                      {dest.name}, {dest.country}
                    </option>
                  ))}
                </select>
              </div>

              {/* 2. Travel Date */}
              <div>
                <label
                  htmlFor="travel-search-date"
                  className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#142A32] mb-2"
                >
                  <Calendar size={14} className="text-[#B68C63]" aria-hidden="true" />
                  Travel Date
                </label>
                <input
                  id="travel-search-date"
                  name="travelDate"
                  type="date"
                  min={minDate}
                  value={travelDate}
                  onChange={(e) => {
                    setTravelDate(e.target.value)
                    if (error) setError(null)
                  }}
                  required
                  aria-required="true"
                  aria-invalid={Boolean(error && (!travelDate || travelDate < minDate))}
                  className="w-full h-12 px-3.5 text-sm text-[#142A32] bg-white border border-[#142A32]/18 rounded-[6px] focus:outline-none focus:ring-2 focus:ring-[#B68C63]/50 focus:border-[#B68C63] transition-colors"
                />
              </div>

              {/* 3. Travellers */}
              <div>
                <span
                  id="travel-search-travellers-label"
                  className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#142A32] mb-2"
                >
                  <Users size={14} className="text-[#B68C63]" aria-hidden="true" />
                  Travellers
                </span>
                <div
                  role="group"
                  aria-labelledby="travel-search-travellers-label"
                  className="flex items-center justify-between h-12 px-2.5 bg-white border border-[#142A32]/18 rounded-[6px]"
                >
                  <button
                    type="button"
                    onClick={handleDecrement}
                    disabled={travellers <= MIN_TRAVELLERS}
                    aria-label="Decrease travellers"
                    className="w-8 h-8 flex items-center justify-center rounded text-[#142A32] hover:bg-[#E9E2D5] disabled:opacity-35 disabled:hover:bg-transparent disabled:cursor-not-allowed transition-colors focus-visible:outline-2 focus-visible:outline-[#B68C63] cursor-pointer"
                  >
                    <Minus size={15} aria-hidden="true" />
                  </button>

                  <span
                    aria-live="polite"
                    className="text-sm font-medium text-[#142A32] select-none px-2"
                  >
                    {travellers} {travellers === 1 ? 'Traveller' : 'Travellers'}
                  </span>

                  <button
                    type="button"
                    onClick={handleIncrement}
                    disabled={travellers >= MAX_TRAVELLERS}
                    aria-label="Increase travellers"
                    className="w-8 h-8 flex items-center justify-center rounded text-[#142A32] hover:bg-[#E9E2D5] disabled:opacity-35 disabled:hover:bg-transparent disabled:cursor-not-allowed transition-colors focus-visible:outline-2 focus-visible:outline-[#B68C63] cursor-pointer"
                  >
                    <Plus size={15} aria-hidden="true" />
                  </button>
                </div>
              </div>

              {/* 4. Submit Button */}
              <div className="md:col-span-2 lg:col-span-1">
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  fullWidth
                  className="h-12 px-6 lg:w-auto whitespace-nowrap shadow-sm hover:shadow-md"
                >
                  <Search size={17} aria-hidden="true" />
                  Find My Journey
                </Button>
              </div>
            </div>

            {/* Validation message */}
            {error && (
              <div
                id="travel-search-error"
                role="alert"
                className="mt-4 flex items-center gap-2 text-sm text-[#8B2635] bg-[#8B2635]/8 border border-[#8B2635]/20 rounded-[6px] px-3.5 py-2.5"
              >
                <AlertCircle size={16} className="shrink-0" aria-hidden="true" />
                <span>{error}</span>
              </div>
            )}
          </form>
        </div>
      </Container>
    </section>
  )
}
