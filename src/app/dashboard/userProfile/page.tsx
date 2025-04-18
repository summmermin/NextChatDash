'use client';

import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

export default function UserProfile() {
    const [loading, setLoading] = useState(true);
    const user = useSelector((state: RootState) => state.user.user);
    const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);

    useEffect(() => {
        if (isLoggedIn) {
            setLoading(false);
        }
    }, [isLoggedIn]);

    if (loading) {
        return <p>로딩 중...</p>;
    }

    if (!isLoggedIn) {
        return <p>로그인해주세요!</p>;
    }

    return (
        <div>
            <h1>환영합니다, {user?.name}님!</h1>
            <p>Email: {user?.email}</p>
        </div>
    );
}
