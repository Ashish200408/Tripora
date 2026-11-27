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
      className="py-16 sm:py-20 lg:py-24 bg-[#142A32]"
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-center gap-10 lg:gap-16">
          <div className="max-w-2xl">
            <p className="text-xs sm:text-sm tracking-[0.24em] uppercase text-[#B68C63]! font-semibold mb-3">
              The Tripora Journal
            </p>
            <h2
              id="newsletter-heading"
              className="font-heading text-[#F8F7F3]! mb-4"
            >
              A Little Inspiration for Your Next Journey.
            </h2>
            <p className="text-base sm:text-lg text-[#E9E2D5]! leading-relaxed">
              Receive thoughtful travel inspiration, destination guides and
              occasional updates from Tripora.
            </p>
          </div>

          <div>
            <form
              onSubmit={handleSubmit}
              noValidate
              className="flex flex-col sm:flex-row sm:items-end gap-3"
            >
              <div className="flex-1">
                <label
                  htmlFor="newsletter-email"
                  className="block text-sm font-medium text-[#E9E2D5] mb-2"
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
                  className="w-full px-4 py-3 text-sm text-[#142A32] bg-[#F8F7F3] border border-[#4A6572]/70 rounded focus:ring-2 focus:ring-[#76552F] focus:border-[#76552F] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#142A32] placeholder:text-[#4A6572]"
                />
              </div>
              <Button
                type="submit"
                variant="outline-light"
                size="md"
                className="sm:shrink-0"
              >
                Subscribe
              </Button>
            </form>

            <p
              id="newsletter-demo-note"
              className="mt-3 text-xs text-[#E9E2D5]/75!"
            >
              Demo only: your address is not saved or sent to a mailing list.
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
