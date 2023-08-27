import getUsers from '../actions/getUsers';
import Sidebar from '../components/sidebar/Sidebar';
import UserList from './components/UserList';

export default async function UserLayout({
    children
}: {
    children: React.ReactNode,
}) {

    const users = await getUsers();
    
    return (

        // Issue here was 'Sidebar; can't be used as a JSX component because it is an async function
        // It has been fixed so we need not to to write it github tells us to fix it this way which help us to remove it later when it gets fixed
        // @ts-expect-error Server Component

        <Sidebar>
            <div className="h-full">
                <UserList items = {users} />

                {children}
            </div>
        </Sidebar>
    )
}