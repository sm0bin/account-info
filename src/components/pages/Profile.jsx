import React from 'react';
import useLoadDataSecure from '../../hooks/useLoadDataSecure';

const Profile = () => {
    const [user, refetchUser, isLoadingUser] = useLoadDataSecure('/users/me', 'User');
    console.log(user);
    return (
        <div className='mx-4 md:mx-5 lg:mx-auto max-w-7xl py-20'>

            <div className="card card-side bg-base-100 border-2">

                <figure><img className='w-96' src={user?.image ? user?.image : 'https://source.unsplash.com/lw9LrnpUmWw'} alt={user?.fullName} /></figure>
                <div className="card-body">
                    <h2 className="card-title">Name: {user?.fullName}</h2>
                    <p>Email: {user?.email}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Edit Information</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;