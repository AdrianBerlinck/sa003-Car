import { MdBuild, MdCheckCircle, MdFactory, MdInventory, MdMoney } from "react-icons/md";
import styles from './styles.module.css';
import { PieChart } from '@mui/x-charts/PieChart';

export default function Dashboard() {
    return (
        <div className={styles.containergraphic}>
            
            <div className={styles.dashboardgraphic}>
            <PieChart
  series={[
    {
      data: [
        { id: 0, value: 10, label: 'Aprovado' },
        { id: 1, value: 15, label: 'Reprovado' },
        { id: 2, value: 20, label: 'Pendente' },
      ],
    },
  ]}
  width={400}
  height={400}
/>



            </div>
            <div className={styles.dashboardgraphic}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThF5vZ0X6EsLNuHm0vsKrJkMoCjEwA14RdMQ&s" alt="" /></div>
            <div className={styles.dashboardgraphic}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThF5vZ0X6EsLNuHm0vsKrJkMoCjEwA14RdMQ&s" alt="" /></div>
            <div className={styles.dashboardgraphic}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThF5vZ0X6EsLNuHm0vsKrJkMoCjEwA14RdMQ&s" alt="" /></div>

        </div>
    )
}   