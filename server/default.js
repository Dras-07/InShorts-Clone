import News from './modal/news.js';
import {data}  from './constants/data.js';

const DefaultData=async () => {
    try{
 await News.deleteMany({});
 await News.insertMany(data);

 console.log('data inserted');
    }
    catch(e){
        console.log("error",e.message);
    }
}

export default DefaultData;