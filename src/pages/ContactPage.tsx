import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { CheckCircle2 } from 'lucide-react'
import Container from '../components/ui/Container'
import Button from '../components/ui/Button'
import {
  contactFormSchema,
  type ContactFormValues,
} from '../schemas/contactFormSchema'
import PageMetadata from '../components/seo/PageMetadata'

const fieldClassName =
  'w-full rounded-[6px] border border-[#4A6572]/70 bg-white px-4 py-3 text-sm text-[#142A32]! transition-colors placeholder:text-[#4A6572] focus:border-[#76552F] focus:ring-2 focus:ring-[#76552F] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#142A32]'

const labelClassName =
  'mb-1.5 block text-sm font-medium text-[#142A32]!'

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null

  return (
    <p id={id} role="alert" className="mt-1.5 text-sm text-[#8B2635]!">
      {message}
    </p>
  )
}

function ContactConfirmation({
  values,
  onEdit,
  onHome,
}: {
  values: ContactFormValues
  onEdit: () => void
  onHome: () => void
}) {
  return (
    <section
      aria-labelledby="contact-confirmation-heading"
      aria-live="polite"
      className="overflow-hidden rounded-lg border border-[#142A32]/8 bg-white shadow-[0_8px_28px_rgba(20,42,50,0.07)]"
    >
      <div className="bg-[#142A32] px-6 py-7 text-center text-[#F8F7F3] sm:px-8">
        <CheckCircle2
          aria-hidden="true"
          className="mx-auto mb-3 text-[#B68C63]"
          size={34}
          strokeWidth={1.6}
        />
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#E9E2D5]!">
          Demo confirmation
        </p>
        <h2
          id="contact-confirmation-heading"
          className="font-heading text-2xl text-[#F8F7F3]! sm:text-3xl"
        >
          Message prepared.
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-[#E9E2D5]!">
          Thank you, {values.fullName}. Here are the details you entered.
        </p>
      </div>

      <div className="p-6 sm:p-8">
        <h3 className="mb-5 font-heading text-xl text-[#142A32]!">
          Message summary
        </h3>
        <dl className="flex flex-col gap-4">
          <div className="min-w-0">
            <dt className="text-xs font-semibold uppercase tracking-wider text-[#4A6572]!">
              Full name
            </dt>
            <dd className="mt-1 break-words text-sm text-[#142A32]!">
              {values.fullName}
            </dd>
          </div>
          <div className="min-w-0">
            <dt className="text-xs font-semibold uppercase tracking-wider text-[#4A6572]!">
              Email address
            </dt>
            <dd className="mt-1 break-words text-sm text-[#142A32]!">
              {values.email}
            </dd>
          </div>
          <div className="min-w-0">
            <dt className="text-xs font-semibold uppercase tracking-wider text-[#4A6572]!">
              Subject
            </dt>
            <dd className="mt-1 break-words text-sm text-[#142A32]!">
              {values.subject}
            </dd>
          </div>
          <div className="min-w-0">
            <dt className="text-xs font-semibold uppercase tracking-wider text-[#4A6572]!">
              Message
            </dt>
            <dd className="mt-1 whitespace-pre-wrap break-words text-sm leading-relaxed text-[#142A32]!">
              {values.message}
            </dd>
          </div>
        </dl>

        <div
          role="status"
          className="mt-6 rounded-md border border-[#B68C63]/40 bg-[#E9E2D5]/55 px-4 py-3 text-sm leading-relaxed text-[#142A32]!"
        >
          This is a demo only. No message was sent, no email was generated, and
          your details have not been stored.
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Button
            type="button"
            variant="outline"
            size="md"
            onClick={onEdit}
            className="w-full sm:w-auto"
          >
            Edit Message
          </Button>
          <Button
            type="button"
            size="md"
            fullWidth
            onClick={onHome}
            className="sm:w-auto"
          >
            Return to Homepage
          </Button>
        </div>
      </div>
    </section>
  )
}

export default function ContactPage() {
  const navigate = useNavigate()
  const [submittedMessage, setSubmittedMessage] =
    useState<ContactFormValues | null>(null)
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: '',
      email: '',
      subject: '',
      message: '',
    },
    mode: 'onBlur',
  })

  const handleValidSubmit = (values: ContactFormValues) => {
    setSubmittedMessage(values)
  }

  return (
    <>
      <PageMetadata
        title="Contact Tripora | Demo Message Form"
        description="Preview a sample contact message in Tripora's frontend demo. Messages are validated in the browser only; they are not sent or stored."
      />
      <section className="section-padding">
        <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-[#76552F]!">
              Get in Touch
            </p>
            <h1 className="mb-4 text-[#142A32]!">
              Let&apos;s Plan
              <br />
              <em>Your Journey.</em>
            </h1>
            <p className="mb-8 leading-relaxed text-[#4A6572]!">
              Use the form to preview a contact message. This frontend demo is
              not connected to a travel team or a real contact channel.
            </p>

            <div className="rounded-lg border border-[#142A32]/10 bg-[#E9E2D5]/55 p-5">
              <p className="text-sm font-semibold text-[#142A32]!">
                Demo only
              </p>
              <p className="mt-2 text-sm leading-relaxed text-[#4A6572]!">
                There are no verified office details or contact channels
                configured. Messages entered here are not sent or stored.
              </p>
            </div>
          </div>

          <div className="rounded-lg border border-[#142A32]/8 bg-[#F8F7F3] p-6 lg:p-8">
            {submittedMessage ? (
              <ContactConfirmation
                values={submittedMessage}
                onEdit={() => setSubmittedMessage(null)}
                onHome={() => navigate('/')}
              />
            ) : (
              <>
                <h2 className="mb-6 text-xl text-[#142A32]!">
                  Send Us a Message
                </h2>
                <form
                  onSubmit={handleSubmit(handleValidSubmit)}
                  noValidate
                  className="flex flex-col gap-4"
                >
                  <div>
                    <label htmlFor="contact-full-name" className={labelClassName}>
                      Full Name{' '}
                      <span aria-hidden="true" className="text-[#76552F]">
                        *
                      </span>
                    </label>
                    <input
                      id="contact-full-name"
                      autoComplete="name"
                      required
                      {...register('fullName')}
                      aria-invalid={Boolean(errors.fullName)}
                      aria-describedby={
                        errors.fullName ? 'contact-full-name-error' : undefined
                      }
                      className={fieldClassName}
                      placeholder="Your full name"
                    />
                    <FieldError
                      id="contact-full-name-error"
                      message={errors.fullName?.message}
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email" className={labelClassName}>
                      Email Address{' '}
                      <span aria-hidden="true" className="text-[#76552F]">
                        *
                      </span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      inputMode="email"
                      autoComplete="email"
                      required
                      {...register('email')}
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={
                        errors.email ? 'contact-email-error' : undefined
                      }
                      className={fieldClassName}
                      placeholder="you@example.com"
                    />
                    <FieldError
                      id="contact-email-error"
                      message={errors.email?.message}
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-subject" className={labelClassName}>
                      Subject{' '}
                      <span aria-hidden="true" className="text-[#76552F]">
                        *
                      </span>
                    </label>
                    <input
                      id="contact-subject"
                      required
                      {...register('subject')}
                      aria-invalid={Boolean(errors.subject)}
                      aria-describedby={
                        errors.subject ? 'contact-subject-error' : undefined
                      }
                      className={fieldClassName}
                      placeholder="How can we help?"
                    />
                    <FieldError
                      id="contact-subject-error"
                      message={errors.subject?.message}
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-message" className={labelClassName}>
                      Message{' '}
                      <span aria-hidden="true" className="text-[#76552F]">
                        *
                      </span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      maxLength={2000}
                      required
                      {...register('message')}
                      aria-invalid={Boolean(errors.message)}
                      aria-describedby={
                        errors.message ? 'contact-message-error' : undefined
                      }
                      className={`${fieldClassName} resize-y`}
                      placeholder="Tell us about your dream journey..."
                    />
                    <FieldError
                      id="contact-message-error"
                      message={errors.message?.message}
                    />
                  </div>

                  <p className="text-xs italic leading-relaxed text-[#4A6572]!">
                    Demo only: your message is validated and shown in this page
                    session. It is not sent or stored.
                  </p>
                  <Button
                    type="submit"
                    variant="primary"
                    size="md"
                    fullWidth
                    disabled={isSubmitting}
                  >
                    Preview Message
                  </Button>
                </form>
              </>
            )}
          </div>
        </div>
        </Container>
      </section>
    </>
  )
}
