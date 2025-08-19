import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './style.module.css';

const Contact = () => {
    const { t } = useTranslation();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

 const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
        const response = await fetch(
            "https://script.google.com/macros/s/AKfycbxRZ8D6YrZemT0CrybiFqsKpVZMxtYWXWlgjA3IQWFx3W0hO8gwioMLd1R8axB_17W9bA/exec",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            }
        );

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        console.log("Server response:", result);

        setFormData({ name: "", email: "", subject: "", message: "" });
        alert("Message sent successfully!");
    } catch (error) {
        console.error("Error:", error);
        alert("Failed to send message. Please try again.");
    }
};


    return (
        <section className={styles.container}>
            <h1 className={styles.heading}>{t("contacttext1")}</h1>
            <p className={styles.intro}>{t("contacttext2")}</p>

            <div className={styles.contactInfo}>
                <div>
                    <h2>📧 Email</h2>
                    <a href="mailto:deepeshgiri119@gmail.com">deepeshgiri119@gmail.com</a>
                </div>
                <div>
                    <h2>📞 Phone</h2>
                    <a href="tel:+41782340758">+41 782340758</a>
                </div>
                <div>
                    <h2>📍 Location</h2>
                    <p>Zurich, Switzerland</p>
                </div>
                <div>
                    <h2>💼 Socials</h2>
                    <div style={{ display: "flex", gap: "10px" }}>
                        <a href="https://www.linkedin.com/in/deepesh-giri-9330aa1a5" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                    </div>
                </div>
            </div>

            <form className={styles.contactForm} onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                />
                <textarea
                    name="message"
                    placeholder="Your message..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                />
                <button type="submit" className={styles.submitButton}>Send Message</button>
            </form>

            <p className={styles.footerNote}>{t('generaltext')}</p>
        </section>
    );
};

export default Contact;

