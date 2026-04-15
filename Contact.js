import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '' });
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email) {
      setError('Please fill in all fields.');
      return;
    }

    setError('');
    alert('Message sent!');
  };

  return (
    <section className="my-12">
      <h2 className="text-3xl font-semibold text-blue-600">Contact</h2>

      <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-4 max-w-md">
        <input
          type="text"
          placeholder="Name"
          className="p-2 border rounded"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          type="email"
          placeholder="Email"
          className="p-2 border rounded"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        {error && <p className="text-red-500">{error}</p>}

        <button className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
          Send
        </button>
      </form>
    </section>
  );
};

export default Contact;