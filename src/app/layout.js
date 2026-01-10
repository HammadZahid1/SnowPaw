import './globals.css';

export const metadata = {
  title: 'Snowpaw Project',
  description: 'A winter scene with Snowpaw',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}