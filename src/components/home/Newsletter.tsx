import { useState, type FormEvent } from 'react'
import Container from '../ui/Container'
import Button from '../ui/Button'

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

type Feedback = {
  type: 'error' | 'success'
  message: string
}

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [feedback, setFeedback] = useState<Feedback | null>(null)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const normalizedEmail = email.trim()

    if (!normalizedEmail) {
      setFeedback({ type: 'error', message: 'Please enter your email address.' })
      return
    }

    if (!emailPattern.test(normalizedEmail)) {
      setFeedback({
        type: 'error',
        message: 'Enter a valid email address, such as you@example.com.',
      })
      return
    }

    setEmail(normalizedEmail)
    setFeedback({
      type: 'success',
      message:
        'Your email passed this demo check. No subscription was created because Tripora is not connected to a mailing service yet.',
    })
  }

  const handleEmailChange = (value: string) => {
    setEmail(value)
    setFeedback(null)
  }

  return (
    <section
      aria-labelledby="newsletter-heading"
      className="bg-[#142A32] py-16 sm:py-20 lg:py-24"
    >
      <Container>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-end lg:gap-16">
          <div className="max-w-2xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[#B68C63]! sm:text-sm">
              The Tripora Journal
            </p>
            <h2
              id="newsletter-heading"
              className="mb-5 font-heading text-4xl! leading-tight! text-[#F8F7F3]! sm:text-5xl! lg:text-6xl!"
            >
              A Little Inspiration for Your Next Journey.
            </h2>
            <p className="max-w-xl text-base leading-relaxed text-[#E9E2D5]/85! sm:text-lg">
              A preview of the thoughtful travel inspiration, destination guides
              and occasional updates a future Tripora Journal could offer.
            </p>
          </div>

          <div className="border-t border-[#E9E2D5]/20 pt-6 sm:pt-8">
            <form
              onSubmit={handleSubmit}
              noValidate
              className="flex flex-col gap-4 sm:flex-row sm:items-end"
            >
              <div className="flex-1">
                <label
                  htmlFor="newsletter-email"
                  className="mb-2 block text-sm font-medium text-[#E9E2D5]"
                >
                  Email address
                </label>
                <input
                  id="newsletter-email"
                  name="email"
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(event) => handleEmailChange(event.target.value)}
                  aria-invalid={feedback?.type === 'error'}
                  aria-describedby={[
                    'newsletter-demo-note',
                    feedback ? 'newsletter-feedback' : '',
                  ]
                    .filter(Boolean)
                    .join(' ')}
                  placeholder="you@example.com"
                  className="h-12 w-full rounded border border-[#4A6572]/70 bg-[#F8F7F3] px-4 text-sm text-[#142A32] placeholder:text-[#4A6572] focus:border-[#76552F] focus:ring-2 focus:ring-[#76552F] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E9E2D5]"
                />
              </div>
              <Button
                type="submit"
                variant="secondary"
                size="md"
                fullWidth
                className="h-12 sm:w-auto sm:shrink-0"
              >
                Check email
              </Button>
            </form>

            <p
              id="newsletter-demo-note"
              className="mt-4 max-w-md text-sm leading-relaxed text-[#E9E2D5]/85!"
            >
              Demo only: no email is sent and no subscription is stored.
            </p>

            {feedback && (
              <p
                id="newsletter-feedback"
                role={feedback.type === 'error' ? 'alert' : 'status'}
                className={`mt-3 text-sm ${
                  feedback.type === 'error'
                    ? 'text-[#F8F7F3]!'
                    : 'text-[#E9E2D5]!'
                }`}
              >
                {feedback.message}
              </p>
            )}
          </div>
        </div>
      </Container>
    </section>
  )
}
