"use client"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { FaCircle } from 'react-icons/fa';


ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
    // labels: ['Apple      61%', 'Samsung  15%', 'Asus      13%', 'Xiaomi     8%'],
    datasets: [
        {
            label: 'My Pie Chart',
            data: [51, 25, 15,9],
            backgroundColor: ['#04B4FC', '#D91189','#6FAB23','#6C11D9'],
            borderColor: '#fff',
        },
    ],
  };

  
  const SuppliersChart = () => {
    // const chartOptions = {
        const chartOptions: any = {
            // your options here
            plugins: {
                legend: { // Customize legend options
            position: 'bottom', // Move legend to the right side
            // labels: {
            //   boxWidth: 80, // Adjust box width for one category per line
              
            //   generateLabels: (chart: { data: { labels: any; datasets: { backgroundColor: { [x: string]: any; }; }[]; }; }) => { // Custom label generation function
            //     const labels = chart.data.labels;
            //     return labels.map((label: any, index: string | number) => ({
            //       text: label,
            //       fillStyle: chart.data.datasets[0].backgroundColor[index],
            //       strokeStyle: '#fff',
            //       lineWidth: 1,
            //       fontColor: '#000',
                  
                  
            //       // Add padding to separate lines if needed
            //       // paddingLeft: 10,
            //     }));
            //   },
            // },
        },
    },
// }
};


const arr=[
{
  id:1,
  brand:'Apple',
  percent:'61%',
  color:'#04B4FC'
},

{
  id:2,
  brand:'Samsung',
  percent:'15%',
  color:'#D91189'
},

{
  id:3,
  brand:'Asus',
  percent:'13%',
  color:'#6FAB23'

},
{
  id:4,
  brand:'Xiaomi',
  percent:'8%',
  color:'#6C11D9'
}
]

    return (
      <div className='  flex lg:flex-col md:justify-start    md:h-[123px] lg:h-auto md:max-w-[629px]  lg:max-w-[359px]    '>

        <div className='max-w-[130px] h-[126px] lg:max-w-[200px] lg:h-[200px]  ' >
        <Pie data={data} options={chartOptions} />
        </div>
        <div className='   grid grid-cols-2 lg:grid-cols-1 text-xs space-x-2 lg:space-x-5 space-y-3 md:place-content-center md:place-items-baseline lg:mt-4  md:max-lg:justify-items-center  xl:grid-cols-1 '>
          {arr.map((item)=>(
            <div className='flex  items-center   gap-3 ' key={item.id}>
              <div className='flex gap-3  items-center  '>
                <div className=' w-[10px] h-[10px]'>
                  <FaCircle color={item.color}/>
                </div>
                <p>{item.brand}</p>
              </div>
              <p className='text-[#04B4FC] text-xs font-bold'>{item.percent}</p>
            </div>

          ))}
          {/* <div className='flex justify-between items-center'>
          
            <div className='flex gap-2 items-center'>

            <div className='text-[#04B4FC] w-[10px] h-[10px]'>
              <FaCircle/>
            </div>
            <p>Apple</p>
            </div>
            <p className='text-[#04B4FC] text-xs font-bold'>61%</p>
          </div> */}
        </div>

     
      </div>

    )
  }
  
  export default SuppliersChart
  