"use client";

import { FormEvent, useState } from "react";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange =
    (
      field: keyof ContactFormData
    ): React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> =>
    (event) => {
      setFormData((prev) => ({ ...prev, [field]: event.target.value }));
    };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        const message = data?.error ?? "No se pudo enviar el mensaje.";
        throw new Error(message);
      }

      setSuccess(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      const message = err instanceof Error ? err.message : "Error desconocido";
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 text-slate-200"
      aria-label="Formulario de contacto"
    >
      {/* Nombre */}
      <div className="flex flex-col gap-2">
        <label
          className="text-sm font-medium text-slate-300"
          htmlFor="contact-name"
        >
          Nombre
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          value={formData.name}
          onChange={handleChange("name")}
          className="bg-slate-900/40 border border-slate-700 rounded-lg px-3 py-2 text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600/50 transition"
          placeholder="Tu nombre completo"
        />
      </div>

      {/* Correo */}
      <div className="flex flex-col gap-2">
        <label
          className="text-sm font-medium text-slate-300"
          htmlFor="contact-email"
        >
          Correo electrónico
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={handleChange("email")}
          className="bg-slate-900/40 border border-slate-700 rounded-lg px-3 py-2 text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600/50 transition"
          placeholder="tu@correo.com"
        />
      </div>

      {/* Mensaje */}
      <div className="flex flex-col gap-2">
        <label
          className="text-sm font-medium text-slate-300"
          htmlFor="contact-message"
        >
          Mensaje
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange("message")}
          className="bg-slate-900/40 border border-slate-700 rounded-lg px-3 py-2 text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600/50 transition"
          placeholder="Escribe tu mensaje aquí..."
        />
      </div>

      {/* Botón */}
      <button
        type="submit"
        disabled={loading}
        className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2 font-medium text-white transition-colors hover:bg-blue-500 disabled:opacity-60"
      >
        {loading ? "Enviando..." : "Enviar mensaje"}
      </button>

      {/* Estado de envío */}
      {success && (
        <p className="text-sm text-green-400">
          ✅ Mensaje enviado correctamente.
        </p>
      )}
      {error && <p className="text-sm text-red-400">⚠️ {error}</p>}
    </form>
  );
}
