import React,{useState,useEffect} from 'react'
import {fetchDailyData} from '../../api'
import {Line,Bar} from 'react-chartjs-2'
import styles from './Chart.module.css'

const Chart = ({data:{confirmed,recovered,deaths},country})=>{
    const [dailyData,setDailyData]=useState([])

    useEffect(()=>{
        const fetchAPI=async()=>{
           setDailyData(await fetchDailyData()) 
        }
        console.log(dailyData)
        fetchAPI()
    },[])

    const lineChart=(
        dailyData.length
        ?(
        <Line
        data={{
            labels:dailyData.map(({date})=>date),
            datasets:[{
                data:dailyData.map(({confirmed})=>confirmed),
                label:'Infected',
                borderColor:'#3333ff',
                fill:true
            },{
                data:dailyData.map(({deaths})=>deaths),
                label:'Deaths',
                borderColor:'red',
                fill:true,
                backgroundColor:'rgba(255,0,0,0.5)'
            }]
        }}
        />):null
    )

    const barChart=(
        confirmed
        ?(
            <Bar
            data={{
                labels:['Infected','Recovered','Deaths'],
                datasets:[{
                    label:'People',
                    backgroundColor:[
                        'rgba(109, 11, 101, 0.5)',
                        'rgba(1, 255, 213, 0.767)',
                        'rgba(189, 34, 34, 0.815)'
                    ],
                    data:[confirmed.value,recovered.value,deaths.value]
                }]
            }}
            options={{
                legend:{display:false},
                title:{display:true,text:`Current state in ${country}`}
            }}
            />
        ):null
    )

    return(
        <div className={styles.container}>
            {country?barChart:lineChart}
        </div>
    )
}
export default Chart