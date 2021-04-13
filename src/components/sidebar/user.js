import React from 'react';
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';

const User = ({ username, fullName }) => !username || !fullName ? (
                        <Skeleton count={1} height={61} />
                    ) : (
                        <Link to={`/p/${username}`} className="grid grid-cols-5 gap-4 mb-4 items-center">
                            <div className="flex items-center justify-between col-span-1">
                                <img
                                    className="rounded-full w-16 flex mr-3"
                                    src={}
                                    alt={}
                                />
                            </div>
                        </Link>
                    );

export default User;
