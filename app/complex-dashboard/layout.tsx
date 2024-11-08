import React from 'react'
interface DashboardLayoutProps {
    children: React.ReactNode;
    notifications: React.ReactNode;
    revenue: React.ReactNode;
    users: React.ReactNode;
    login: React.ReactNode;
}
const DashboardLayout: React.FC<DashboardLayoutProps> = ( {
    children,
    notifications,
    revenue,
    users,
    login
}) => {
    const isLoggedIn = true;
return isLoggedIn ? (
    <div>
        <div>
            {notifications}
        </div>
        <div>
            {revenue}
        </div>
        <div>
            {users}
        </div>
        <div>
            {children}
        </div>
    </div>
) : (
    <div>
        <div>
            {login}
        </div>
        
    </div>
);
}

export default DashboardLayout