
import PropTypes from 'prop-types';

const Blog = ({ blog }) => {

    const { title, cover, author,hashtag, img, reading_time, posted_date } = blog;
    return (
        <div>
            <img className='w-96' src={cover} alt={`{title}`} />
            <div className='flex justify-between'>
                <div className='flex'>
                    <img className='w-14' src={img} alt="" />
                    <div className='ml-6'>
                        <h3 className='text-2xl'>{author} </h3>
                    <p>{posted_date} </p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read </span>
                </div>
            </div>
            <h2 className='text-xl bold'>{title}</h2>
            <p>
           {hashtag}
            </p>
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired
}
export default Blog;