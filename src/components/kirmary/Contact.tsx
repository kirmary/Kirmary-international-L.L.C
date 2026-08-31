import { useRef, useState } from "react";
import { Building2, CheckCircle2, Mail, MapPin, Phone, Send } from "lucide-react";

const CONTACT_DETAILS = [
  {
    icon: MapPin,
    label: "Address",
    value: "91 Linden Ave, Irvington Township, New Jersey 07111",
    href: undefined as string | undefined,
  },
  {
    icon: Phone,
    label: "Mobile",
    value: "+1 551 755 3043",
    href: "tel:+15517553043",
  },
  {
    icon: Mail,
    label: "Email",
    value: "kirmary@kirmary.com",
    href: "mailto:kirmary@kirmary.com",
  },
];

const inputClass =
  "w-full rounded-md border border-steel-300 bg-steel-50 px-4 py-3 text-sm text-navy-950 placeholder:text-steel-500 outline-none transition focus:border-navy-800 focus:ring-2 focus:ring-navy-800/20";

const labelClass =
  "mb-1.5 block text-xs font-bold uppercase tracking-[0.14em] text-navy-900";

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const resetForm = () => {
    setSubmitted(false);
    formRef.current?.reset();
  };

  if (submitted) {
    return (
      <div className="flex h-full min-h-[420px] flex-col items-center justify-center rounded-lg bg-white p-10 text-center shadow-2xl shadow-navy-950/40">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-safety-500/15 text-safety-600">
          <CheckCircle2 className="h-8 w-8" />
        </span>
        <h3 className="mt-5 font-display text-3xl font-semibold uppercase text-navy-950">
          Message Sent
        </h3>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-steel-600">
          Thank you for contacting KIRMARY International L.L.C. Our team will get
          back to you shortly.
        </p>
        <button
          type="button"
          onClick={resetForm}
          className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-navy-800 underline-offset-4 transition-colors hover:text-safety-600 hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  
}

export function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-navy-900 py-24 lg:py-32"
    >
      <div className="pointer-events-none absolute -top-24 right-0 h-96 w-96 rounded-full bg-safety-500/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-80 w-80 rounded-full bg-navy-800/60 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-14 max-w-3xl">
          <div className="flex items-center gap-3">
            <span className="h-0.5 w-8 bg-safety-500" />
            <p className="text-xs font-bold uppercase tracking-[0.26em] text-safety-500">
              Contact Us
            </p>
          </div>
          <h2 className="mt-4 font-display text-4xl font-bold uppercase leading-none tracking-tight text-white sm:text-5xl">
            Get In Touch
          </h2>
          <p className="mt-5 text-base leading-relaxed text-steel-300">
            Reach our US office for product inquiries, quotes, or technical
            support. We respond promptly during business hours.
          </p>

          <div className="mt-6 inline-block rounded-lg border border-white/10 bg-navy-950/60 p-5">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-safety-500">
              Kirmary USA Office
            </p>
            <h3 className="mt-2 flex items-center gap-2.5 font-display text-xl font-semibold uppercase tracking-wide text-white sm:text-2xl">
              <Building2 className="h-5 w-5 text-steel-300" />
              Kirmary International L.L.C.
            </h3>
          </div>
        </div>

        <ul className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {CONTACT_DETAILS.map((item) => (
            <li
              key={item.label}
              className="flex flex-col gap-3 rounded-lg border border-white/10 bg-navy-950/40 p-5"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-md border border-white/15 bg-white/5 text-safety-500">
                <item.icon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-steel-400">
                  {item.label}
                </p>
                {item.href ? (
                  <a
                    href={item.href}
                    className="mt-1 block text-sm font-medium leading-relaxed text-steel-100 transition-colors hover:text-white"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="mt-1 text-sm font-medium leading-relaxed text-steel-100">
                    {item.value}
                  </p>
                )}
              </div>
            </li>
          ))}
        </ul>

        <div className="mx-auto max-w-2xl">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}