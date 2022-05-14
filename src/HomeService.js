import axios from 'axios';

const url = 'http://localhost:3000/';


    async function getHome() {
        let res = await axios.get(url);
        // console.log(res)
        return res;
    }



export default getHome
