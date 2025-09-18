import ContactForm from "./components/ContactForm";
import ContactHero from "./components/ContactHero";
import ContactInfo from "./components/ContactInfo";


export default function Contact() {
    return (
        <div>
            <ContactHero />
            <ContactForm />
            <ContactInfo />
        </div>
    )
}