# Kapunka Website

A modern, responsive website for Kapunka - a premium skincare brand providing pure argan oil-based care for sensitive skin. Built with Next.js 15, TypeScript, and Tailwind CSS, featuring multi-language support and an admin panel for content management.

## 🌟 Features

- **Multi-language Support**: Full support for English, Spanish, and Portuguese
- **Responsive Design**: Mobile-first design that works beautifully on all devices
- **Admin Panel**: WordPress-style content management system
- **Modern UI/UX**: Clean, minimalist design inspired by Typology but adapted to Kapunka's brand guidelines
- **Brand Compliance**: Follows Kapunka's "quiet strength" and "pure care" ethos
- **Performance Optimized**: Built with Next.js 15 and optimized for speed
- **SEO Ready**: Proper meta tags, structured data, and clean URLs
- **Netlify Deployable**: Pre-configured for easy deployment to Netlify

## 🎨 Brand Design

### Color Palette
The website uses Kapunka's "Earthy Sophistication" palette:
- **Sage Light**: `#C9D3CA`
- **Sage Medium**: `#929C92`
- **Taupe**: `#A39384`
- **Charcoal**: `#161313`

### Typography
- **Primary**: Inter (clean, modern sans-serif)
- **Secondary**: DM Serif Display (for emphasis)

### Design Philosophy
- **Quiet Strength**: Calm, reassuring, and human tone
- **Pure Care**: Minimalist design with ample white space
- **Natural Elements**: Focus on textures, human touch, and warm lighting

## 🚀 Getting Started

### Prerequisites
- Node.js 18 or higher
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd kapunka-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up the database**
   ```bash
   npm run db:push
   npm run db:generate
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the website.

## 📁 Project Structure

```
kapunka-website/
├── src/
│   ├── app/
│   │   ├── [locale]/          # Internationalized pages
│   │   │   ├── layout.tsx    # Locale layout
│   │   │   ├── page.tsx      # Homepage
│   │   │   ├── products/     # Products page
│   │   │   ├── method/       # Method page
│   │   │   ├── story/        # Story page
│   │   │   ├── professionals/ # Professionals page
│   │   │   └── contact/      # Contact page
│   │   ├── admin/            # Admin panel
│   │   └── layout.tsx        # Root layout (redirects to /en)
│   ├── components/
│   │   ├── layout/           # Layout components
│   │   │   ├── Header.tsx
│   │   │   └── Footer.tsx
│   │   └── ui/              # shadcn/ui components
│   ├── i18n/
│   │   └── request.ts       # Internationalization config
│   └── lib/                 # Utility functions
├── styles/
│   └── globals.css       # Global styles
├── messages/                # Translation files
│   ├── en.json             # English
│   ├── es.json             # Spanish
│   └── pt.json             # Portuguese
├── public/                 # Static assets
├── prisma/                 # Database schema
├── netlify.toml           # Netlify configuration
├── next.config.ts         # Next.js configuration
├── tailwind.config.ts     # Tailwind CSS configuration
├── package.json           # Dependencies and scripts
└── README.md              # This file
```

## 🌍 Internationalization

The website supports three languages: English (default), Spanish, and Portuguese. The internationalization is handled by `next-intl`.

### Adding New Languages

1. **Create translation file**
   ```bash
   # Create new translation file in messages/
   touch messages/xx.json
   ```

2. **Update configuration**
   - Add the new language code to `src/i18n/request.ts`
   - Update the middleware in `src/middleware.ts`

3. **Add translations**
   - Copy the structure from existing files and translate the content

### Managing Translations

All translations are stored in the `messages/` directory:
- `en.json` - English translations
- `es.json` - Spanish translations
- `pt.json` - Portuguese translations

## 🛠 Admin Panel

The admin panel provides a WordPress-like interface for managing website content. Access it at `/admin` (requires authentication in production).

### Features

- **Content Management**: Edit text content across all pages
- **Media Management**: Upload and manage images
- **Design Settings**: Customize colors and fonts
- **Multi-language Support**: Manage content for all languages
- **Export/Import**: Backup and restore content

### Accessing the Admin Panel

1. **Development**: Navigate to `http://localhost:3000/admin`
2. **Production**: Set up proper authentication (currently uses simple token auth)

### Managing Content

1. **Homepage Content**
   - Hero section (title, subtitle, description, CTA)
   - Features section (titles and descriptions)

2. **Products Content**
   - Product information, pricing, and descriptions

3. **Design Settings**
   - Brand colors
   - Typography settings

4. **Media Files**
   - Image upload and management
   - File organization

## 🎨 Customization

### Brand Colors

To customize brand colors, edit the CSS variables in `styles/globals.css`:

```css
:root {
  --kapunka-sage-light: #C9D3CA;
  --kapunka-sage-medium: #929C92;
  --kapunka-taupe: #A39384;
  --kapunka-charcoal: #161313;
}
```

### Typography

To change fonts, update the Tailwind configuration in `tailwind.config.ts` and add the required font imports.

### Content

All content can be managed through the admin panel or by editing the translation files in the `messages/` directory.

## 🚀 Deployment

### Netlify Deployment

The project is pre-configured for deployment to Netlify:

1. **Connect to GitHub**
   - Create a Netlify account
   - Connect your GitHub repository

2. **Configure Build Settings**
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Node version: 18

3. **Environment Variables** (if needed)
   - Set any required environment variables in the Netlify dashboard

4. **Deploy**
   - Netlify will automatically deploy on every push to the main branch

### Manual Deployment

```bash
# Build the project
npm run build

# Export static files (if using static export)
npm run export

# Deploy to any static hosting service
```

## 📱 Responsive Design

The website is fully responsive and optimized for:
- **Mobile**: 320px and up
- **Tablet**: 768px and up
- **Desktop**: 1024px and up
- **Large Desktop**: 1440px and up

## 🔧 Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run db:push      # Push database schema
npm run db:generate  # Generate Prisma client
npm run db:migrate   # Run database migrations
```

### Code Style

- **TypeScript**: Strict TypeScript configuration
- **ESLint**: Code linting with Next.js rules
- **Prettier**: Code formatting (configured in .prettierrc)
- **Component Structure**: Functional components with hooks

### Contributing

1. Follow the existing code style
2. Use TypeScript for all new code
3. Add comments for complex logic
4. Test thoroughly before submitting

## 📸 Images and Assets

### Placeholder Images

The website uses placeholder images that can be easily replaced:
- **Hero Section**: Gradient backgrounds with brand colors
- **Product Images**: Colored placeholders with product information
- **Method Images**: Icon-based illustrations

### Replacing Images

1. **Upload via Admin Panel**: Use the media management section
2. **Manual Replacement**: Replace files in the `public/` directory
3. **Optimization**: Ensure images are optimized for web (WebP format recommended)

## 🔍 SEO Best Practices

The website includes:
- **Meta Tags**: Proper title and description tags
- **Structured Data**: Schema.org markup for better search understanding
- **Clean URLs**: Human-readable URLs with proper structure
- **Image Optimization**: Alt tags and proper image naming
- **Performance**: Fast loading times and optimized assets

## 🛡️ Security

- **XSS Protection**: Built-in Next.js security features
- **CSRF Protection**: Form protection mechanisms
- **Secure Headers**: Proper security headers configured
- **Authentication**: Admin panel requires authentication (in production)

## 📄 License

This project is licensed under the MIT License. See the LICENSE file for details.

## 🤝 Support

For support and questions:
- **Email**: info@kapunka.com
- **GitHub Issues**: Create an issue for bugs or feature requests
- **Documentation**: Check the `/docs` directory for detailed guides

## 📈 Performance

The website is optimized for performance:
- **Next.js 15**: Latest version with improved performance
- **Static Generation**: Pre-rendered pages for better SEO and performance
- **Image Optimization**: Next.js Image component for automatic optimization
- **Code Splitting**: Automatic code splitting for faster loads
- **Caching**: Proper caching strategies for static assets

## 🔄 Updates and Maintenance

### Regular Updates

- **Dependencies**: Keep dependencies up to date
- **Security**: Regular security updates and patches
- **Content**: Update content through the admin panel
- **Performance**: Monitor and optimize performance metrics

### Backup Strategy

- **Content**: Regular exports from the admin panel
- **Database**: Database backups (if using database features)
- **Media**: Regular backups of uploaded media files

---

Built with ❤️ for Kapunka - "Quiet strength. Pure care."