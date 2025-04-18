import './globals.css';
import { ReduxProvider } from '@/store/provider';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body>
        <ReduxProvider>{children}</ReduxProvider>
        </body>
        </html>
    );
}
