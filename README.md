# Medical Device Sales Representative - Personal Brand Website

A single-page, mobile-first static website for a Medical Device Sales Representative personal brand. Built with vanilla HTML, CSS, and JavaScript—no frameworks required.

## Features

- **Mobile-First Design**: Responsive layout that works beautifully on all devices
- **Clean & Modern**: Minimal, premium, clinical aesthetic with high-trust design
- **Smooth Navigation**: Sticky header with smooth-scroll navigation and active section highlighting
- **Interactive Elements**: FAQ accordion, form validation, and toast notifications
- **Performance Optimized**: Lightweight, fast-loading with SVG placeholders
- **Accessible**: Semantic HTML, ARIA labels, and proper contrast ratios

## Project Structure

```
demo-medical-1page/
├── index.html      # Main HTML file
├── styles.css      # All styles (mobile-first)
├── script.js       # Interactive functionality
└── README.md       # This file
```

## Setup & Deployment

### Local Development

1. Clone or download this repository
2. Open `index.html` in a web browser
3. That's it! No build process or dependencies required.

### GitHub Pages Deployment

1. Push this repository to GitHub
2. Go to your repository Settings → Pages
3. Select the branch (usually `main` or `master`)
4. Select the folder (usually `/ (root)`)
5. Click Save
6. Your site will be live at `https://[username].github.io/[repository-name]`

### Custom Domain (Optional)

If you want to use a custom domain:
1. Add a `CNAME` file in the root directory with your domain name
2. Configure DNS settings with your domain provider
3. Update GitHub Pages settings with your custom domain

## Customization

### Colors

Edit the CSS variables in `styles.css`:

```css
:root {
    --color-primary: #0066cc;      /* Primary accent color */
    --color-text: #1a1a1a;         /* Main text color */
    --color-text-light: #666666;   /* Secondary text */
    --color-border: #e0e0e0;       /* Border color */
}
```

### Content

- Update contact information in the Contact section
- Replace placeholder text with your actual content
- Update social media links
- Replace placeholder headshot SVG with your actual image

### Form Submission

The contact form currently shows a success toast but doesn't actually send emails. To enable form submission:

1. Use a service like [Formspree](https://formspree.io/), [Netlify Forms](https://www.netlify.com/products/forms/), or [EmailJS](https://www.emailjs.com/)
2. Update the form submission handler in `script.js`
3. Add the service endpoint URL

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

This project is open source and available for personal or commercial use.

## Notes

- No patient information should be submitted through the contact form
- This site is for professional communication only and does not provide medical advice
- All placeholder content should be replaced with actual information before going live

