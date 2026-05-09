# eriCare 🩵

**eriCare** is a premium, full-stack healthcare service portal designed to bridge the gap between elderly individuals and verified healthcare professionals. The platform provides a seamless, trusted interface for families to book nursing care, physiotherapy, and daily assistance directly in their homes.

## 🚀 Tech Stack

*   **Frontend:** [Next.js](https://nextjs.org/) (App Router), [Tailwind CSS](https://tailwindcss.com/)
*   **Backend:** Next.js Server Components & Actions
*   **Database:** [SQLite](https://www.sqlite.org/)
*   **ORM:** [Prisma](https://www.prisma.io/)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)

## ✨ Key Features

*   **Verified Professional Directory:** Browse and filter verified caregivers based on specialization and experience.
*   **Service Catalog:** Transparent pricing and detailed descriptions for nursing, therapy, and assistance services.
*   **Premium UI:** A modern, accessible, and responsive interface designed with elderly users and their families in mind.
*   **Dynamic Data:** Powered by a live SQLite database for real-time content management.

## 🛠️ Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/YOUR_USERNAME/eriCare.git
cd eriCare
```

### 2. Install dependencies
```bash
npm install
```

### 3. Setup the Database
Initialize the SQLite database and seed it with initial data:
```bash
npx prisma db push
npx prisma db seed
```

### 4. Run the development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
