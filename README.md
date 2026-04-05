# WebP Image Converter

A professional, fully functional React-based web application for converting PNG and JPG images to WebP format. Built with modern web technologies and optimized for performance.

## 🚀 Features

- **Batch Conversion**: Convert up to 20 images simultaneously
- **Drag & Drop**: Intuitive drag-and-drop interface
- **Client-Side Processing**: All conversions happen in your browser - 100% private and secure
- **Real-Time Progress**: Visual feedback during conversion
- **Download Options**: Download individual files or all as ZIP
- **Compression Stats**: See file size reduction for each image
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **Modern UI**: Clean, professional interface with smooth animations

## 📋 Requirements

- Node.js 16+ 
- npm or yarn

## 🛠️ Installation

1. Clone or extract the project:
```bash
cd webp-converter-react
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

## 📦 Building for Production

To create an optimized production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

To preview the production build:

```bash
npm run preview
```

## 🏗️ Project Structure

```
webp-converter-react/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── UploadZone.jsx
│   │   ├── FormatSelector.jsx
│   │   ├── FileList.jsx
│   │   ├── FileCard.jsx
│   │   ├── ActionButtons.jsx
│   │   ├── InfoSection.jsx
│   │   ├── Footer.jsx
│   │   └── Toast.jsx
│   ├── utils/
│   │   ├── imageConverter.js
│   │   ├── downloadHelper.js
│   │   └── helpers.js
│   ├── styles/
│   │   └── index.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🎯 Usage

1. **Upload Images**: 
   - Drag and drop PNG/JPG files into the upload zone
   - Or click "Choose Files" to browse your files
   - Maximum 20 files, 100MB per file

2. **Convert**: 
   - Click "Convert to WebP" button
   - Watch real-time progress for each image

3. **Download**:
   - Download individual converted files
   - Or download all as a ZIP archive

## 🔧 Technologies Used

- **React 18**: Modern React with Hooks
- **Vite**: Lightning-fast build tool
- **React Dropzone**: Drag and drop file upload
- **JSZip**: ZIP file creation for batch downloads
- **Canvas API**: Client-side image conversion
- **CSS3**: Modern styling with CSS Grid and Flexbox

## ⚙️ Configuration

### Conversion Settings

Default conversion settings can be modified in `src/utils/imageConverter.js`:

```javascript
const options = {
  quality: 0.9,        // WebP quality (0-1)
  maxWidthOrHeight: undefined  // Optional resize
};
```

### File Limits

Limits can be adjusted in `src/App.jsx`:

```javascript
const MAX_FILES = 20;
const MAX_FILE_SIZE = 100 * 1024 * 1024; // 100MB
```

## 🎨 Customization

### Colors

Edit CSS variables in `src/styles/index.css`:

```css
:root {
  --color-primary: #ff4d4f;
  --color-success: #16a34a;
  --color-error: #dc2626;
  /* ... more colors */
}
```

### Branding

Update the logo and title in `src/components/Header.jsx` and `index.html`.

## 📱 Browser Support

- Chrome/Edge 80+
- Firefox 75+
- Safari 14+
- Opera 67+

Note: WebP encoding is supported in all modern browsers via the Canvas API.

## 🔒 Privacy & Security

- **No Server Uploads**: All processing happens in your browser
- **No Data Collection**: Your images never leave your device
- **No Storage**: Files are automatically cleared after conversion
- **100% Secure**: Complete privacy guaranteed

## 🚀 Performance

- **Client-Side Processing**: No server latency
- **Optimized Conversion**: Efficient Canvas API usage
- **Lazy Loading**: Components load only when needed
- **Code Splitting**: Optimized bundle sizes
- **Responsive**: Fast on all devices

## 🐛 Troubleshooting

### Images not converting

- Check browser console for errors
- Ensure files are valid PNG/JPG format
- Verify file sizes are under 100MB

### Drag and drop not working

- Try clicking "Choose Files" instead
- Check browser compatibility
- Disable browser extensions that might interfere

### Download not starting

- Check browser's download settings
- Ensure pop-ups are not blocked
- Try downloading individual files

## 📝 License

MIT License - feel free to use this project for personal or commercial purposes.

## 🤝 Contributing

Contributions are welcome! Feel free to submit issues or pull requests.

## 📧 Support

For support, please open an issue in the project repository.

## 🎉 Credits

Built with ❤️ using React and modern web technologies.

---

**Made for high-performance, privacy-focused image conversion** 🚀
