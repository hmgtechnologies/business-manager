# 🏪 HMG Enterprise — Business Manager v4.0

> **Technology-Powered Business Intelligence**
> Complete enterprise business management system by **HMG Concepts** (est. 2015).
> Founded by **Adewale Samson Adeagbo** — Educator, Data Scientist, AI-Augmented Solutions Developer.
> No server. No subscription. No AI API. **100% free forever.**

---

## 📋 Table of Contents

1. [About This System](#about-this-system)
2. [What's New in Enterprise v4.0](#whats-new-in-enterprise-v40)
3. [Complete Feature Explanations (22 Features)](#complete-feature-explanations)
4. [File Structure](#file-structure)
5. [Deployment: Step-by-Step Guide](#deployment-step-by-step-guide)
6. [How to Use — Daily Workflow](#how-to-use--daily-workflow)
7. [Data & Storage](#data--storage)
8. [Backup & Restore](#backup--restore)
9. [Installing as a Mobile App (PWA)](#installing-as-a-mobile-app-pwa)
10. [Keyboard Shortcuts](#keyboard-shortcuts)
11. [Troubleshooting](#troubleshooting)
12. [About HMG Concepts](#about-hmg-concepts)

---

## About This System

HMG Enterprise is a **browser-based business management system** that works entirely offline. It is branded for **HMG Concepts** and runs on **free tools** — GitHub Pages for hosting, browser localStorage for data, Chart.js for charts (cached after first visit).

**Who it's for:** Retail shops, provision stores, pharmacies, wholesalers, food vendors, electronics sellers, service businesses, schools, consulting firms — any small-to-medium business.

---

## What's New in Enterprise v4.0

| Feature | Description |
|---------|-------------|
| 👨‍💼 **Staff Management** | Employee directory, roles, performance tracking, salary records |
| 💰 **Budget Manager** | Monthly budgets by expense category, spending vs budget bars, over-budget alerts |
| 💳 **Credit/Debt Tracker** | Track credit sales, record payments, overdue alerts, WhatsApp reminders |
| 🏥 **Business Health Score** | Auto-calculated 0-100 score from profit margin, stock health, revenue, net position |
| 🚚 **Supplier Management** | Full supplier directory, contacts, categories, purchase tracking |
| 📝 **Business Journal** | Notes, to-dos, reminders, ideas with priority levels and due dates |
| 🎯 **Sales Targets** | Daily/weekly/monthly revenue goals with progress bars |
| 🎨 **5 Themes** | Dark Green, Dark Blue, Dark Purple, Dark Red, Light Mode |
| 📱 **WhatsApp Sharing** | Share receipts, reports, and notes via WhatsApp |
| 🧾 **Invoice Numbers** | Auto-generated (INV-YYYY-XXXX) |
| 📋 **Activity Audit Log** | Trail of all system actions |
| 📊 **Profit & Loss Reports** | Net profit = Gross Profit − Expenses |
| 🏧 **Cash Register** | Open/close with expected vs actual counting |
| 💸 **Expense Tracker** | 11 categories with monthly net profit calculator |
| 👥 **Customer Directory** | Auto-tracked spending, purchase history, WhatsApp contact |
| 🔄 **Duplicate Products** | Clone products for variants |
| 🧮 **Quick Calculator** | Built-in on Sales page |
| 🔔 **Notification System** | In-app notifications for credit sales and cleared debts |

---

## Complete Feature Explanations

### 📊 1. Live Dashboard (`index.html`)
Your business command center. Shows 8 KPI cards (Today Revenue, This Week, This Month, Today Profit, Today Expenses, All-Time Revenue, Stock Value, Outstanding Credits), Business Health Score (0-100 calculated from profit margin, stock health, revenue activity, net position), sales targets with progress bars, register status badge, stock alerts, credit alerts, recent sales table (with staff column), top products, and activity feed.

### 🛒 2. Sales Recording (`sales.html`)
Record every transaction: select product → price/stock auto-fills → enter quantity → optional discount/customer/payment/note → record. Features: Quick Select for top products, Repeat Last Sale, Quick Calculator, receipt with invoice number, print or share via WhatsApp, today's panel with running total and payment breakdown.

### 📦 3. Inventory Manager (`inventory.html`)
Manage product catalog: stats row, filter by name/SKU/category/stock, sort by name/stock/price/margin, per-product actions (restock, edit, duplicate, disable), margin % column, stock movement history.

### 💸 4. Expense Tracker (`expenses.html`)
Track all spending: 11 categories (Rent, Utilities, Salaries, Transport, Supplies, Maintenance, Marketing, Tax, Insurance, Food, Miscellaneous), category breakdown, net profit calculator (Revenue → Gross Profit → Expenses → Net Profit).

### 👥 5. Customer Directory (`customers.html`)
Customer management: auto-tracks spend/orders when customer name entered during sales, contact info, purchase history, sort by spend/orders/name/recent, WhatsApp button, CSV export.

### 🚚 6. Supplier Management (`suppliers.html`)
Track suppliers: company name, contact person, phone, email, category, address, notes (payment terms, delivery schedule), auto-tracked purchases, WhatsApp button.

### 👨‍💼 7. Staff Management (`staff.html`) — ENTERPRISE
Manage employees: name, role (Sales Associate, Cashier, Manager, Supervisor, Storekeeper, Accountant, Other), phone, email, monthly salary, notes. Auto-tracks each staff member's total sales and revenue. Performance bars show monthly comparison. Enable/disable staff. CSV export.

### 💰 8. Budget Manager (`budgets.html`) — ENTERPRISE
Set monthly budgets by expense category. Visual progress bars show spent vs budget with color coding (green < 80%, purple 80-100%, red over budget). Track total budget, total spent, remaining, and number of categories over budget. Edit or delete budgets.

### 💳 9. Credit/Debt Tracker (`credits.html`) — ENTERPRISE
Record credit sales: customer name, product, amount, due date, phone. Track partial payments with payment history. Visual progress bars. Status badges (Pending, Paid, Overdue). Filter by status, search by customer. WhatsApp reminders to customers. CSV export. Auto-notifications when debts are cleared.

### 🏧 10. Cash Register (`register.html`)
Morning: open with starting cash. Evening: system calculates expected cash (starting + cash sales − cash expenses), you enter actual counted cash, discrepancy highlighted. Register history, daily summary with payment breakdown.

### 📝 11. Business Journal (`journal.html`)
Daily notes, to-dos, reminders: 5 types (To-Do, Reminder, Idea, Meeting, General), 3 priority levels (High/Medium/Low), due dates, mark complete, share via WhatsApp, filter by type.

### 📈 12. Reports & Analytics (`reports.html`)
8 KPI cards + 6 charts (Revenue over time with profit overlay, Sales by category, Payment methods, Top 10 products, Profit vs Expenses, Expense categories). Top products table, P&L summary, full sales history (searchable, paginated), storage usage, backup/restore.

### ⚙️ 13. Settings (`settings.html`)
Business info, financial settings, sales targets, product categories, 5 themes, PIN lock, danger zone (clear data, factory reset), keyboard shortcuts reference.

### ⌨️ 14. Keyboard Shortcuts
Alt+D Dashboard, Alt+S Sales, Alt+I Inventory, Alt+E Expenses, Alt+C Customers, Alt+U Suppliers, Alt+G Register, Alt+N Journal, Alt+O Staff, Alt+B Budgets, Alt+T Credits, Alt+R Reports.

### 📱 15. PWA / Install as App
Install on phone/tablet home screen, works full-screen offline.

### 📥 16. CSV Export
Download sales, inventory, expenses, customers, suppliers, staff, and credits as CSV files.

### 💾 17. Full Backup/Restore
Export ALL data (16 data stores) as JSON, restore on any device.

### 🧾 18. Receipt Generator
Auto-receipts with HMG branding, invoice numbers, print or WhatsApp.

### 🔔 19. Notification System
In-app notifications for credit sales and debt clearances.

### 📊 20. Business Health Score
0-100 score calculated from 4 metrics: profit margin, stock health, revenue activity, net position.

### 🎯 21. Sales Targets
Daily/weekly/monthly revenue goals with color-coded progress bars.

### 🎨 22. Theme Switcher
5 themes with live preview: Dark Green, Dark Blue, Dark Purple, Dark Red, Light.

---

## File Structure

```
enterprise/
├── index.html          Dashboard with Health Score, Credits KPI
├── sales.html          Record sales + calculator + repeat + WhatsApp
├── inventory.html      Products + stock + margin + movements
├── expenses.html       Expense tracker + net profit calculator
├── customers.html      Customer directory + purchase history
├── suppliers.html      Supplier management
├── register.html       Cash register open/close
├── journal.html        Business notes + to-dos + reminders
├── staff.html          ENTERPRISE: Staff management + performance
├── budgets.html        ENTERPRISE: Budget manager + tracking
├── credits.html        ENTERPRISE: Credit/debt tracker + payments
├── reports.html        Charts + P&L + backup/restore
├── settings.html       Config + themes + targets + security
├── manifest.json       PWA manifest (HMG branded)
├── sw.js               Service worker (offline for all 13 pages)
├── README.md           This documentation
├── css/
│   └── style.css       All styles (enterprise components included)
├── js/
│   ├── storage.js      Core engine (16 data stores)
│   └── app.js          Shared utilities + themes + PIN + WhatsApp
└── data/
    ├── config.json     HMG Concepts default configuration
    ├── products.json   Sample products catalog
    └── sales.json      Empty sales log
```

---

## Deployment: Step-by-Step Guide

### Prerequisites
- A computer, smartphone, or tablet
- A web browser (Chrome recommended)
- 15–20 minutes

---

### OPTION A: GitHub Pages (Recommended)

#### Step 1: Create a GitHub Account
1. Open your browser → Go to **https://github.com**
2. Click **Sign up** (top-right corner)
3. Enter your **email** → Click Continue
4. Create a **password** → Click Continue
5. Choose a **username** (e.g., `cssadewale`) → Click Continue
6. Complete the verification puzzle
7. Check your email for a verification code → Enter it
8. Click **Create account**
9. Choose the **Free** plan → Skip personalization questions

#### Step 2: Create a New Repository
1. Once logged in, click the **+** icon (top-right)
2. Select **New repository**
3. **Repository name:** type `hmg-enterprise` (lowercase, no spaces)
4. Select **Public** (required for free GitHub Pages)
5. ✅ Check **Add a README file**
6. Click **Create repository**
7. Your repo URL: `https://github.com/YOURUSERNAME/hmg-enterprise`

#### Step 3: Upload All Files

**Method 1: GitHub Desktop (Recommended)**

1. Download **GitHub Desktop** from **https://desktop.github.com**
2. Install and sign in with your GitHub account
3. Click **Clone a repository from the Internet...**
4. Select `hmg-enterprise` → Choose a folder → Click **Clone**
5. Open the cloned folder on your computer
6. Inside it, create folders: `css`, `js`, `data`
7. Copy files from the `enterprise/` folder:

```
hmg-enterprise/          (your cloned folder)
├── index.html           ← copy these files
├── sales.html
├── inventory.html
├── expenses.html
├── customers.html
├── suppliers.html
├── register.html
├── journal.html
├── staff.html
├── budgets.html
├── credits.html
├── reports.html
├── settings.html
├── manifest.json
├── sw.js
├── README.md
├── css/
│   └── style.css        ← paste the CSS here
├── js/
│   ├── storage.js       ← paste here
│   └── app.js           ← paste here
└── data/
    ├── config.json      ← paste here
    ├── products.json    ← paste here
    └── sales.json       ← paste here
```

8. Open **GitHub Desktop** — you'll see all files listed
9. Type a commit message: `Upload HMG Enterprise v4.0`
10. Click **Commit to main**
11. Click **Push origin** (uploads to GitHub)
12. Wait 30 seconds to 2 minutes

**Method 2: Browser Upload (No Software Needed)**

1. In your GitHub repo, click **Add file → Upload files**
2. Drag and drop all root files (index.html, sales.html, etc.)
3. Click **Commit changes**
4. To create subfolders: click **Add file → Create new file**
5. Type `css/style.css` → Paste CSS → Commit
6. Type `js/storage.js` → Paste → Commit
7. Type `js/app.js` → Paste → Commit
8. Type `data/config.json` → Paste → Commit
9. Repeat for `data/products.json` and `data/sales.json`

#### Step 4: Enable GitHub Pages
1. In your repo, click **Settings** tab
2. In left sidebar, click **Pages**
3. Under **Build and deployment**:
   - **Source:** Deploy from a branch
   - **Branch:** Select `main`
   - **Folder:** Select `/ (root)`
4. Click **Save**
5. Wait **2–5 minutes**
6. A green banner appears with your URL:
   **`https://YOURUSERNAME.github.io/hmg-enterprise/`**

#### Step 5: Verify
1. Open the URL in your browser
2. You should see **HMG Concepts Enterprise** dashboard
3. Greeting: "Good morning/afternoon/evening, Adewale Samson Adeagbo"
4. Click through all 13 pages
5. First load needs internet (caches fonts + Chart.js)
6. After that, works **100% offline**

---

### OPTION B: Netlify Drop (Fastest)

1. Go to **https://app.netlify.com/drop**
2. Create a free account
3. **Drag and drop** the `enterprise/` folder onto the page
4. Wait 30 seconds — deployed!
5. Rename: Site settings → Change site name → e.g., `hmg-enterprise.netlify.app`
6. Free HTTPS, instant updates

### OPTION C: Any Static Hosting

Upload all files to any static hosting service:
- **Vercel** (https://vercel.com) — free
- **Cloudflare Pages** (https://pages.cloudflare.com) — free
- **Firebase Hosting** (https://firebase.google.com/products/hosting) — free tier
- **Render** (https://render.com) — free static sites

---

## How to Use — Daily Workflow

### Morning
1. Open HMG Enterprise → **Register** → Enter starting cash → **Open**
2. Check **Dashboard** for health score and alerts
3. Review **Journal** for pending to-dos
4. Check **Credits** for overdue debts

### Throughout the Day
1. **Sales page** → Record each sale (assign to staff member)
2. **Expenses** → Log any spending
3. **Credits** → Record any credit sales
4. **Journal** → Jot notes and reminders

### End of Day
1. **Register** → Count cash → Close register
2. Check **Budgets** → See today's spending vs limits
3. **Credits** → Record any debt payments received
4. **Reports** → **Backup** to save the day's data

### Weekly
- **Monday:** Review weekly report on Reports page
- **Friday:** Download backup, share summary via WhatsApp
- **Monthly:** Review P&L, update budgets, assess staff performance

---

## Data & Storage

All data in **browser localStorage** (5-10MB capacity, enough for thousands of records).

| Store | Key | Purpose |
|-------|-----|---------|
| Config | `st_config` | Business settings |
| Products | `st_products` | Product catalog |
| Sales | `st_sales` | Transaction log |
| Expenses | `st_expenses` | Expense records |
| Customers | `st_customers` | Customer directory |
| Suppliers | `st_suppliers` | Supplier directory |
| Staff | `st_staff` | Employee records |
| Register | `st_register` | Open/close events |
| Credits | `st_credits` | Credit sales & payments |
| Budgets | `st_budgets` | Monthly budgets |
| Notes | `st_notes` | Journal entries |
| Targets | `st_targets` | Revenue goals |
| Activity | `st_activity` | Audit log |
| Notifications | `st_notifs` | In-app notifications |
| Theme | `st_theme` | Visual theme |
| PIN | `st_pin` | Security PIN |

---

## Backup & Restore

### Backup
1. Go to **Reports** → Click **💾 Backup**
2. JSON file downloads with ALL 16 data stores
3. Save to Google Drive, WhatsApp to yourself, USB, email

### Restore
1. Go to **Reports** → Click **🔄 Restore**
2. Select backup JSON → Confirm → Page reloads

**Best practice:** Backup every **Friday**, keep last **4 backups** in **2+ locations**.

---

## Installing as a Mobile App (PWA)

### Android (Chrome):
1. Open your URL → Tap **⋮** → **Add to Home screen** → **Add**

### iPhone (Safari):
1. Open your URL → Tap **Share** → **Add to Home Screen** → **Add**

Works full-screen, no browser bar, works offline.

---

## Keyboard Shortcuts

| Shortcut | Page | Shortcut | Page |
|----------|------|----------|------|
| Alt+D | Dashboard | Alt+N | Journal |
| Alt+S | Sales | Alt+O | Staff |
| Alt+I | Inventory | Alt+B | Budgets |
| Alt+E | Expenses | Alt+T | Credits |
| Alt+C | Customers | Alt+R | Reports |
| Alt+U | Suppliers | | |

---

## Troubleshooting

**"My data disappeared"** → Same browser + same device. Backup weekly.

**"Charts not showing"** → Visit Reports once with internet to cache Chart.js.

**"New pages (Staff, Budgets, Credits) show 404"** → Upload ALL 13 HTML files. Check filenames are lowercase.

**"PIN not working"** → Settings → Remove PIN → Set again.

**"GitHub Pages shows 404"** → Wait 5 minutes. Check `index.html` exists (lowercase).

---

## About HMG Concepts

**HMG Concepts** is a multi-industry solutions company established in 2015 by **Adewale Samson Adeagbo** — educator with 15+ years experience, data scientist, and AI-Augmented Solutions Developer. B.Sc./Ed in Computer Science Education from Lagos State University. 3MTT Data Science (2025).

**Subsidiaries:** HMG Academy (EdTech), HMG Technologies (Software), HMG Media (Content)

**Websites:**
- 🌐 [cssadewale.pages.dev](https://cssadewale.pages.dev) — Portfolio
- 🌐 [hmgconcepts.pages.dev](https://hmgconcepts.pages.dev) — Company
- 🌐 [hmgacademy.pages.dev](https://hmgacademy.pages.dev) — Virtual School

---

*HMG Enterprise v4.0.0 — Technology-Powered Business Intelligence*
*Built by Adewale Samson Adeagbo — Founder & Director, HMG Concepts*
*Free forever. No ads. No subscription. No AI API required.*
