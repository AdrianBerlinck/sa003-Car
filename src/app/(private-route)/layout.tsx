'use client '
import NavMenu from "@/components/NavMenu";
import { TopMenu } from "@/components/TopMenu";
import styles from "./styles.module.css";

export default function PrivateLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="layout">
            <NavMenu />
            <main className="main">
                {children}
            </main>
        </div>
    )
}