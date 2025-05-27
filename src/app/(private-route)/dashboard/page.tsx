import { MdBuild, MdCheckCircle, MdFactory, MdInventory, MdMoney } from "react-icons/md";
import styles from './styles.module.css';
import { PieChart } from '@mui/x-charts/PieChart';
import { GraphicQuality } from "@/components/graphic_quality";

export default function Dashboard() {
    return (
        <div className={styles.containergraphic}>
            <GraphicQuality />
            <div className={styles.dashboardgraphic}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThF5vZ0X6EsLNuHm0vsKrJkMoCjEwA14RdMQ&s" alt="" /></div>
            <div className={styles.dashboardgraphic}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThF5vZ0X6EsLNuHm0vsKrJkMoCjEwA14RdMQ&s" alt="" /></div>
            <div className={styles.dashboardgraphic}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThF5vZ0X6EsLNuHm0vsKrJkMoCjEwA14RdMQ&s" alt="" /></div>

        </div>
    )
}   