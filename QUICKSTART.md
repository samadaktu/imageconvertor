# Quick Start Guide

## Get Started in 3 Steps

### Step 1: Install Dependencies
```bash
npm install
```

This will install:
- React 18
- React Dropzone (for drag & drop)
- JSZip (for batch downloads)
- Browser Image Compression
- Vite (build tool)

### Step 2: Start Development Server
```bash
npm run dev
```

The app will open at `http://localhost:3000`

### Step 3: Use the Converter

1. **Upload Images**
   - Drag and drop PNG/JPG files
   - Or click "Choose Files"
   - Maximum 20 files, 100MB each

2. **Convert**
   - Click "Convert to WebP"
   - Watch real-time progress

3. **Download**
   - Download individual files
   - Or download all as ZIP

## Key Features

✅ Batch conversion (up to 20 images)
✅ Client-side processing (100% private)
✅ Real-time progress tracking
✅ Drag & drop interface
✅ Individual or bulk download
✅ Compression statistics
✅ Fully responsive design

## Available Commands

```bash
# Development
npm run dev          # Start dev server

# Production
npm run build        # Build for production
npm run preview      # Preview production build

# Code Quality
npm run lint         # Run ESLint
```

## File Limits

- **Maximum files**: 20 per batch
- **Maximum size**: 100MB per file
- **Supported formats**: PNG, JPG, JPEG
- **Output format**: WebP

## Conversion Settings

Default quality: 90%
- Higher quality = Larger files
- Lower quality = Smaller files

Edit in `src/utils/imageConverter.js` to customize.

## Browser Requirements

✅ Chrome 80+
✅ Firefox 75+
✅ Safari 14+
✅ Edge 80+

## Troubleshooting

**Problem**: `npm install` fails
**Solution**: Delete `node_modules` and `package-lock.json`, then try again

**Problem**: Port 3000 already in use
**Solution**: Kill the process or change port in `vite.config.js`

**Problem**: Images not converting
**Solution**: Check browser console for errors, verify file format

## Project Structure

```
src/
├── components/     # React components
├── utils/         # Helper functions
├── styles/        # CSS styles
├── App.jsx        # Main app component
└── main.jsx       # Entry point
```

## Next Steps

1. ✅ Test the conversion with sample images
2. ✅ Customize colors in `src/styles/index.css`
3. ✅ Update branding in header component
4. ✅ Deploy to production (see DEPLOYMENT.md)

## Need Help?

- Check README.md for detailed documentation
- See DEPLOYMENT.md for deployment instructions
- Open an issue for bugs or questions

---

**Happy Converting! 🚀**
