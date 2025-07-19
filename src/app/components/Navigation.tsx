'use client';

import ReactDOM from 'react-dom';

import React, { useState, useEffect, useRef } from 'react';

import Image from 'next/image';
import Link from 'next/link';


export function Navigation() {

return (



    <nav className = "fixed top-0 left-0 right-0  bg-black">
        <ul className="flex justify-center space-x-20 p-4">








            <li>
                <Link href="/" className="text-white hover:text-gray-300">
                    Home
                </Link>
            </li>
            <li>
                <Link href="/about" className="text-white hover:text-gray-300">
                    About
                </Link>
            </li>
            <li>
                <Link href="/contact" className="text-white hover:text-gray-300">
                    Contact
                </Link>
            </li>
        </ul>







    </nav>
)









}