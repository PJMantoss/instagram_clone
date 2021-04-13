import React from 'react';
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';

const user = () => !username || !fullname ? (
                        <Skeleton count={1} height={61} />
                    ) : (
                        <Link to={`/p/${username}`} className={}>
                        </Link>
                    );
