import React from 'react';
import { Container } from 'react-bootstrap';

export function FooterSimple() {
  return (
    <div id="footer-simple">
      Buzzer Mode
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://quizardpro.baseiitech.icgassociates.com/"
      >
        &nbsp;QuizardPro
      </a>
    </div>
  );
}

/**
 * Footer component
 * @param {bool} mobileOnly - only display on mobile devices, <768 px
 */
export default function Footer({ mobileOnly = false }) {
  return (
    <footer className={mobileOnly ? 'd-block d-md-none' : null}>
      <Container>
        <div>
          Buzzer Mode
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://quizardpro.baseiitech.icgassociates.com/"
          >
            QuizardPro
          </a>
        </div>
      </Container>
    </footer>
  );
}
