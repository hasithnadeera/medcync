'use client';

import Image from 'next/image';

export default function FAQSection() {
  const faqs = [
    {
      question: 'How secure are my health records?',
      answer: 'Your health records are protected with industry-standard encryption and security measures. We comply with all healthcare data protection regulations.'
    },
    {
      question: 'Can I update my profile information?',
      answer: 'Yes, you can easily update your profile information at any time through your account settings.'
    },
    {
      question: 'How do I book an appointment with my doctor?',
      answer: 'Simply log in to your account, select your doctor, choose an available time slot, and confirm your appointment.'
    }
  ];

  const toggleAnswer = (index) => {
    const answers = document.querySelectorAll('.faq-answer');
    const icons = document.querySelectorAll('.faq-icon');
    
    answers.forEach((answer, i) => {
      if (i === index) {
        answer.classList.toggle('hidden');
        icons[i].classList.toggle('rotate-45');
      } else {
        answer.classList.add('hidden');
        icons[i].classList.remove('rotate-45');
      }
    });
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Frequently Asked Questions</h2>
        </div>
        <div className="max-w-3xl mx-auto grid gap-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-card hover:shadow-lg transition-shadow">
              <div 
                className="flex justify-between items-center cursor-pointer" 
                onClick={() => toggleAnswer(index)}
              >
                <h3 className="text-xl text-black font-bold">{faq.question}</h3>
                <Image
                  src="/plus.svg"
                  alt="Expand"
                  width={24}
                  height={24}
                  className="faq-icon transition-transform duration-300"
                />
              </div>
              <p className="faq-answer hidden mt-4 text-gray-600 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}