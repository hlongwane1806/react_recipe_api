import React from 'react';

const Pagination =(props)=>{
    const pageLinks =[];
    for(let i=1; i <=props.pages; i++){
        let active = props.currentPage ===i?'active':'';

        pageLinks.push(<li key={i} className={` waves-effect ${active}`} onClick={()=>props.nextPage(i)}><a href="#">{i}</a></li>)
    }

    return(<div className="container">
        <div className="row">
            <div className="pagination">
                {props.currentPage>1? <li key='prev' className={` waves-effect`} onClick={()=>props.nextPage(props.currentPage-1)}><a href="#">Prev</a></li>:'' }
                {pageLinks}
                {props.currentPage <props.pages ? <li key='next' className={` waves-effect`} onClick={()=>props.nextPage(props.currentPage+1)}><a href="#">Next</a></li>:'' }
            </div>
        </div>
    </div>);
}

export default Pagination;