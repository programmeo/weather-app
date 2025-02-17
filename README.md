# Weather App

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying [`app/page.js`](app/page.js). The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Features

- Fetches weather data from a free weather API.
- Stores weather data in local storage.
- Simple and clean user interface.

## Components

- [`Datafetch`](app/components/Datafetch.js): Fetches weather data from the API and stores it in local storage.
- [`Card`](app/components/Card.js): Displays weather data in a card format.

## Environment Variables

To run this project, you will need to add the following environment variables to your `.env` file:

```
NEXT_PUBLIC_API_KEY=your_api_key_here
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!
