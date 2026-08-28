import { useLocale } from '../../i18n/LocaleContext';

/** Port of the #contact section + updateContactLinks() from index.html — locale-aware mailto,
 *  WhatsApp message and résumé filename computed directly in JSX instead of imperative DOM patches. */
export default function Contact() {
  const { locale, ui } = useLocale();

  const resumeHref = locale === 'pt' ? '/Curriculo_Joao_Pedro_PT.pdf' : '/Curriculo_Joao_Pedro_EN.pdf';
  const mailtoHref =
    locale === 'pt'
      ? 'mailto:jpfonsecaalves2007@gmail.com?subject=Contato%20via%20portf%C3%B3lio'
      : 'mailto:jpfonsecaalves2007@gmail.com?subject=Portfolio%20contact';
  const whatsappHref =
    locale === 'pt'
      ? 'https://wa.me/5512991026455?text=Oi%20Jo%C3%A3o%2C%20vi%20seu%20portf%C3%B3lio.'
      : 'https://wa.me/5512991026455?text=Hi%20Jo%C3%A3o%2C%20I%20saw%20your%20portfolio.';

  return (
    <section className="sec wrap" id="contact" data-sec="contact">
      <div className="shead">
        <h2 className="shead__title up">{ui('contact.title')}</h2>
        <p className="shead__meta up">{ui('contact.meta')}</p>
      </div>

      <div className="contact up">
        <div>
          <p className="contact__lede" dangerouslySetInnerHTML={{ __html: ui('contact.lede') }} />
          <div className="contact__acts">
            <a className="btn btn--solid" href={mailtoHref}>
              <span>{ui('contact.email')}</span> <i>↗</i>
            </a>
            <a className="btn" href={whatsappHref} target="_blank" rel="noopener">
              WhatsApp <i>↗</i>
            </a>
            <a className="btn" href="https://linkedin.com/in/joaopedro2007" target="_blank" rel="noopener">
              LinkedIn <i>↗</i>
            </a>
            <a className="btn" href="https://github.com/Joaopedro0s" target="_blank" rel="noopener">
              GitHub <i>↗</i>
            </a>
            <a className="btn" href={resumeHref} download>
              <span>{ui('contact.resume')}</span> <i>↓</i>
            </a>
          </div>
        </div>
        <div className="contact__card">
          <span className="live">
            <i></i> <span>{ui('contact.available')}</span>
          </span>
          <div className="contact__row">
            <span className="mono mono--fog">{ui('contact.emailLabel')}</span>
            <span>jpfonsecaalves2007@gmail.com</span>
          </div>
          <div className="contact__row">
            <span className="mono mono--fog">{ui('contact.phoneLabel')}</span>
            <span>(12) 99102-6455</span>
          </div>
          <div className="contact__row">
            <span className="mono mono--fog">{ui('contact.locationLabel')}</span>
            <span>{ui('contact.location')}</span>
          </div>
        </div>
      </div>

      <div className="foot">
        <span className="mono mono--fog">© 2026 João Pedro Carvalho — São Paulo, Brazil</span>
        <span className="mono mono--fog">jpfonsecaalves2007@gmail.com · (12) 99102-6455</span>
      </div>
    </section>
  );
}
