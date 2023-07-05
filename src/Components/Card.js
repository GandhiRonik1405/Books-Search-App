import React from 'react'

const Card = ({ book }) => {
    console.log(book)
    return (
        
        <>
        
        {
            book?.map((item) => {
                let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
                let amount= item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
                if(thumbnail!=undefined && amount!=undefined){
                return (
                   
                    <div clsssName="cardd">
                                        <img src={thumbnail} alt="" height={'70%'} />
                                        <div className="bottom">
                                            <h3 className="tittle"> {item.volumeInfo.title}</h3>
                                            <p className="amount">&#8377;{amount}</p>
                                        </div>
                                    </div>

                




                                )
                }
                            })
                        }
             
</>
    )

}

export default Card;























// {/*

// {/*

//             <div className="Container  ">

//                 <div className="Container-fluid  ">
//                     <div className="row text-center"> */}
// {/*
// {
//                             book.map((item) => {
//                                 let thumbnail=item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.thumbnail;

//                                 return (

//                                     <div clsssName="card">
//                                         <img src={thumbnail} alt="" height={'70%'} />
//                                         <div className="bottom">
//                                             <h3 className="tittle"> {item.authors}</h3>
//                                             <p className="amount">&#8377;4000</p>
//                                         </div>
//                                     </div>

//                                 )
//                             })
//                         }
//                     {/* </div>
//                 </div>
//             </div> */}




//         // </>
// //     )
// // }  


