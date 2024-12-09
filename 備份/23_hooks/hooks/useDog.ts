import {reactive,onMounted} from 'vue'
import axios from 'axios'
// https://dog.ceo/api/breed/pembroke/images/random

export default function (){
    // 數據
    let dogList = reactive([
        'https://images.dog.ceo/breeds/pembroke/n02113023_10829.jpg'
    ])
    //方法
    async function getDog(){
        try{
            let result = await axios.get('https://dog.ceo/api/breed/pembroke/images/random')
            dogList.push(result.data.message)
        } catch (error){
            alert(error)
        }
    }

    // 鉤子
    onMounted(()=>{
        getDog()
    })
    // 向外部提供東西
    return {dogList,getDog}
}