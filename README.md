# DyslexiaBuddy Website

A modern, accessible website for DyslexiaBuddy - an AI reading coach application designed to help people with dyslexia improve their reading confidence and speed.

## 🚀 Features

- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Accessibility First** - Built with dyslexia-friendly fonts and accessibility features
- **Interactive Demo** - Try reading customization tools directly in the browser
- **Modern UI** - Beautiful gradients, animations, and polished components
- **Fast Performance** - Optimized static site with CDN resources

## 📁 Project Structure

```
/
├── index.html              # Main entry point
├── css/
│   └── styles.css          # Custom styles and animations
├── assets/
│   ├── js/
│   │   └── script.js       # JavaScript functionality
│   └── images/             # Image assets
├── vercel.json             # Vercel deployment configuration
├── .gitignore              # Git ignore rules
└── README.md               # This file
```

## 🛠️ Tech Stack

- **HTML5** - Semantic markup
- **Tailwind CSS** - Utility-first CSS framework (via CDN)
- **Phosphor Icons** - Icon library
- **Google Fonts** - Atkinson Hyperlegible (dyslexia-friendly font)
- **Vanilla JavaScript** - No build process required

## 🚀 Deployment

### Deploy to Vercel

1. **Connect your repository to Vercel:**
   - Push your code to GitHub/GitLab/Bitbucket
   - Import the repository in [Vercel Dashboard](https://vercel.com/dashboard)
   - Vercel will auto-detect the static site configuration

2. **Manual deployment via Vercel CLI:**
   ```bash
   npm i -g vercel
   vercel
   ```

3. **Environment Variables:**
   - No environment variables required for this static site

### Local Development

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd dyslexiabuddy-website
   ```

2. **Serve locally:**
   ```bash
   # Using Python
   python3 -m http.server 8000
   
   # Using Node.js (if you have http-server installed)
   npx http-server -p 8000
   ```

3. **Open in browser:**
   ```
   http://localhost:8000
   ```

## 📝 Configuration

### Vercel Configuration

The `vercel.json` file includes:
- SPA routing configuration (all routes redirect to index.html)
- Security headers (XSS protection, frame options, etc.)
- Cache headers for static assets

### Customization

- **Colors**: Edit Tailwind config in `index.html` (lines 20-51)
- **Styles**: Modify `css/styles.css`
- **Functionality**: Update `assets/js/script.js`

## 🎨 Features Overview

- **Hero Section** - Compelling introduction with CTA buttons
- **Interactive Demo** - Try dyslexia-friendly reading settings
- **Features Grid** - Showcase of app capabilities
- **Testimonials** - Social proof from users
- **Pricing** - Clear pricing tiers
- **FAQ** - Common questions answered
- **Footer** - Links and company information

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔒 Security

- Security headers configured in `vercel.json`
- XSS protection enabled
- Content type options set
- Frame options configured

## 📄 License

Copyright © 2024 Onlabs Infotech. All rights reserved.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📧 Contact

For questions or support, please contact [your-email@example.com]
