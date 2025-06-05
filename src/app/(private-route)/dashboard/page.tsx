import { MdBuild, MdCheckCircle, MdFactory, MdInventory, MdMoney } from "react-icons/md";
import styles from './styles.module.css';
import { PieChart } from '@mui/x-charts/PieChart';
import { GraphicQuality } from "@/components/graphic_quality";

export default function Dashboard() {
    return (
        <div className={styles.containergraphic}>
            <GraphicQuality />
            
        </div>
    )
}   