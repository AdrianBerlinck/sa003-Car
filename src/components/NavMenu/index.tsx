'use client'
import Link from "next/link"
import styles from "./styles.module.css"
import logo from '@/assets/23977547-frente-visao-sombrio-silhueta-do-uma-moderno-luxo-preto-carro-isolado-em-preto-fundo-ai-gerado-gratis-foto.jpg';
import { usePathname } from "next/navigation"
import {FaHome, FaBoxOpen } from "react-icons/fa";
import {GrHostMaintenance} from "react-icons/gr";
import { LuFactory } from "react-icons/lu";
import { ImStatsBars } from "react-icons/im";

 
import Image from "next/image";

export default function NavMenu() {
    const pathName = usePathname();

    const itens = [
        {
            label: "Home",
            page: '/dashboard',
            icon: < FaHome />
        },
        {
            label: "Manutenção",
            page: '/maintenance',
            icon: < GrHostMaintenance/>
        },
        {
            label: "Produção",
            page: '/production',
            icon: < LuFactory />
        },
        {
            label: "Estoque",
            page: '/stock',
            icon: < FaBoxOpen />
        },
        {
            label: "Qualidade",
            page: '/quality',
            icon: < ImStatsBars/>
        },
    ]

    return (
        <div className={styles.container}>
            <Image src={logo}  width={250} height={150} alt="" />
            
            <div>
                <div className={styles.profile}>
                    <img src="https://github.com/AdrianBerlinck.png" />
                    <div className={styles.profileInfos}>
                        <strong>Adrian Berlinck</strong>
                        <strong>adrian@gmail.com</strong>
                    </div>
                </div>
                <div className={styles.content}>
                    {itens.map(item => (
                        <Link
                            key={item.label}
                            className={`${styles.item} ${pathName === item.page ? styles.selected : ""}`}
                            href={item.page}
                        >
                            {item.icon}
                            <span>{item.label}</span>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}