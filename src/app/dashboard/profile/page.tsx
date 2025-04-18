// src/app/dashboard/profile/page.tsx

'use client';

import {useEffect, useState} from 'react';

export default function ProfilePage() {
    const [profile, setProfile] = useState<any>(null);  // 상태 초기화
    const [isLoading, setIsLoading] = useState(true);   // 로딩 상태 관리
    const [error, setError] = useState<string | null>(null);  // 오류 상태 관리

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const res = await fetch('/api/profile');  // 프로필 API 요청

                if (!res.ok) {
                    throw new Error('프로필 정보를 불러오는 데 실패했습니다.');
                }

                const data = await res.json();
                setProfile(data);  // 데이터 설정
            } catch (err: any) {
                setError(err.message);  // 오류 메시지 설정
            } finally {
                setIsLoading(false);  // 로딩 완료
            }
        };

        fetchProfile();
    }, []);

    if (isLoading) {
        return <h2>로딩 중...</h2>;  // 로딩 중일 때
    }

    if (error) {
        return <h2>오류 발생: {error}</h2>;  // 오류 발생 시
    }

    return (
        <div>
            <h1>프로필 페이지</h1>
            <p>이름: {profile?.name}</p>
            <p>이메일: {profile?.email}</p>
            <p>나이: {profile?.age}</p>
        </div>
    );
}
