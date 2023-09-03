"use client"
import Header from '@/components/Navbar/Header'
import Drawer from '@/components/Navbar/Drawer'
import Card from '@/components/Navbar/Card'

interface IProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

export default function Navbar({ isOpen, setIsOpen }: IProps) {
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
