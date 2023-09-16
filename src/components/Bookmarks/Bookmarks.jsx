import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark'
 
 const Bookmarks = ({bookmarks,readingTime}) => {
    return (
        <div className="md:w-1/3  bg-gray-50 ml-4 mt-10 pt-4">
            <div>
            <h3 className='text-4xl'>Credit Hour Remaining:{readingTime} </h3> 
            </div>
            <h2 className="text-3xl text-center rounded-xl"> Bookmarked Blogs:{bookmarks.length} </h2>
            {
                 bookmarks.map((bookmark,idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark> )
            }
            <h3>Total Credit Hour:</h3>
        </div>
    );
 };
 Bookmarks.propTypes ={
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
 }
 export default Bookmarks;

// import PropTypes from 'prop-types'
// import Bookmark from '../Bookmark/Bookmark'
// const Bookmarks = ({bookmarks, readingTime}) => {
//   return (
//     <div className="md:w-1/3 bg-gray-300 ml-4 mt-2 pt-4">
//             <div>
//                 <h3 className="text-4xl">Reading Time: {readingTime}</h3>
//             </div>
//             <h2 className="text-3xl text-center ">Bookmarked Blogs: {bookmarks.length}</h2>
//             {
//                 bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark> )
//                 bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark> )
//             }
//         </div>
//   )
// }
// Bookmarks.propTypes = {
//     bookmarks: PropTypes.array,
//     readingTime: PropTypes.number
// }
// export default Bookmarks