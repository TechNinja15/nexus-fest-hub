import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Who can participate in INNOFEST 2025?",
      answer: "INNOFEST is open to all students from colleges and universities across India. Some events may have specific eligibility criteria mentioned in their respective details.",
    },
    {
      question: "How do I register for events?",
      answer: "You can register through our official website by clicking the 'Register Now' button. Early bird discounts are available for registrations before February 1st, 2025.",
    },
    {
      question: "What is the registration fee?",
      answer: "Registration fees vary by event category. Individual events range from ₹100-₹500, while combo passes with accommodation start from ₹2000. Check specific event pages for detailed pricing.",
    },
    {
      question: "Is accommodation provided?",
      answer: "Yes, we provide on-campus accommodation for outstation participants. Accommodation must be booked during registration. Limited spots available on a first-come, first-served basis.",
    },
    {
      question: "What should I bring for the competitions?",
      answer: "Requirements vary by event. For coding competitions, bring your laptop. For robotics, bring your components and tools. Detailed requirement lists will be emailed after registration.",
    },
    {
      question: "Are there prizes for winners?",
      answer: "Yes! INNOFEST 2025 features a prize pool of over ₹10 Lakhs across all competitions. Winners also receive certificates, goodies, and internship opportunities with sponsors.",
    },
    {
      question: "Can I participate in multiple events?",
      answer: "Absolutely! You can register for multiple events. However, please check the schedule to ensure there are no timing conflicts between your chosen events.",
    },
    {
      question: "Is there a refund policy?",
      answer: "Registration fees are non-refundable. However, you can transfer your registration to another participant up to 7 days before the event by contacting our support team.",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-lg">
            Got questions? We've got answers
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="glass-effect rounded-lg px-6 border-none animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <AccordionTrigger className="font-display text-left hover:text-primary transition-colors">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 text-center glass-effect rounded-lg p-8">
          <p className="text-muted-foreground mb-4">Still have questions?</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:glow-primary transition-all"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
