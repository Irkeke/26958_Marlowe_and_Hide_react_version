// CONTROLLER (hook) — contact form state. No model: nothing is persisted.
import { useState } from 'react';

export function useContactForm() {
  const [sent, setSent] = useState(false);

  // The <form> uses native HTML5 validation (required / type=email),
  // so this handler only runs once the browser says the form is valid.
  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    e.target.reset();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return { sent, handleSubmit };
}
