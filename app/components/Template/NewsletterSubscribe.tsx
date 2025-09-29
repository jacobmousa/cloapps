'use client';

import React, {useState} from 'react';

const CONTACT_API = '/api/contact'; // Change if your Contact Us API path differs

export default function NewsletterSubscribe() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle'|'loading'|'success'|'error'>('idle');
  const [msg, setMsg] = useState<string>('');

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setMsg('');
    const valid = /\S+@\S+\.\S+/.test(email);
    if (!valid) {
      setMsg('Please enter a valid email.');
      setStatus('error');
      return;
    }
    try {
      setStatus('loading');
      const res = await fetch(CONTACT_API, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          type: 'subscribe',
          subject: 'Newsletter Subscribe',
          name: 'Newsletter Subscriber',
          email,
          message: 'Please subscribe me to updates.'
        })
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus('success');
      setMsg('Thanks! We’ll be in touch.');
      setEmail('');
    } catch (err) {
      setStatus('error');
      setMsg('Could not subscribe right now. Please try again.');
    }
  }

  return (
    <form onSubmit={onSubmit} className="d-flex gap-2" noValidate>
      <input
        type="email"
        className="form-control"
        placeholder="Your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        aria-label="Email for newsletter"
        required
      />
      <button
        type="submit"
        className="btn btn-primary"
        disabled={status === 'loading'}
      >
        {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
      </button>
      {msg && (
        <div
          className={`ms-2 small ${status === 'success' ? 'text-success' : 'text-warning'}`}
          role="status"
          aria-live="polite"
        >
          {msg}
        </div>
      )}
    </form>
  );
}