export const scrollToSection = () => {
    const section = document.getElementById('targetSection');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };