
import PropTypes from 'prop-types';
import {FaBookmark} from 'react-icons/fa';

const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {

    const { title, cover, author,hashtag, img, reading_time, posted_date } = blog;
    return (
       

        <div className='mb-20 space-y-4'>
            <img className='w-full' src={cover} alt={`{title}`} />
            <div className='flex justify-between mt-3 '>
                <div className='flex'>
                    <img className='w-14' src={img} alt="" />
                    <div className='ml-6'>
                        <h3 className='text-2xl'>{author} </h3>
                    <p>{posted_date} </p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read </span>
                    <button onClick={() => handleAddToBookmark (blog)}><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h2 className='text-xl bold'>{title}</h2>
            <p>
           {hashtag}
            </p>
            <button 
            onClick={()=>handleMarkAsRead(reading_time)}
            className='text-white bg-sky-500 p-3 px-32 lg:ml-56'>Select</button>
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark:PropTypes.func,
    handleMarkAsRead :PropTypes.func

}
export default Blog;
// import PropTypes from 'prop-types';
// import { FaBookmark } from 'react-icons/fa';

// const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {
//     const { title, cover, author, author_img, posted_date, reading_time, hashtags } = blog;
//     const { id, title, cover, author, author_img, posted_date, reading_time, hashtags } = blog;
//     return (
//         <div className='mb-20  space-y-4'>
//             <img className='w-full mb-8' src={cover} alt={`Cover picture of the title ${title}`} />
// const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {
//                 }
//             </p>
//             <button
//                 onClick={() => handleMarkAsRead(reading_time)}
//                 onClick={() => handleMarkAsRead(id, reading_time)}
//                 className='text-purple-800 font-bold underline'
//             >Mark As Read</button>
//         </div>
//     );
// };
// Blog.propTypes = {
//     blog: PropTypes.object.isRequired,
//     handleAddToBookmark: PropTypes.func,
//     handleMarkAsRead: PropTypes.func
// }
// export default Blog;