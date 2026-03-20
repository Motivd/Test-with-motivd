# TODOODO App

## Overview
TODOODO is a modern task management application built with Next.js and powered by Motivd Cloud backend. It helps users organize, track, and manage their daily tasks efficiently with a clean, intuitive interface.

## Features (MVP)
- ✅ Create, read, update, and delete tasks
- ✅ Mark tasks as complete/incomplete
- ✅ Organize tasks by categories or priority
- ✅ Real-time task synchronization
- ✅ Responsive design for mobile and desktop
- ✅ Dark mode support (optional)

## Tech Stack
- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Backend:** Motivd Cloud
- **Hosting:** Vercel
- **Database:** Motivd Cloud managed

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Motivd Cloud API credentials

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Motivd/Test-with-motivd.git
cd todoodo-app
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Configure `.env.local` with your Motivd Cloud credentials:
```
NEXT_PUBLIC_MOTIVD_API_URL=https://api.motivd.cloud
MOTIVD_API_KEY=your_motivd_api_key
```

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── api/               # API routes
├── components/            # Reusable React components
│   ├── TaskList.tsx
│   ├── TaskForm.tsx
│   └── TaskItem.tsx
├── lib/                   # Utility functions
│   ├── api.ts            # API client
│   └── types.ts          # TypeScript types
└── styles/               # Global styles
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## API Integration

The app integrates with Motivd Cloud for:
- Task CRUD operations
- Real-time updates
- Data persistence

See `src/lib/api.ts` for API client implementation.

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy!

```bash
vercel deploy
```

## Contributing

1. Create a feature branch
2. Make your changes
3. Submit a pull request

## License

MIT

## Support

For issues or questions, please open a GitHub issue.
