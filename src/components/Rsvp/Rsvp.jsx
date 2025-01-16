import React, { useState, useEffect, useRef } from 'react';
import './Rsvp.css';

const Rsvp = () => {
  const containerRef = useRef(null); // Referensi untuk container utama
  const [formData, setFormData] = useState({
    name: '',
    message: '',
    status: '',
  });

  const [feedbacks, setFeedbacks] = useState([]);
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false); // State untuk tombol

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show'); // Tambahkan kelas 'show' saat kontainer terlihat
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  const getData = async () => {
    try {
      const res = await fetch(
        'https://api.sheetbest.com/sheets/8b198750-b049-4410-b2d8-476678163892'
      );
      const data = await res.json();
      setFeedbacks(data);
    } catch (err) {
      setError(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Nonaktifkan tombol
    const dataToSubmit = { ...formData };

    try {
      const res = await fetch(
        'https://api.sheetbest.com/sheets/8b198750-b049-4410-b2d8-476678163892',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(dataToSubmit),
        }
      );

      if (res.ok) {
        alert('Feedback submitted successfully!');
        getData();
        setFormData({ name: '', message: '', status: '' });
      } else {
        alert('Error submitting feedback.');
      }
    } catch (error) {
      alert('Something went wrong.');
    } finally {
      setIsSubmitting(false); // Aktifkan kembali tombol
    }
  };

  return (
    <>
      <div ref={containerRef} className="animate-slide-up">
        <h2 className="judul-feedback">Doakan kami</h2>

        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Nama:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Masukkan nama"
              required
            />
          </div>
          <div>
            <label htmlFor="message">Pesan:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tulis pesan Anda"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="status">Status Kehadiran:</label>
            <select
              id="status"
              name="status"
              className="status"
              value={formData.status}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Pilih Kehadiran
              </option>
              <option value="Hadir">Hadir</option>
              <option value="Tidak Hadir">Tidak Hadir</option>
            </select>
          </div>
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send Now'}
          </button>
        </form>

        <div className="table">
          <h3 className="daftar-feedback">Daftar Pesan</h3>
          {error ? (
            <p>Error fetching or submitting feedback: {error.message}</p>
          ) : feedbacks.length > 0 ? (
            <ul>
              {feedbacks.map((feedback, index) => (
                <li key={index}>
                  <strong>
                    From: {feedback.name} - {feedback.status}
                  </strong>
                  <p className="message">{feedback.message}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p>Belum ada pesan.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Rsvp;
