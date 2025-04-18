'use client';

import LineChart from '@/components/charts/LineChart';

export default function DashboardPage() {
    const labels = ['월', '화', '수', '목', '금'];
    const data = [65, 59, 80, 81, 56];
    const label = '웹사이트 방문자 수';

    return (
        <div className="p-8 space-y-6">
            <h1 className="text-3xl font-semibold text-gray-200">대시보드</h1>
            <div>
                <h2 className="text-xl font-medium text-gray-400 mb-4">차트</h2>
                <LineChart labels={labels} data={data} label={label} />
            </div>
        </div>
    );
}
