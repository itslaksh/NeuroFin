<div align="center">
  <img src="public/logo-sm.png" alt="NeuroFin Logo" width="80" />
  <h1>NeuroFin - AI-Powered Finance Platform</h1>
  <p>Manage Your Finances with Intelligence</p>
</div>

## 🌟 Introduction

NeuroFin is an innovative, one-stop financial management platform built with modern web technologies. It helps you track, analyze, and optimize your spending with real-time, AI-powered insights.

With features like automated tracking, intelligent categorizations, and detailed interactive charts, NeuroFin gives you full clarity over your personal finances.

## 🛠️ Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org) (App Router)
- **Styling:** [Tailwind CSS](https://tailwindcss.com) & [shadcn/ui](https://ui.shadcn.com)
- **Database ORM:** [Prisma](https://www.prisma.io/)
- **Authentication:** [Clerk](https://clerk.com/)
- **AI Integration:** [Google Generative AI (Gemini)](https://ai.google.dev/)
- **Security:** [Arcjet](https://arcjet.com/)
- **Background Jobs:** [Inngest](https://www.inngest.com/)
- **Email Notifications:** [Resend](https://resend.com/) & [React Email](https://react.email/)

## 🚀 Getting Started

Follow these steps to clone the repository and run the application locally.

### 1. Clone the repository

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env` file in the root directory by copying the `.env.example` file (if available) or adding the following keys. You will need to obtain API keys for each service:

```env
# Database Credentials
DATABASE_URL="your-database-connection-url"

# Clerk Authentication Keys
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="your-clerk-publishable-key"
CLERK_SECRET_KEY="your-clerk-secret-key"

# Arcjet Security
ARCJET_KEY="your-arcjet-key"

# Database Edge Connection
DIRECT_URL="your-database-direct-url"

# Gemini AI Key
GEMINI_API_KEY="your-gemini-api-key"

# Resend Email Key
RESEND_API_KEY="your-resend-api-key"

# Inngest Background Jobs
INNGEST_EVENT_KEY="your-inngest-event-key" 
INNGEST_LOGGING_KEY="your-inngest-logging-key"
```

### 4. Setup Prisma Database

Run the following command to generate the Prisma client based on the schema:

```bash
npx prisma generate
```

*Note: If you need to push the schema to your database, you can use `npx prisma db push`.*

### 5. Run the development server

```bash
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000).

## 📝 License

This project is open-source. Made with 💗 by Lakshay.
