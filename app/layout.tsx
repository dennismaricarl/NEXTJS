import '@/app/ui/global.css';
import {inter} from '@/app/ui/fonts';
 


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
         <body className={`{inter.className} antialised`}>{children}</body>
    </html>
  );
}

//Adding inter to the <body> element, the font will be applied throughout the application.
//antialised is  a Tailwind class which smooths out the font. Not necessary but nice touch