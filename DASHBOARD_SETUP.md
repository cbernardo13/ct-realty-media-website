# CT Realty Media - Modern Dashboard Setup

I have prepared the code to connect your website to a **Sanity.io** dashboard. This will allow you to edit all your content (text, images, SEO tags, Alt text) without touching any code.

## How to Activate Your Dashboard (3 Simple Steps)

### 1. Create Your Free Account
Go to [Sanity.io](https://www.sanity.io/) and create a free account. It is free forever for sites of this size.

### 2. Create a Project
- Click "Create New Project."
- Name it "CT Realty Media."
- Choose the "Production" dataset.

### 3. Link the Dashboard
Once the project is created, you will see a **Project ID** (a string of letters and numbers).
- Open the file: `CT-Realty-Media-Site/src/lib/sanity.js`
- Replace `'YOUR_PROJECT_ID'` with your actual Project ID.

---

## What can you do in the Dashboard?

### 🛡️ SEO Management
You will have a "Global SEO" tab where you can:
- Change the **Main Title** and **Description**.
- Set the image that appears when you text the link to someone (Social Share).
- Add high-level **Keywords** for Google.

### 📸 Content & Alt Text
For every image you upload (Services, Hero, etc.), you can now add **Alt Text** directly. This is crucial for AEO (AI/Search results) and accessibility.

### 💼 Services
Easily add a new service (like "Virtual Staging") or update pricing/descriptions on the fly.

---

### Why this is better than WordPress:
1. **Unbreakable**: There are no "plugins" that can crash your site. 
2. **Instant Speed**: Your site remains a high-performance React app.
3. **Clean Interface**: The dashboard only shows you what you *actually* need to edit, instead of a thousand confusing WordPress menus.
