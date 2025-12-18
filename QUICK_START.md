# 🚀 Quick Start Guide - Cycle Logic Colombia Tours

## ⚡ Get Running in 5 Minutes

### Step 1: Extract & Navigate
```bash
unzip cycle-logic-colombia.zip
cd cycle-logic-colombia
```

### Step 2: Install Dependencies
```bash
npm install
```
⏱️ Takes ~2 minutes

### Step 3: Run Development Server
```bash
npm run dev
```
🌐 Opens at: http://localhost:5173

### Step 4: View Your Site!
Open browser and navigate to the local URL. You should see:
- ✅ Homepage with hero section
- ✅ Navigation menu working
- ✅ All pages accessible
- ✅ Responsive design working

---

## 📸 Adding Your Photos (Required)

Your site needs tour photos. Replace these placeholders:

### Priority 1: Homepage Hero
File: `src/components/sections/HeroSection.tsx`
Line: ~6 (replace gradient with image)
```tsx
// Current:
<div className="w-full h-full bg-gradient-to-br from-primary via-blue-600 to-amber-600" />

// Replace with:
<img src="/images/hero-andes.jpg" className="w-full h-full object-cover" alt="Cycling in Colombia" />
```

### Priority 2: Moment Cards
File: `src/components/sections/MomentCards.tsx`
Add 4 images for: Dawn, Andes Ascent, Market Day, Summit

### Priority 3: Gallery
File: `src/pages/Gallery.tsx`
Add 60-80 photos across 6 categories

---

## 🏗️ Build for Production

### Build Command
```bash
npm run build
```
Creates `dist/` folder with optimized files.

### Preview Build
```bash
npm run preview
```
Test production build locally before deploying.

---

## 🌐 Deploy to Netlify (Recommended)

### Option A: Drag & Drop
1. Build: `npm run build`
2. Go to: https://app.netlify.com/drop
3. Drag `dist/` folder
4. Done! Site is live

### Option B: GitHub Integration
1. Push code to GitHub
2. Connect repo to Netlify
3. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Deploy!

### Option C: Netlify CLI
```bash
npm install -g netlify-cli
netlify login
netlify deploy --prod
```

---

## 🔧 Customization

### Update Contact Info
Files to edit:
- `src/components/layout/Footer.tsx` (lines 50-70)
- `src/pages/Contact.tsx` (lines 20-60)

### Update Tour Dates
File: `src/pages/Booking.tsx` (lines 10-30)

### Update Pricing
File: `src/pages/Booking.tsx` (lines 80-100)

### Change Colors
File: `src/index.css` (lines 10-30)

---

## 🐛 Troubleshooting

### "npm install" fails
- Ensure Node.js 18+ installed
- Delete `node_modules/` and `package-lock.json`
- Run `npm install` again

### "Module not found" error
- Run: `npm install`
- Restart dev server: `npm run dev`

### Page not loading
- Check console for errors
- Ensure all dependencies installed
- Try: `npm run build` to see build errors

### Images not showing
- Add images to `public/images/` folder
- Update image paths in components
- Rebuild: `npm run dev`

---

## 📁 Folder Structure Quick Reference

```
cycle-logic-colombia/
├── src/
│   ├── pages/          # 6 complete pages
│   ├── components/     # All components
│   ├── lib/            # Utilities
│   └── index.css       # Global styles
├── public/             # Static assets (add your images here)
├── package.json        # Dependencies
└── vite.config.ts      # Build config
```

---

## ✅ Pre-Launch Checklist

Before deploying:
- [ ] Added all tour photos
- [ ] Updated contact information
- [ ] Verified tour dates and pricing
- [ ] Tested on mobile device
- [ ] Checked all page links work
- [ ] Ran production build: `npm run build`
- [ ] Previewed build: `npm run preview`
- [ ] Registered domain name
- [ ] Set up email forwarding

---

## 🎯 What Works Right Now

✅ All 6 pages fully functional
✅ Responsive navigation
✅ Contact form structure
✅ Gallery categories
✅ Booking system layout
✅ Testimonials section
✅ Footer with links
✅ 404 error page
✅ SEO meta tags
✅ Mobile responsive

---

## 📞 Need Help?

1. Check `README.md` for detailed instructions
2. Review `IMPLEMENTATION_GUIDE.md` for specifications
3. Check `FILE_STRUCTURE.md` for file locations

---

## 🎉 You're Ready!

Your website is production-ready. Just add photos and deploy!

**Estimated time to live site**: 30 minutes with photos ready
