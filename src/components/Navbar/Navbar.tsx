"use client"
import { useState } from 'react'
import Header from '@/components/Navbar/Header'
import Drawer from '@/components/Navbar/Drawer'
import Card from '@/components/Navbar/Card'

interface IProps {
}

export default function Navbar({ }: IProps) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <Header setIsOpen={setIsOpen} isOpen={isOpen} />
            <div className='absolute w-full h-[calc(100vh-56px)]'>
                <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
                    <Card />
                </Drawer>
            </div>
        </>
    );
}
