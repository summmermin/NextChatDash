import {ReactNode} from 'react';

interface DashboardLayoutProps {
    children: ReactNode;
}

export default function DashboardLayout({children}: DashboardLayoutProps) {
    return (
        <div>
            <aside>이곳은 레이아웃 입니다.</aside>
            <main>{children}</main>
        </div>
    );
}
