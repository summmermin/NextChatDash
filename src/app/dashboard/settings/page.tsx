'use client';

// src/app/dashboard/settings/page.tsx
import { useEffect, useState } from 'react';

export default function SettingsPage() {
    const [settings, setSettings] = useState<any>(null);  // 상태 초기화
    const [isLoading, setIsLoading] = useState(true); // 로딩 상태 관리
    const [error, setError] = useState<string | null>(null); // 오류 상태 관리

    useEffect(() => {
        const fetchSettings = async () => {
            try {
                const res = await fetch('/api/settings');

                if (!res.ok) {
                    throw new Error('데이터를 가져오는 데 실패했습니다.');
                }

                const data = await res.json();
                setSettings(data);  // 데이터 설정
            } catch (err: any) {
                setError(err.message);  // 오류 메시지 설정
            } finally {
                setIsLoading(false);  // 로딩 완료
            }
        };

        fetchSettings();
    }, []);

    if (isLoading) {
        return <h2>로딩 중...</h2>;  // 로딩 중일 때
    }

    if (error) {
        return <h2>오류 발생: {error}</h2>;  // 오류 발생 시
    }

    return (
        <div>
            <h1>설정 페이지</h1>
            <p>설정 값: {settings?.value}</p>
        </div>
    );
}
